import { useMemo } from 'react';
import useActiveWeb3React from "./useActiveWeb3React";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Contract } from '@ethersproject/contracts';
import { getContract } from '../utils';
import ContractABI from "../abi/contractABI.json";
import TokenABI from "../abi/TokenABI.json";
import OracleABI from "../abi/oracleABI.json";
import OpenseaABI from "../abi/openseaOracleABI.json";
export function useContract<T extends Contract = Contract>(
    addressOrAddressMap: string | { [chainId: number]: string } | undefined,
    // eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
    ABI: any,
    withSignerIfPossible = true
) : T | null {
    const { library, account, chainId } = useActiveWeb3React();
    return useMemo(() => {
        if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
        let address: string | undefined;
        if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;
        else address = addressOrAddressMap[chainId];
        if (!address) return null;
        try {
          return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Failed to get contract', error);
          return null;
        }
      }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T;
}

export function useSwapContract(contractAddress: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(contractAddress, ContractABI, withSignerIfPossible);
}
export function usePriceOracleContract(contractAddress: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(contractAddress, OracleABI, withSignerIfPossible);
}
export function useTokenContract(address: string,withSignerIfPossible?: boolean) : Contract | null {
  return useContract(address,TokenABI,withSignerIfPossible );
}
export function useOpenseaOracleContract(address:string,withSignerIfPossible?:boolean):Contract | null {
  return useContract(address,OpenseaABI,withSignerIfPossible)
}