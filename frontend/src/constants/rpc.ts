import { SupportedChainId } from './chains';

export const RPC_URL: { [key in SupportedChainId]: string } = {
    [SupportedChainId.MAINNET]: `https://bsc-dataseed.binance.org`,
    [SupportedChainId.TESTNET]: `https://data-seed-prebsc-1-s3.binance.org:8545`,
  };
  