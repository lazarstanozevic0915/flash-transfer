import { useState,useEffect } from 'react';
import { SWAP_CONTRACT_ADDRESS } from '../constants';
import { DEFAULT_NETWORK } from '../constants/chains';
import { getTransferFee } from '../contract';
import useActiveWeb3React from './useActiveWeb3React';
import { useSwapContract } from './useContract';

export default function useTransferFee(curAmount:number,tokenName:string){
    const {account,chainId} = useActiveWeb3React();
    const TransContract = useSwapContract(SWAP_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);
    const [transFee,setTransFee] = useState<number>(0);
    useEffect(()=>{
        if(account && curAmount && tokenName !=="" && TransContract){
            getTransferFee(TransContract,tokenName,account,curAmount.toString()).then(res=>{
                setTransFee(res);
            })
        }else{
            setTransFee(0);
        }
    },[curAmount,tokenName,TransContract,account])   
    return transFee;
}