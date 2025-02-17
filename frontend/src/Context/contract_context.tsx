/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { hexStripZeros } from '@ethersproject/bytes';
import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { usePriceOracleContract, useSwapContract } from '../hooks/useContract';
import { SWAP_CONTRACT_ADDRESS,ORACLE_CONTRACT_ADDRESS } from '../constants';
import { DEFAULT_NETWORK } from '../constants/chains';
export interface IContractContext {
  swapContract:Contract | null;
  oracleContract:Contract | null;
}

const ContractContext = React.createContext<IContractContext | null>(null);

export const ContractProvider = ({ children = null as any }) => {
  const {chainId} = useWeb3React();
  const swapContract = useSwapContract(SWAP_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);
  const oracleContract = usePriceOracleContract(ORACLE_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);
  
  return (
    <ContractContext.Provider
      value={{
        swapContract:swapContract,
        oracleContract:oracleContract
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractProvider = () => {
  const context = useContext(ContractContext);

  if (!context) {
    throw new Error('Component rendered outside the provider tree');
  }

  return context;
};
