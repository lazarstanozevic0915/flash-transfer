import React from "react";
import { createRoot } from "react-dom/client";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { projectId, metadata, networks, wagmiAdapter, solanaWeb3JsAdapter } from "./config";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

// General AppKit Config
const generalConfig = {
  projectId,
  metadata,
  networks,
  themeMode: "light" as const,
  themeVariables: {
    "--w3m-accent": "#000000",
  },
};

// Create AppKit Modal
createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  ...generalConfig,
});

// Render App
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
