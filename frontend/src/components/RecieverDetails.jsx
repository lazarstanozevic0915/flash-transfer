import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { blogUser1Img, currency, icons } from '../assets/image';
import { NavLink } from 'react-router-dom';

const RecieverDetails = () => {
    const dispatch = useDispatch();
    const { paymentMethod, amount, sourceCurrency, destinationCurrency, recipient, receiverMethod } = useSelector((state) => state.payment);
    
    // Additional states for exchange calculations
    const [exchangeRate, setExchangeRate] = useState(1);
    const [calculatedDetails, setCalculatedDetails] = useState({
        fee: '2.50',
        totalToPay: amount,
        recipientGets: amount
    });
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
            }
        } catch (err) {
            setError('Network error: Could not fetch exchange rate');
            console.error('Exchange rate API error:', err);
            
            // Fallback to default exchange rate
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
                    exchangeRate: newRate, 
                    fee, 
                    totalToPay, 
                    recipientGets 
                } = data.data;
                
                // Update exchange rate
                setExchangeRate(newRate);
                
                // Update transaction details
                setCalculatedDetails({
                    fee: fee.toFixed(2),
                    totalToPay: totalToPay.toFixed(2),
                    recipientGets: recipientGets.toFixed(2)
                });
                
                // Potentially update Redux store here if needed
                // dispatch(updateRecipientAmount(recipientGets.toFixed(2)));
            } else {
                setError(data.message || 'Failed to calculate exchange');
                
                // Fallback to simple calculation
                const receivedAmount = parseFloat(amount) * exchangeRate;
                const feeAmount = 2.50;
                const totalAmount = parseFloat(amount) + feeAmount;
                
                setCalculatedDetails({
                    fee: feeAmount.toFixed(2),
                    totalToPay: totalAmount.toFixed(2),
                    recipientGets: receivedAmount.toFixed(2)
                });
            }
        } catch (err) {
            setError('Network error: Could not calculate exchange');
            console.error('Exchange calculate API error:', err);
            
            // Fallback to simple calculation
            const receivedAmount = parseFloat(amount) * exchangeRate;
            const feeAmount = 2.50;
            const totalAmount = parseFloat(amount) + feeAmount;
            
            setCalculatedDetails({
                fee: feeAmount.toFixed(2),
                totalToPay: totalAmount.toFixed(2),
                recipientGets: receivedAmount.toFixed(2)
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Check if a currency is a cryptocurrency
    const isCryptoCurrency = (code) => {
        const cryptoList = ['BTC', 'ETH', 'USDT', 'USDC', 'BNB', 'SOL', 'AVAX', 'FLASH', 'DAI', 'SUI'];
        return cryptoList.includes(code);
    };
    
    return (
        <div className='w-full'>
            <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                <span className='text-[15px] font-semibold text-[#181F30]'>Receiver details</span>
                <NavLink to='/send/receiver-info' className='text-[#2475FF] text-[13px]'>Edit</NavLink>
            </div>
            <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className='flex flex-col py-1.5 justify-between'>
                            <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>{recipient.name}</h4>
                            <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>{recipient.country}</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>
                    {(receiverMethod === 'bank') ? 'Bank Transfer' : (receiverMethod === 'cash') ? 'Cash Pickup' : `${sourceCurrency}`}
                        </span>
                        {
                            receiverMethod === 'wallet' && (
                                <img src={currency.btc} alt="" className='w-7 h-7 object-cover' />
                            )
                        }
                        {
                            receiverMethod === 'cash' && (
                                <img src={icons.moneyIcon} alt="" className='w-7 h-7 object-fill' />
                            )
                        }
                        {
                            receiverMethod === 'mobile' && (
                                <img src={icons.bank} alt="" className='w-7 h-7 object-fill' />
                            )
                        }
                </div>
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>Receiver Country</span>
                    <span className='text-[14px] font-medium text-[#181F30]'>{recipient.country}</span>
                </div>
                <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>You sent</span>
                    <span className='text-[14px] font-medium text-[#181F30]'>{amount} {sourceCurrency}</span>
                </div>
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>Transfer rate</span>
                    <span className='text-[14px] font-medium text-[#181F30]'>1 {sourceCurrency} = {exchangeRate} {destinationCurrency}</span>
                </div>
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>Fee</span>
                    <span className='text-[14px] font-medium text-[#181F30]'>+{calculatedDetails.fee} {sourceCurrency}</span>
                </div>
                <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                <div className='w-full flex justify-between'>
                    <span className='text-[13px] font-medium text-[#181F30]'>Total to pay</span>
                    <span className='text-[15px] font-medium text-[#181F30]'>{calculatedDetails.totalToPay} {sourceCurrency}</span>
                </div>
                <div className='w-full flex justify-between'>
                    <span className='text-[13px] font-medium text-[#181F30]'>Recipient Gets</span>
                    <span className='text-[14px] font-medium text-[#181F30]'>{calculatedDetails.recipientGets} {destinationCurrency}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src={icons.receiverSup} alt="" />
                        <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Availability</h4>
                    </div>
                    <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>
                        {isLoading ? 'Calculating...' : 'Immediate'}
                    </div>
                </div>
                {error && (
                    <div className="text-red-500 text-[12px] text-center">{error}</div>
                )}
            </div>
        </div>
    );
}

export default RecieverDetails