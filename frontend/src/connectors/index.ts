import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
import { initializeConnector } from '@web3-react/core';
import type { Actions } from '@web3-react/types';
import { ALL_SUPPORTED_CHAIN_IDS } from '../constants/chains';
import { RPC_URL } from '../constants/rpc';
import getLibrary from '../utils/get_library';
import { BscConnector } from '@binance-chain/bsc-connector';
import { NetworkConnector } from './network_connector';

let networkLibrary: Web3Provider | undefined;

export const network = new NetworkConnector({
  urls: RPC_URL,
  defaultChainId: 1,
});

interface WalletConnectProvider {
  request: (args: { method: string }) => Promise<any>;
  chainId: number;
}

interface ConnectorUpdate<T = number | string> {
  provider?: any;
  chainId?: T;
  account?: null | string;
}

class WalletConnectV2Connector extends AbstractConnector {
  private readonly walletConnectV2: WalletConnectV2;
  public actions: Actions;
  
  constructor(walletConnectV2: WalletConnectV2, actions: Actions) {
    super();
    this.walletConnectV2 = walletConnectV2;
    this.actions = actions;
  }

  public async activate(): Promise<ConnectorUpdate<number>> {
    await this.walletConnectV2.activate();
    const provider = await this.walletConnectV2.provider;
    if (!provider) {
      throw new Error('No provider');
    }

    const chainId = await this.getChainId();
    const account = await this.getAccount();
    
    return {
      provider,
      chainId,
      account
    };
  }

  public async getProvider(): Promise<WalletConnectProvider> {
    const provider = await this.walletConnectV2.provider;
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    return provider;
  }

  public async getChainId(): Promise<number> {
    const provider = await this.getProvider();
    return provider.chainId;
  }

  public async getAccount(): Promise<string | null> {
    const provider = await this.getProvider();
    const accounts = await provider.request({ method: 'eth_accounts' });
    return accounts[0] || null;
  }

  public deactivate(): void {
    this.walletConnectV2.deactivate();
  }

  public resetState(): void {
    this.walletConnectV2.resetState();
  }
}

export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const bscConnector = new BscConnector({ 
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS 
});

let walletConnectV2: WalletConnectV2Connector;

export const [walletConnectV2Instance, hooks, store] = initializeConnector<WalletConnectV2>(
  (actions) => {
    const connector = new WalletConnectV2({
      actions,
      options: {
        projectId: process.env.VITE_WALLET_CONNECT_PROJECT_ID,
        chains: [1],
        optionalChains: [4],
        showQrModal: true,
      },
    });
    
    walletConnectV2 = new WalletConnectV2Connector(connector, actions);
    return connector;
  }
);

export { walletConnectV2 };