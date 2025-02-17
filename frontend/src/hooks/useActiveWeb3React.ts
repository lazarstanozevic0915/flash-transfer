import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { DEFAULT_NETWORK } from '../constants/chains';
import { getRpcUrls } from '../utils/get_rpc_urls';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useActiveWeb3React = () => {
    const interfaceContext = useWeb3React<Web3Provider>();
    if (interfaceContext.active) {
      return interfaceContext;
    }
  
    const library = new JsonRpcProvider(getRpcUrls(DEFAULT_NETWORK)[0]);
  
    return { library, chainId: DEFAULT_NETWORK } as Web3ReactContextInterface<Web3Provider>;
  };
  
  export default useActiveWeb3React;