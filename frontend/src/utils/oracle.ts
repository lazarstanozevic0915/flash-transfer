import { ethers } from "ethers";
import {toast} from "react-toastify";
export const getOraclePrice = async (
    priceOracleContract: ethers.Contract | null,
    tokenName:string
)=>{
    if(priceOracleContract && tokenName){
        try{
            const amount = await priceOracleContract.getLatestPrice(tokenName);
            return Number(amount)/1e8;
        }catch(error:any){
            toast.error(error.reason || error.error?.message || error.message);
        }
    }
}