import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await api.post('/user-login', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);
export const signUpUser = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await api.post('/users', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const checkAuthStatus = createAsyncThunk(
    'auth/checkStatus',
    async (_, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return rejectWithValue('No token found');
        }
        
        const response = await api.get('/session');
        return response.data;
        
        // const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        // return { data: userData };
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    connectedWallet: localStorage.getItem('isWalletConnected') || '',
    loading: false,
    error: null
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.connectedWallet = '';
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isWalletConnected', '');
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.connectedWallet = '';
        state.error = null;
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isWalletConnected');
    },
    connectWallet: (state, action) => {
      state.connectedWallet = action.payload;
      localStorage.setItem('isWalletConnected', action.payload);
    },
    disconnectWallet: (state) => {
      state.connectedWallet = '';
      localStorage.setItem('isWalletConnected', '');
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;
        state.token = action.payload.data.token;
        localStorage.setItem('token', action.payload.data.token);
        localStorage.setItem('userData', JSON.stringify(action.payload.data));
        localStorage.setItem('isAuthenticated', 'true');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.statusDesc || 'Login failed';
      })
      // Check auth status cases
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('isAuthenticated');
      });
  }
});

export const { login, logout, connectWallet, disconnectWallet, clearError } = authSlice.actions;
export default authSlice.reducer;