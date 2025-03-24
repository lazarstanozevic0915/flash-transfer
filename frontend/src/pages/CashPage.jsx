import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Check } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonutProgress from '../components/DonutProgress';

import heroBackground from '../assets/image/hero-background.png';

const CashPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Get data from Redux store
    const { amount, sourceCurrency, destinationCurrency } = useSelector((state) => state.payment);

    // Exchange rate state
    const [exchangeRate, setExchangeRate] = useState(1);
    
    // Transaction details state
    const [transactionDetails, setTransactionDetails] = useState({
        fee: '2.50',
        transferTime: '1 Min',
        totalToPay: '0.00',
        recipientGets: '0.00'
    });
    
    // Loading and error states
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
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
        if (!from || !to) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/exchange/rates?from=${from}&to=${to}`);
            
            if (!response.ok) {
                throw new Error(`API returned status ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                setExchangeRate(data.data.rate);
                
                // If amount exists, recalculate
                if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
                    calculateExchange();
                }
            } else {
                setError(data.message || 'Failed to fetch exchange rate');
            }
        } catch (err) {
            console.error('Exchange rate API error:', err);
            setError('Could not fetch exchange rate. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Calculate exchange details via API
    const calculateExchange = async () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
        if (!sourceCurrency || !destinationCurrency) return;
        
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
            
            if (!response.ok) {
                throw new Error(`API returned status ${response.status}`);
            }
            
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
                    feeCurrency: feeCurrency || sourceCurrency,
                    transferTime: `${transferTime} ${transferTimeUnit}`,
                    totalToPay: totalToPay.toFixed(2),
                    recipientGets: recipientGets.toFixed(2)
                });
                
                // Optionally, dispatch to Redux store to save this data
                // dispatch(updateTransactionDetails({...}));
            } else {
                setError(data.message || 'Failed to calculate exchange');
            }
        } catch (err) {
            console.error('Exchange calculate API error:', err);
            setError('Could not calculate exchange. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isLoading) {
            return; // Prevent submission while loading
        }
        
        // You might want to save the final transaction details to Redux
        // dispatch({
        //     type: 'UPDATE_TRANSACTION_DETAILS',
        //     payload: {
        //         ...transactionDetails,
        //         exchangeRate,
        //         amount,
        //         sourceCurrency,
        //         destinationCurrency
        //     }
        // });
        
        navigate('/send/review-details');
    };

    return (
        <div className="min-h-screen dm-sans">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="">
                <div className='max-w-4xl mx-auto max-sm:py-0 px-4 pt-8 pb-8'>
                    {/* Progress Steps */}
                    <div className="flex justify-between max-sm:hidden relative">
                        {/* Progress Line */}
                        <div className="absolute top-5 left-24 w-[78%] h-[2px] bg-gray-200">
                            <div className="w-[32%] h-full bg-blue-500" />
                        </div>
                        
                        {/* Steps */}
                        {[
                            { label: "Receiver's info", description: "Enter the informations", active: false, completed: true },
                            { label: "Receiver's Method", description: "Enter the informations", active: true, completed: false },
                            { label: "Review Details", description: "Enter the informations", active: false, completed: false },
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
                        <DonutProgress size="w-28 h-28" percentage={50} />
                        <div className="flex flex-col justify-between items-start">
                            <span className='text-[#181F30] text-[16px] font-bold'>Receiver's Method</span>
                            <span className='text-[#6E757D] text-[13px]'>Enter the informations.</span>
                        </div>
                    </div>
                </div>

                <div className="w-full relative flex justify-center dm-sans">
                    <div className="w-full h-[70vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
                        <div className="absolute top-0 left-[26%] z-10">
                            <img
                                src={heroBackground}
                                alt=""
                                className="h-[480px] w-[600px] object-fill"
                            />
                        </div>
                    </div>
                    <div className={`w-[800px] min-h-screen max-lg:px-6 space-y-6 max-sm:space-y-2 pt-24 max-sm:pt-8 pb-40 relative z-20 flex flex-col items-center justify-center`}>
                        <span className="text-[44px]/10 max-sm:text-[32px] max-sm:text-center dm-sans-medium">
                            Choose delivery method 
                        </span>
                        <p className="text-[#6E757D] dm-sans-light text-[14px] max-sm:text-[12px] text-center">
                            Choose your delivery method: Mobile Money for instant transfers to a mobile wallet, or Cash Pickup for <br /> convenient collection at a nearby location. Both options ensure secure, quick, and easy access to your funds. <br /> Select the method that suits your needs best!
                        </p>
                        <div className="w-full rounded-4xl bg-white shadow-md p-6">
                            <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                                <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}> 
                                    <div className="flex gap-3 border w-full p-2.5 border-[#FF3E24] rounded-xl text-[12px] text-[#FF3E24] bg-red-100 items-center">
                                        <div className='rounded-full flex items-center border w-5 h-5 justify-center p-1'>i</div>
                                        <h3>Select Delivery method</h3>
                                    </div>

                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="amount" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Receiving Method</label>
                                        <input type="text" id='amount' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Cash' disabled  />
                                    </div>

                                    <div className="flex flex-col w-full items-center text-[#000000] justify-center gap-3 py-3 text-[12px] border-[#D3D8DD]">
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>You sent</span>
                                            <span className='dm-sans-medium'>{`${amount} ${sourceCurrency}`}</span>
                                        </div>
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>Transfer Rate</span>
                                            <span className='dm-sans-medium'>{`1 ${sourceCurrency} = ${exchangeRate} ${destinationCurrency}`}</span>
                                        </div>
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>Fee</span>
                                            <span className='dm-sans-medium'>{`+${transactionDetails.fee} ${transactionDetails.feeCurrency || sourceCurrency}`}</span>
                                        </div>
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>Total To Pay</span>
                                            <span className='dm-sans-medium'>{`${transactionDetails.totalToPay} ${sourceCurrency}`}</span>
                                        </div>
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>Recipient Gets</span>
                                            <span className='dm-sans-medium'>{`${transactionDetails.recipientGets} ${destinationCurrency}`}</span>
                                        </div>
                                        <div className='flex w-full items justify-between'>
                                            <span className='text-[#6A6A6A] dm-sans-light'>Transfer Time</span>
                                            <span className='dm-sans-medium'>{transactionDetails.transferTime}</span>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="flex gap-3 border w-full p-2.5 border-[#FF3E24] rounded-xl text-[12px] text-[#FF3E24] bg-red-100 items-center">
                                            <div className='rounded-full flex items-center border w-5 h-5 justify-center p-1'>!</div>
                                            <h3>{error}</h3>
                                        </div>
                                    )}
                                    
                                    <div className="flex max-sm:flex-col-reverse gap-3">
                                        <NavLink to={`/send/receivers-info`} className='w-full p-2.5 flex items-center justify-center border rounded-xl text-[14px] border-[#D3D8DD] font-medium text-[#6E757D]'>Back</NavLink>
                                        <button 
                                            type='submit' 
                                            className={`w-full p-2.5 rounded-xl text-[14px] ${isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#FFC000] hover:bg-[#E6AD00]'}`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Processing...' : 'Continue'}
                                        </button>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CashPage;