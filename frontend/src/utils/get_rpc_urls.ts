import { SupportedChainId } from '../constants/chains';
import { RPC_URL } from '../constants/rpc';

/* eslint-disable import/prefer-default-export */
export const getRpcUrls = (chainId: SupportedChainId): [string] => {
  switch (chainId) {
    case SupportedChainId.MAINNET:
    case SupportedChainId.TESTNET:
      return [RPC_URL[chainId]];
    default:
  }
  // Our API-keyed URLs will fail security checks when used with external wallets.
  throw new Error('RPC URLs must use public endpoints');
};
