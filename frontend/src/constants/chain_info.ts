import { SupportedChainId } from './chains';
interface BaseChainInfo {
    readonly docs: string;
    readonly explorer: string;
    readonly infoLink: string;
    readonly label: string;
    readonly nativeCurrency: {
      name: string; // e.g. 'TESTNET ETH',
      symbol: string; // e.g. 'gorETH',
      decimals: number; // e.g. 18,
    };
  }
export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo } & {
    readonly [chainId in SupportedChainId]: BaseChainInfo;
  };
export const CHAIN_INFO: ChainInfoMap = {
    [SupportedChainId.MAINNET]: {
      docs: 'https://docs.uniswap.org/',
      explorer: 'https://etherscan.io/',
      infoLink: 'https://info.uniswap.org/#/',
      label: 'Ethereum',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    },
    [SupportedChainId.TESTNET]: {
      docs: 'https://docs.uniswap.org/',
      explorer: 'https://TESTNET.etherscan.io/',
      infoLink: 'https://info.uniswap.org/#/',
      label: 'Görli',
      nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
    },
  };