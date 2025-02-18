// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiProvider, createConfig, http } from 'wagmi'; // Import `http` from wagmi
import { mainnet } from 'wagmi/chains'; // Import chains from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

// Step 1: Configure the Wagmi client
const config = createConfig({
  chains: [mainnet], // Specify the chains you want to support
  transports: {
    [mainnet.id]: http(), // Use the `http` transport for mainnet
  },
});

// Step 2: Create a React Query client
const queryClient = new QueryClient();

// Step 3: Render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);