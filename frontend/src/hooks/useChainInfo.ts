import useActiveWeb3React from './useActiveWeb3React';
import { useEffect, useMemo } from 'react';
import axios from 'axios';
import {useState} from 'react';
import chainIds from "../constants/chainIds.json";
export type IChain = {
    chain:string;
    chainId:number;
    explorers:any;
    faucets:any;
    icon:string | null;
    inforURL:string;
    nativeCurrency:any;
    networkId:number;
    rpc:any;
    shortName:string;
    name:string;
}
const useChainInfo = ()=>{
    const {chainId} = useActiveWeb3React();
    
    const [chains,setChains] = useState<any>(null);
    useEffect(()=>{
        delete axios.defaults.headers.common["authorization"]
        axios.get("https://chainid.network/chains.json").then((res)=>{
            setChains(res.data);
        }).catch((error)=>{
            console.log("use chainInfo Error:",error);
        })
    },[])
    const chain:IChain | null= useMemo(()=>{
        if(chainId && chains){
            return chains.find((c:IChain)=>c.chainId === chainId);
        }else return null;
    },[chainId,chains])
    const chainSlug :string | null = useMemo(()=>{
        if(chain && chain.chainId){
            for (const [key, value] of Object.entries(chainIds)) {
                if(key === chain.chainId.toString()) return value;
                else if(chain.chainId.toString() === "97") return "testBinance";
            }
            return null;
        }return null;
    },[chain])
    
    const chainIcon : string= useMemo(()=>{
        if(chainSlug){
            if(chainSlug === "binance" || chainSlug === "testBinance"){
                return "binance"
            }else{
                return `https://icons.llamao.fi/icons/chains/rsz_${chainSlug}.jpg`
            }
        }else{
                return "/unknown-logo.png";
        }
        // return chainSlug? `https://icons.llamao.fi/icons/chains/rsz_${chainSlug}.jpg` : "/unknown-logo.png";
    },[chainSlug])
    return {chain:chain,icon:chainIcon};
}
export default useChainInfo;