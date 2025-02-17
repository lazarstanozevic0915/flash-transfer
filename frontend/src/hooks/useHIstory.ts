import { useEffect,useState } from "react";
import { DEFAULT_NETWORK } from '../constants/chains';
import useActiveWeb3React from './useActiveWeb3React';
import { ethers } from "ethers";
import { FROMBLOCK, SENDBNB_METHODID, SWAP_CONTRACT_ADDRESS, SENDTOKEN_METHODID } from '../constants/index';
import { getBSCLogs } from "../api/scanAPI/bscScan";


export default function useHistory(){
    const [history,setHistory]= useState<any>([])
    const {chainId,account,active} = useActiveWeb3React();
    const fromBlock = FROMBLOCK[chainId || DEFAULT_NETWORK] ===""?0:parseInt(FROMBLOCK[chainId || DEFAULT_NETWORK]);
    const sendBnbId = SENDBNB_METHODID[DEFAULT_NETWORK ||chainId];
    const sendTokenId = SENDTOKEN_METHODID[DEFAULT_NETWORK || chainId];
   useEffect(()=>{
    if(account && account !=="" && chainId){
        getBSCLogs(fromBlock,account,(error)=>{
            
        })?.then((res)=>{
            if(!res) return;
            if(res.data.status){
                const result = res.data.result.filter((item:any) => {
                    if(item.methodId === sendBnbId || item.methodId === sendTokenId){
                        return true;
                    }
                })
                setHistory(result.reverse());
            }
        })
    }
   },[account,chainId]) 
   return history;
}