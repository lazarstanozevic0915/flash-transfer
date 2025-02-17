
import useActiveWeb3React from './useActiveWeb3React';
import { toast } from 'react-toastify';
import { getBSCInternalTx, getBSCTx, getBSCTxStatus } from "../api/scanAPI/bscScan";
import {useState} from 'react';
import {useEffect} from 'react';
export default function useInternalTx(txHash:string,index:number){
    const {chainId} = useActiveWeb3React();
    const [tx,setTx] = useState<any>(null);
    const [status,setStatus] = useState<number>(0);
     useEffect(()=>{
           const interval = setTimeout(()=>{
            if(txHash===""){
                toast.warning("Invalid txhash");
            }else{
                getBSCInternalTx(txHash,(error)=>{
                    toast.error(error);
                   
                })?.then((res)=>{
                    if(!res) return;
                    console.log("ressss",res.data.result[0]);
                    if(res.data.result.length>0){
                        setTx(res.data.result[0]);
                    }
                })
                getBSCTxStatus(txHash,(error)=>{
                    toast.error(error);
                   
                })?.then((res)=>{
                    if(!res) return;
                    if(res.data.status){
                        // console.log("result",res.data)
                        setStatus(parseInt(res.data.result.status));
                    }
                })
            }
           },600*index)
           return ()=>clearTimeout(interval)
     },[txHash,chainId])
     return {tx:tx,status:status}
} 