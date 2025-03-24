import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png';
import { setTransferId, setTransferStatus } from '../store/paymentSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { blogUser1Img, currency, icons } from '../assets/image';
import DonutProgress from '../components/DonutProgress';
import { useDispatch, useSelector } from 'react-redux';
import SenderDetails from '../components/SenderDetails';
import RecieverDetails from '../components/RecieverDetails';
import { cashToCrypto, cashToMobile, cryptoToCash } from '../Services/payment';

const ReviewDetailsPage = () => {
    const { paymentMethod, receiverMethod, amount, sourceCurrency, destinationCurrency, walletAddress, recipient, provider } = useSelector((state) => state.payment);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Add exchange rate related state
    const [exchangeRate, setExchangeRate] = useState(1);
    const token  = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [transactionDetails, setTransactionDetails] = useState({
        fee: '5.99',
        transferTime: 'Immediate',
        totalToPay: amount || '0.00',
        recipientGets: amount || '0.00'
    });

    // Effect to fetch exchange rate when currencies change
    useEffect(() => {
        if (sourceCurrency && destinationCurrency) {
            fetchExchangeRate(sourceCurrency, destinationCurrency);
        }
    }, [sourceCurrency, destinationCurrency]);

    // Effect to update transaction details when amount changes
    useEffect(() => {
        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            calculateExchange();
        }
    }, [amount, sourceCurrency, destinationCurrency, exchangeRate]);

    // Fetch exchange rate from API
    const fetchExchangeRate = async (from, to) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/exchange/rates?from=${from}&to=${to}`);
            const data = await response.json();
            
            if (data.success) {
                setExchangeRate(data.data.rate);
                
                // If amount exists, recalculate
                if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
                    calculateExchange();
                }
            } else {
                setError(data.message || 'Failed to fetch exchange rate');
                console.error('Exchange rate error:', data.message);
            }
        } catch (err) {
            setError('Network error: Could not fetch exchange rate');
            console.error('Exchange rate API error:', err);
            
            // Fallback to 1:1 exchange rate to prevent blocking user flow
            setExchangeRate(1);
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate exchange details via API
    const calculateExchange = async () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/exchange/calculate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fromCurrency: sourceCurrency,
                    toCurrency: destinationCurrency,
                    amount: amount
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                const { 
                    exchangeRate, 
                    fee, 
                    feeCurrency, 
                    totalToPay, 
                    recipientGets, 
                    transferTime, 
                    transferTimeUnit 
                } = data.data;
                
                // Update exchange rate
                setExchangeRate(exchangeRate);
                
                // Update transaction details
                setTransactionDetails({
                    fee: fee.toFixed(2),
                    feeCurrency,
                    transferTime: `${transferTime} ${transferTimeUnit}`,
                    totalToPay: totalToPay.toFixed(2),
                    recipientGets: recipientGets.toFixed(2)
                });
            } else {
                setError(data.message || 'Failed to calculate exchange');
                console.error('Exchange calculation error:', data.message);
                
                // Use basic calculation as fallback
                const recipientGets = parseFloat(amount) * exchangeRate;
                setTransactionDetails({
                    ...transactionDetails,
                    totalToPay: amount,
                    recipientGets: recipientGets.toFixed(2)
                });
            }
        } catch (err) {
            setError('Network error: Could not calculate exchange');
            console.error('Exchange calculate API error:', err);
            
            // Use basic calculation as fallback
            const recipientGets = parseFloat(amount) * exchangeRate;
            setTransactionDetails({
                ...transactionDetails,
                totalToPay: amount,
                recipientGets: recipientGets.toFixed(2)
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (paymentMethod === 'bank') {
            navigate('/send/review-details/confirm');
        } else {
            if( receiverMethod === 'cash' && paymentMethod === 'wallet' ) {
                const res = await cryptoToCash({
                        amount: parseInt(amount),
                        sourceCurrency: sourceCurrency,
                        destinationCurrency: destinationCurrency,
                        walletAddress: walletAddress,
                        beneficiaryId: recipient.id,
                        webhookUrl: "https://webhook.site/your-test-webhook-id",
                    }, token); 
                console.log(res, "res in payment");
                dispatch(setTransferId(res.data.data.id));
                dispatch(setTransferStatus(res.data.data.status));
            }
             else if (receiverMethod === 'mobile' && paymentMethod === 'cash') {
                const res = await cashToMobile({
                    amount: parseInt(amount),
                    sourceCurrency: sourceCurrency,
                    destinationCurrency: destinationCurrency,
                    sourceType: "CASH",
                    destinationType: "MOBILE_MONEY",
                    beneficiaryId: recipient.id,
                    paymentAggregator: provider,
                    mobileMoneyDetails: {
                        phoneNumber: recipient.mobileNumber,
                        country: recipient.country,
                        provider: provider,
                    }
                    }, token);
                    console.log(res, "res in payment");
                    dispatch(setTransferId(res.data.data.id));
                    dispatch(setTransferStatus(res.data.data.status));
            }
            else if (paymentMethod === 'cash' && receiverMethod === 'wallet') {
                const res = await cashToCrypto({
                    amount: parseInt(amount),
                    sourceCurrency: sourceCurrency,
                    destinationCurrency: destinationCurrency,
                    sourceType: "CASH",
                    destinationType: "CRYPTO_WALLET",
                    beneficiaryId: recipient.id,
                    walletAddress: walletAddress,
                    paymentLocation: {
                        latitude: 5.3696,
                        longitude: -4.0083,
                        locationName: "Cash Pickup Point, Abidjan"
                    },
                }, token);
                console.log(res, "res in payment");
                dispatch(setTransferId(res.data.data.id));
                dispatch(setTransferStatus(res.data.data.status));
            }
            navigate('/send/payment');
        }
    };

    return (
        <div className="min-h-screen dm-sans">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="">
                <div className='max-w-4xl mx-auto px-4 pt-8 pb-8 max-sm:py-0'>
                    {/* Progress Steps */}
                    <div className="flex max-sm:hidden justify-between relative">
                        {/* Progress Line */}
                        <div className="absolute top-5 left-24 w-[78%] h-[2px] bg-gray-200">
                            <div className="w-[62%] h-full bg-blue-500" />
                        </div>
                        
                        {/* Steps */}
                        {[
                            { label: "Receiver's info", description: "Enter the informations", active: false, completed: true },
                            { label: "Receiver's Method", description: "Enter the informations", active: false, completed: true },
                            { label: "Review Details", description: "Enter the informations", active: true, completed: false },
                            { label: "Payment Complete", description: "Enter the informations", active: false, completed: false }
                        ].map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center w-1/4">
                                <div className=" bg-white rounded-full w-13 h-13 flex items-center justify-center">
                                    <div className={` rounded-full border ${
                                        step.active 
                                        ? 'bg-blue-500 w-10 h-10 p-1 border-4 border-blue-50 text-white' 
                                        : step.completed ? 'bg-blue-500 w-9.5 h-9.5 p-1 text-white' : ' bg-white w-8 h-8 border-gray-200 text-gray-400'
                                    } flex items-center justify-center z-10 mb-2 text-sm font-medium`}>
                                        <div className={step.completed ? '' : `w-4 h-4 rounded-full ${ step.active ? 'bg-white' : 'bg-gray-200'}`}>
                                            {step.completed && <Check size={20} />}
                                        </div>
                                    </div>
                                </div>
                            <div className="text-center">
                                <div className="text-sm font-semibold">{step.label}</div>
                                <div className="text-[10px] text-gray-500">{step.description}</div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className='hidden max-sm:flex -space-x-4 items-center'>
                        <DonutProgress  size = "w-28 h-28" percentage = {75} />
                        <div className="flex flex-col justify-between items-start">
                            <span className='text-[#181F30] text-[16px] font-bold'>Review Details</span>
                            <span className='text-[#6E757D] text-[13px]'>Enter the informations.</span>
                        </div>
                    </div>
                </div>

                <div className="w-full relative flex justify-center dm-sans">
                    <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
                        <div className="absolute top-0 left-[26%] max-sm:left-1 z-10">
                            <img
                            src={heroBackground}
                            alt=""
                            className="h-[480px] max-sm:h-[320px] w-[600px] object-fill"
                            />
                        </div>
                    </div>
                    <div className={`min-h-[50vh] space-y-6 relative z-20 flex flex-col items-center justify-center`}>
                        <span className="text-[44px]/10 dm-sans-medium">
                            Review Details
                        </span>
                        <p className="text-[#6E757D] dm-sans-light text-[14px] text-center max-sm:text-[15.5px]">
                            Check the summary of your order before validating.
                        </p>
                    </div>
                </div>
                <div className='w-full min-h-screen pt-16 max-sm:pt-8 pb-32 max-sm:pb-26 px-32 max-lg:px-5'>
                    <div className='w-full flex gap-9 max-lg:gap-3 max-sm:flex-col'>
                        
                        <div className="w-[64%] max-sm:w-full space-y-6 h-full">
                            <SenderDetails />
                            <RecieverDetails />
                            <div className="w-full max-sm:hidden flex gap-3">
                                <button className='p-2.5 border w-full text-[#6E757D] border-[#D3D8DD] rounded-xl text-[14px]'>Cancel</button>
                                <button onClick={handleClick} className='p-2.5 w-full rounded-xl text-[14px] bg-[#FFC000]'>
                                    {isLoading ? 'Processing...' : 'Confirm'}
                                </button>
                            </div>
                        </div>
                        <div className="w-[36%] max-sm:w-full space-y-6 h-full">
                            <div className='w-full'>
                                <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                                    <span className='text-[15px] font-semibold text-[#181F30]'>Amount</span>
                                </div>
                                <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3">
                                            <div className='rounded-full'>
                                                <img src={icons.receiverCard} alt="" />
                                            </div>
                                            <div className='flex flex-col py-1.5 justify-between'>
                                                <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>{amount} {sourceCurrency}</h4>
                                                <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Credit Card</h4>
                                            </div>
                                        </div>
                                        <button className='px-4 py-2 border text-[13px] rounded-xl border-[#2475FF] text-[#2475FF]'>Edit Amount</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                                    <span className='text-[15px] font-semibold text-[#181F30]'>Transfer Summary</span>
                                    {isLoading && <span className="text-[12px] text-gray-500">Updating...</span>}
                                </div>
                                <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Amount to send</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>{amount} {sourceCurrency}</span>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Transfer Rate</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>$ {transactionDetails.fee}</span>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Fee Waived</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>-$ {transactionDetails.fee}</span>
                                    </div>
                                    <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Total Cost</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>{transactionDetails.totalToPay} {sourceCurrency}</span>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Total to recipient</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>{transactionDetails.recipientGets} {destinationCurrency}</span>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[14px] font-medium text-[#6A6A6A]'>Exchange Rate</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>1 {sourceCurrency} = {exchangeRate} {destinationCurrency}</span>
                                    </div>
                                    <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[13px] font-medium text-[#181F30]'>Total to pay</span>
                                        <span className='text-[15px] font-medium text-[#181F30]'>{transactionDetails.totalToPay} {sourceCurrency}</span>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <span className='text-[13px] font-medium text-[#181F30]'>Recipient Gets</span>
                                        <span className='text-[14px] font-medium text-[#181F30]'>{transactionDetails.recipientGets} {destinationCurrency}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <img src={icons.receiverSup} alt="" />
                                            <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Availability</h4>
                                        </div>
                                        <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>{transactionDetails.transferTime}</div>
                                    </div>
                                    {error && <div className="text-red-500 text-[12px]">{error}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-sm:flex flex-col-reverse hidden gap-3">
                            <button className='p-2.5 border w-full text-[#6E757D] border-[#D3D8DD] rounded-xl text-[14px]'>Cancel</button>
                            <button
                            onClick={handleClick}
                             className='p-2.5 w-full rounded-xl text-[14px] bg-[#FFC000]'
                             disabled={isLoading}
                             >
                                {isLoading ? 'Processing...' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ReviewDetailsPage;