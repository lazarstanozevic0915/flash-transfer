import { SupportedChainId } from './chains';

export const SWAP_CONTRACT_ADDRESS: {
    [chainId: number]: string;
  } = {
    [SupportedChainId.MAINNET]: process.env.REACT_APP_SWAP_CONTRACT_ADDRESS_MAIN || '',
    [SupportedChainId.TESTNET]: process.env.REACT_APP_SWAP_CONTRACT_ADDRESS_TEST || '',
  };

  export const ORACLE_CONTRACT_ADDRESS: {
    [chainId: number]: string;
  } = {
    [SupportedChainId.MAINNET]: process.env.REACT_APP_ORACLE_CONTRACT_ADDRESS_MAIN || '',
    [SupportedChainId.TESTNET]: process.env.REACT_APP_ORACLE_CONTRACT_ADDRESS_TEST || '',
  };
  export const OPENSEANFTCONTRACTADDRESS:string = process.env.REACT_APP_OPENSEA_NFT_CONTRACT || ""
  export const OPENSEA_ORACLE_CONTRACT_ADDRESS :{
    [chainId:number] :string;
  }={
    [SupportedChainId.MAINNET]: process.env.REACT_APP_OPENSEA_ORACLE_CONTRACT_MAIN || '',
    [SupportedChainId.TESTNET]: process.env.REACT_APP_OPENSEA_ORACLE_CONTRACT_TEST || '',
  }
  export const DEFAULT_COIN_ADDRESS: {
    [chainId: number]: string;
  } = {
    [SupportedChainId.MAINNET]: process.env.REACT_APP_DEFAULT_COIN_ADDRESS_MAIN || '',
    [SupportedChainId.TESTNET]: process.env.REACT_APP_DEFAULT_COIN_ADDRESS_TEST || '',
  };

export const BSCAPI :{
  [chainId:number]:string;
} = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_BSC_API_MAIN || '',
  [SupportedChainId.TESTNET]: process.env.REACT_APP_BSC_API_TEST || '',
}
export const BSCAPIKEY = process.env.REACT_APP_BSC_APIKEY || "";

export const FROMBLOCK :{
  [chainId:number]:string;
} = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_FROMBLOCK_MAIN || "",
  [SupportedChainId.TESTNET]: process.env.REACT_APP_FROMBLOCK_TEST || "",
}

export const SENDBNB_METHODID:{
  [chainId:number]:string;
} = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_SENDBNB_METHOD_ID_MAIN || "",
  [SupportedChainId.TESTNET]: process.env.REACT_APP_SENDBNB_METHOD_ID_TEST || "",
}

export const SENDTOKEN_METHODID:{
  [chainId:number]:string;
} = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_SENDTOKEN_METHOD_ID_MAIN || "",
  [SupportedChainId.TESTNET]: process.env.REACT_APP_SENDTOKEN_METHOD_ID_TEST || "",
}

export const BSCSCAN:{[chainId:number]:string;
} = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_BSCSCAN_MAIN || "",
  [SupportedChainId.TESTNET]: process.env.REACT_APP_BSCSCAN_TEST || "",
}
export const ZAPPER_KEY = process.env.REACT_APP_ZAPPER_KEY || "";