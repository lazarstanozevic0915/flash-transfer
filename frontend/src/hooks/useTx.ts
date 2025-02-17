
import useActiveWeb3React from './useActiveWeb3React';
import { toast } from 'react-toastify';
import { getBSCTx, getBSCTxStatus } from "../api/scanAPI/bscScan";
import {useState} from 'react';
import {useEffect} from 'react';
export default function useTx(txHash:string,index:number){
    const {chainId} = useActiveWeb3React();
    const [tx,setTx] = useState<any>(null);
    const [status,setStatus] = useState<number>(0);
     useEffect(()=>{
           const interval = setTimeout(()=>{
            if(txHash===""){
                toast.warning("Invalid txhash");
            }else{
                getBSCTx(txHash,(error)=>{
                    toast.error(error);
                   
                })?.then((res)=>{
                    if(!res) return;
                    // console.log("ressss",res.data);
                    if(res.data.id){
                        setTx(res.data.result);
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