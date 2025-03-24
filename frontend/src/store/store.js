import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import paymentReducer from './paymentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    payment: paymentReducer,
  }
});
