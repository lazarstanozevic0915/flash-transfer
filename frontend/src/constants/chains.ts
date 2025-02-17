export enum SupportedChainId {
    MAINNET = 56,
    TESTNET = 97,
  }

  export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
    (id) => typeof id === 'number'
  ) as SupportedChainId[];
  
  

  export const DEFAULT_NETWORK =
  process.env.REACT_APP_NETWORK === 'mainnet' ? SupportedChainId.MAINNET : SupportedChainId.TESTNET;