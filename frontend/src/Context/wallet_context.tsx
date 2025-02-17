/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Maybe<T> = T | null | undefined;

import { hexStripZeros } from '@ethersproject/bytes';
import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useWeb3React } from '@web3-react/core';
import type { Web3ReactHooks } from '@web3-react/core';
import { UnsupportedChainIdError } from '@web3-react/core/dist/types';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BigNumber } from '@ethersproject/bignumber';
import { ethers, Provider } from 'ethers';

declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}

import { CHAIN_INFO } from '../constants/chain_info';
import { ALL_SUPPORTED_CHAIN_IDS, DEFAULT_NETWORK, SupportedChainId } from '../constants/chains';
import { SUPPORTED_WALLETS } from '../constants/wallet';
import { useLocalStorageState } from '../hooks';
import { getRpcUrls } from '../utils/get_rpc_urls';

export interface IWalletContext {
  account: Maybe<string>;
  chainId: Maybe<number>;
  connect: (connectorId: string) => void;
  disconnect: () => void;
  switchChain: (targetChainId: number) => void;
  balance: number;
  updateBalance: () => void;
  walletType:any;
}

const WalletContext = React.createContext<Maybe<IWalletContext>>(null);

  const { connector, hooks } = useWeb3React();
  const { useSelectedAccounts, useIsActivating: useSelectedIsActivating, useProvider, useSelectedChainId } = hooks;
  const accounts = useSelectedAccounts(connector);
  const account = accounts?.[0];
  const isActivating = useSelectedIsActivating(connector);
  const provider = useProvider();
  const chainId = useSelectedChainId(connector);
  const { activate, deactivate } = useWeb3React<Web3Provider>();

  const [walletType, setWalletType] = useLocalStorageState('CONNECTOR_ID', '');
  const [balance, setBalance] = useState(0);
  const activateInjectedProvider = (_connector: AbstractConnector | undefined) => {

    const { ethereum } = window;
    
    if (!ethereum?.providers) {
      return;
    }

    let provider;

    if (_connector instanceof InjectedConnector) {
      provider = ethereum.providers.find((_provider) => _provider.isMetaMask && !_provider.isBraveWallet);
    }

    if (provider && ethereum) {
      ethereum?.setSelectedProvider(provider);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const tryActivation = useCallback(
    async (connector: AbstractConnector | undefined,_walletType:string) => {
      activateInjectedProvider(connector);

      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (_walletType === key) {
          setWalletType(key);
          return SUPPORTED_WALLETS[key].name;
        }
        return true;
      });

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (connector instanceof WalletConnectConnector) {
        // eslint-disable-next-line no-param-reassign
        (connector as WalletConnectConnector).walletConnectProvider = undefined;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     
      connector &&
        // eslint-disable-next-line @typescript-eslint/no-shadow
        activate(connector, undefined, true).catch((err) => {
          if (err instanceof UnsupportedChainIdError) {
            activate(connector); // a little janky...can't use setError because the connector isn't set
            toast.error(err.message);
          } else {
            console.log(err)
            setWalletType(null)
            toast.error(err.message);
          }
        });
    },
    [activate, setWalletType]
  );

  const connect = useCallback(
    async (connectorId:any) => {
      tryActivation(SUPPORTED_WALLETS[connectorId].connector,connectorId);
    },
    [tryActivation]
  );

  const disconnect = useCallback(async () => {
    setWalletType(null);
    await deactivate();
  }, [deactivate, setWalletType]);

  useEffect(() => {
    if (!account && walletType) {
      connect(walletType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchToNetwork = async (_library: Web3Provider, targetChainId: SupportedChainId): Promise<null | void> => {
    if (!_library?.provider?.request) {
      return;
    }
    const formattedChainId = hexStripZeros(BigNumber.from(targetChainId).toHexString());
    try {
      await _library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: formattedChainId }],
      });
    } catch (error: any) {
      // 4902 is the error code for attempting to switch to an unrecognized chainId
      if (error.code === 4902) {
        const info = CHAIN_INFO[targetChainId];

        await _library.provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: formattedChainId,
              chainName: info.label,
              rpcUrls: getRpcUrls(targetChainId),
              nativeCurrency: info.nativeCurrency,
              blockExplorerUrls: [info.explorer],
            },
          ],
        });
        // metamask (only known implementer) automatically switches after a network is added
        // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
        // metamask's behavior when switching to the current network is just to return null (a no-op)
        try {
          await _library.provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: formattedChainId }],
          });
          // eslint-disable-next-line @typescript-eslint/no-shadow, no-empty
        } catch (error) {}
      } else {
        throw error;
      }
    }
  };

  const switchChain = useCallback(
    async (targetChainId: number) => {
      try {
        if (provider && targetChainId) {
          await switchToNetwork(provider, targetChainId);
        } else if (!provider && targetChainId) {
          let web3Provider;
          if (window.ethereum) {
            // eslint-disable-next-line no-new
            web3Provider = new Web3Provider(window.ethereum, 'any');
          } else if (window.web3) {
            web3Provider = new Web3Provider(window.web3, 'any');
            web3Provider = new providers.Web3Provider(window.web3, 'any');
          }
          if (web3Provider) {
            await switchToNetwork(web3Provider, targetChainId);
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-shadow
      } catch (error: any) {
        toast.error(`Failed to switch networks: ${error.message}`);
        deactivate();
      }
    },
    [deactivate, library]
  );

  useEffect(() => {
    if (active && chainId) {
      if (ALL_SUPPORTED_CHAIN_IDS.findIndex((v) => v === chainId) === -1) {
        switchChain(DEFAULT_NETWORK);
      }
    }
  }, [active, chainId, switchChain]);

  const updateBalance = useCallback(async () => {
    if (account && chainId && provider) {
      const res = await (provider as Web3Provider).getBalance(account);
      setBalance(Number(ethers.utils.formatEther(res)));
    } else {
      setBalance(0);
    }
  }, [chainId, account, library]);

  useEffect(() => {
    updateBalance();
  }, [chainId, account, library, updateBalance]);

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        connect,
        disconnect,
        switchChain,
        balance,
        updateBalance,
        walletType:walletType
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('Component rendered outside the provider tree');
  }

  return context;
};
