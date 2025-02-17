import {useCallback} from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import { useSwapContract, useTokenContract } from "./useContract";
import { toast } from 'react-toastify';
import { approveToken, SendBnb, sendToken } from '../contract/index';
import { DEFAULT_COIN_ADDRESS, SWAP_CONTRACT_ADDRESS } from "../constants";
import { DEFAULT_NETWORK } from '../constants/chains';
import { WBNB } from "../pages/Throughtpayment/constant";
export default function useSendTokens(curAmount:number,tokenName:string,transfee:number,curTokenAddress:string){
    
    const {account,active,library,chainId} = useActiveWeb3React();
    const bnbTokenAddress  = WBNB[chainId || DEFAULT_NETWORK];
    const TokenContract = useTokenContract(curTokenAddress ==="0x00"?bnbTokenAddress:curTokenAddress);
    const TransContract = useSwapContract(SWAP_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);
    
    return useCallback(async ()=>{
        if(TransContract  && TokenContract && curAmount  && account && active && chainId && library){
            if(curTokenAddress === "0x00"){
                
                if(TransContract){
                    console.log(curAmount,curTokenAddress,account,DEFAULT_COIN_ADDRESS[DEFAULT_NETWORK || chainId])
                    const trans = await SendBnb(TransContract,curAmount,account,DEFAULT_COIN_ADDRESS[DEFAULT_NETWORK || chainId],tokenName,transfee)
                    // if(!amount[0] && !amount[1]) return;
                    
                    console.log("amount",trans.status)
                   if(trans.status){
                        toast.success("BNB is sent successfuly");
                        return trans.transactionHash;
                   }
                    return "";
                }else{
                    toast.error("TokenContract is invalid");
                    return "";
                }
            }else{
                if(TokenContract){
                    const _amount = curAmount+transfee;
                    const receipt =await approveToken(TokenContract,_amount,SWAP_CONTRACT_ADDRESS[DEFAULT_NETWORK || chainId],account);
                    await receipt.wait();
                    const trans=await sendToken(TransContract,curAmount,curTokenAddress,account,DEFAULT_COIN_ADDRESS[DEFAULT_NETWORK || chainId],tokenName);
                    // if(!amount[0] && !amount[1]) return false;
                    if(trans.status){
                        toast.success("Token is sent successfuly");
                        return trans.transactionHash;
                   }
                   return "";
                }else{
                    toast.error("TokenContract is invalid");
                    return "";
                }
            }
        }else{
            if(curAmount === 0 || curTokenAddress ===""){
                if(curAmount===0)
                toast.error("Please input correct amount!");
                else 
                toast.error("Please select token type correctly!")
                return "";
            }
        }
    },[TransContract,TokenContract,curAmount,chainId,account,active,library,transfee,tokenName,curTokenAddress])
} 