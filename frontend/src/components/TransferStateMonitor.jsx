import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authSlice';
import { usePayment } from '../store/paymentSlice';

const TransferStateMonitor = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { 
    paymentMethod, 
    receiverMethod, 
    amount, 
    transferStatus, 
    loading: paymentLoading 
  } = usePayment();

  // Effect to redirect based on authentication state
  useEffect(() => {
    if (authLoading) return;
    
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, authLoading, navigate]);

  // Effect to handle transfer flow state
  useEffect(() => {
    // If user has selected payment method but no receiver method
    if (paymentMethod && !receiverMethod) {
      navigate('/send/receiver-method');
    }
    
    // If transfer is successful, redirect to confirmation
    if (transferStatus === 'success') {
      navigate('/send/confirmation');
    }
    
    // If transfer failed, stay on the current page but show error
    // Error handling is managed by toast notifications in the slice
  }, [paymentMethod, receiverMethod, transferStatus, navigate]);

  // You could also add persistence here
  useEffect(() => {
    // Save current transfer state to sessionStorage for persistence
    const transferState = {
      paymentMethod,
      receiverMethod,
      amount,
      transferStatus
    };
    
    sessionStorage.setItem('transferState', JSON.stringify(transferState));
  }, [paymentMethod, receiverMethod, amount, transferStatus]);

  return (
    <>
      {/* Optional: Add a status indicator that's visible across all pages */}
      {(authLoading || paymentLoading) && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />
      )}
      
      {children}
    </>
  );
};

export default TransferStateMonitor;