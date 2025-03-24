import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pending from "../assets/image/pending.svg";
import track from "../assets/image/icons/track.svg";

export default function PendingPage() {
  const location = useLocation();
  const { paymentMethod, amount, sourceCurrency, destinationCurrency, transferId, receiverMethod } = useSelector((state) => state.payment);
  
  // Transaction data - use params from URL if available or Redux state
  const [transactionData, setTransactionData] = useState({
    amount: amount || '100',
    sourceCurrency: sourceCurrency || 'EUR',
    destinationCurrency: destinationCurrency || 'EUR',
    trackingNumber: '+1-771-824-9642',
  });

  // Exchange calculation states
  const [exchangeRate, setExchangeRate] = useState(1);
  const [calculatedDetails, setCalculatedDetails] = useState({
    fee: '2.50',
    transferTime: '1 Min',
    totalToPay: (parseFloat(amount || '100') + 2.5).toFixed(2),
    recipientGets: amount || '100.00'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect to fetch exchange rate when currencies change
  useEffect(() => {
    if (transactionData.sourceCurrency && transactionData.destinationCurrency) {
      fetchExchangeRate(transactionData.sourceCurrency, transactionData.destinationCurrency);
    }
  }, [transactionData.sourceCurrency, transactionData.destinationCurrency]);

  // Effect to calculate exchange when amount changes
  useEffect(() => {
    if (transactionData.amount && !isNaN(transactionData.amount) && parseFloat(transactionData.amount) > 0) {
      calculateExchange();
    }
  }, [transactionData.amount, transactionData.sourceCurrency, transactionData.destinationCurrency, exchangeRate]);

  // Extract transaction data from URL if available
  useEffect(() => {
    // Extract transaction ID or data from URL params if needed
    const params = new URLSearchParams(location.search);
    const txAmount = params.get('amount');
    const srcCurrency = params.get('from');
    const destCurrency = params.get('to');
    const trackingNum = params.get('tracking');

    if (txAmount || srcCurrency || destCurrency || trackingNum) {
      setTransactionData({
        amount: txAmount || transactionData.amount,
        sourceCurrency: srcCurrency || transactionData.sourceCurrency,
        destinationCurrency: destCurrency || transactionData.destinationCurrency,
        trackingNumber: trackingNum || transactionData.trackingNumber,
      });
    }
  }, [location]);

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
        if (transactionData.amount && !isNaN(transactionData.amount) && parseFloat(transactionData.amount) > 0) {
          calculateExchange();
        }
      } else {
        setError(data.message || 'Failed to fetch exchange rate');
        console.error('Exchange rate error:', data.message);
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
    if (!transactionData.amount || isNaN(transactionData.amount) || parseFloat(transactionData.amount) <= 0) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/exchange/calculate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fromCurrency: transactionData.sourceCurrency,
          toCurrency: transactionData.destinationCurrency,
          amount: transactionData.amount
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        const { 
          exchangeRate: newRate, 
          fee, 
          totalToPay, 
          recipientGets,
          transferTime,
          transferTimeUnit
        } = data.data;
        
        // Update exchange rate
        setExchangeRate(newRate);
        
        // Update transaction details
        setCalculatedDetails({
          fee: fee.toFixed(2),
          transferTime: `${transferTime} ${transferTimeUnit || 'Min'}`,
          totalToPay: totalToPay.toFixed(2),
          recipientGets: recipientGets.toFixed(2)
        });
      } else {
        setError(data.message || 'Failed to calculate exchange');
        
        // Fallback to simple calculation
        fallbackCalculation();
      }
    } catch (err) {
      setError('Network error: Could not calculate exchange');
      console.error('Exchange calculate API error:', err);
      
      // Fallback to simple calculation
      fallbackCalculation();
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback calculation when API fails
  const fallbackCalculation = () => {
    const amount = parseFloat(transactionData.amount);
    const feeAmount = 2.50;
    const receivedAmount = amount * exchangeRate;
    const totalAmount = amount + feeAmount;
    
    setCalculatedDetails({
      fee: feeAmount.toFixed(2),
      transferTime: '1 Min',
      totalToPay: totalAmount.toFixed(2),
      recipientGets: receivedAmount.toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden dm-sans">
      <Navbar />
      <main className="max-w-7xl flex items-center justify-center mx-auto my-18 max-sm:my-2 px-8 max-sm:px-1 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col w-[50%] max-lg:w-[90%] max-sm:w-[100%] items-center max-sm:px-3">
          <div className="mb-8">
            <img src={pending} alt="Pending" className="h-24 w-auto" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Payment Pending</h1>
          <div className="flex flex-col mb-6 border border-gray-200 p-4 w-full rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">You Sent</span>
              <span>{transactionData.amount} {transactionData.sourceCurrency}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Transfer Rate</span>
              <span>1 {transactionData.sourceCurrency} = {exchangeRate} {transactionData.destinationCurrency}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Fee</span>
              <span>{calculatedDetails.fee} {transactionData.sourceCurrency}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Transfer Time</span>
              <span>{isLoading ? 'Calculating...' : calculatedDetails.transferTime}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Received On</span>
              <span>{calculatedDetails.recipientGets} {transactionData.destinationCurrency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total to pay</span>
              <span>{calculatedDetails.totalToPay} {transactionData.sourceCurrency}</span>
            </div>
          </div>
          <div className="text-blue-500 mb-6 w-full flex justify-start max-sm:text-sm rounded-lg bg-gray-200 p-3">
            <img src={track} alt="track" className='object-contain mr-3' />
            <p>Tracking number: {"\u200B"}{transferId }</p>
          </div>
          <div className="text-gray-500 flex flex-col justify-start w-full max-sm:text-sm ">
            <h3 className="font-bold mb-2 text-black max-sm:text-lg">Receiver Instructions</h3>
            <ol className="list-decimal pl-4 space-y-2">
              <li>Visit our receiver's page.</li>
              <li>Present your order number.</li>
              <li>Pay in cash.</li>
            </ol>
          </div>
          {error && (
            <div className="mt-4 text-red-500 text-sm">{error}</div>
          )}
          <div className="mt-6 flex max-sm:flex-col-reverse gap-2 w-full">
            <Link
              to="/"
              className="px-6 py-2.5 w-full text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Back to Home
            </Link>
            <button className="px-6 py-2.5 w-full text-center justify-center bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}