import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axios";
import { toast } from "react-toastify";

// Load initial state from localStorage or use default values
const loadInitialState = () => {
  try {
    const savedState = localStorage.getItem("paymentState");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
  }
  
  // Default initial state
  return {
    paymentMethod: null, // 'cash', 'crypto', 'credit', 'bank'
    receiverMethod: null, // 'cash', 'crypto', 'credit'
    amount: 0,
    sourceCurrency: null,
    destinationCurrency: null,
    walletAddress: null,
    provider: null,
    webhookUrl: "https://webhook.site/your-test-webhook-id",
    recipient: null,
    transferStatus: 'idle', // 'idle', 'pending', 'success', 'failed'
    transferId: null,
    loading: false,
    error: null
  };
};

const initialState = loadInitialState();

// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("paymentState", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Async thunk for initiating a transfer
export const initiateTransfer = createAsyncThunk(
  "payment/initiateTransfer",
  async (transferData, { rejectWithValue }) => {
    try {
      const response = await api.post("/transfers", transferData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Transfer initiation failed");
    }
  }
);

// Payment flow slice
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      saveStateToLocalStorage(state);
    },
    setReceiverMethod: (state, action) => {
      state.receiverMethod = action.payload;
      saveStateToLocalStorage(state);
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
      saveStateToLocalStorage(state);
    },
    setSourceCurrency: (state, action) => {
      state.sourceCurrency = action.payload;
      saveStateToLocalStorage(state);
    },
    setDestinationCurrency: (state, action) => {
      state.destinationCurrency = action.payload;
      saveStateToLocalStorage(state);
    },
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
      saveStateToLocalStorage(state);
    },
    setTransferId: (state, action) => {
      state.transferId = action.payload;
      saveStateToLocalStorage(state);
    },
    setTransferStatus: (state, action) => {
      state.transferStatus = action.payload;
      saveStateToLocalStorage(state);
    },
    setProvider: (state, action) => {
      state.provider = action.payload;
      saveStateToLocalStorage(state);
    },
    setRecipient: (state, action) => {
      state.recipient = action.payload;
      saveStateToLocalStorage(state);
    },
    resetPaymentState: () => {
      localStorage.removeItem("paymentState");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initiateTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.transferStatus = 'pending';
        saveStateToLocalStorage(state);
      })
      .addCase(initiateTransfer.fulfilled, (state, action) => {
        state.loading = false;
        state.transferStatus = 'success';
        state.transferId = action.payload.transferId;
        saveStateToLocalStorage(state);
        toast.success("Transfer initiated successfully!");
      })
      .addCase(initiateTransfer.rejected, (state, action) => {
        state.loading = false;
        state.transferStatus = 'failed';
        state.error = action.payload?.message || "Transfer failed";
        saveStateToLocalStorage(state);
        toast.error(state.error);
      });
  },
});

// Selectors
export const selectPaymentMethod = state => state.payment.paymentMethod;
export const selectReceiverMethod = state => state.payment.receiverMethod;
export const selectTransferStatus = state => state.payment.transferStatus;
export const selectTransferAmount = state => state.payment.amount;

// Combined selector
export const selectPaymentState = state => state.payment;

// Custom hook
export const usePayment = () => {
  const dispatch = useDispatch();
  const paymentState = useSelector(selectPaymentState);
  
  return {
    ...paymentState,
    setPaymentMethod: (method) => dispatch(setPaymentMethod(method)),
    setReceiverMethod: (method) => dispatch(setReceiverMethod(method)),
    setAmount: (amount) => dispatch(setAmount(amount)),
    setSourceCurrency: (currency) => dispatch(setSourceCurrency(currency)),
    setDestinationCurrency: (currency) => dispatch(setDestinationCurrency(currency)),
    setWalletAddress: (walletAddress) => dispatch(setWalletAddress(walletAddress)),
    setTransferId: (transferId) => dispatch(setTransferId(transferId)),
    setTransferStatus: (transferStatus) => dispatch(setTransferStatus(transferStatus)),
    setProvider: (provider) => dispatch(setProvider(provider)),
    setRecipient: (recipient) => dispatch(setRecipient(recipient)),
    initiateTransfer: (data) => dispatch(initiateTransfer(data)),
    resetPayment: () => dispatch(resetPaymentState())
  };
};

export const { setPaymentMethod, setReceiverMethod, setAmount, setDestinationCurrency, setSourceCurrency, setWalletAddress, setRecipient, setTransferId, setTransferStatus, setProvider, resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;