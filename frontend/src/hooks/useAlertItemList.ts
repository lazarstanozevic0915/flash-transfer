import { IAlertItem } from '../Context/alert_context';
import { toast } from 'react-toastify';
import { getBSCInternalTx, getBSCTxStatus, getBSCTx } from '../api/scanAPI/bscScan';
import { useState } from 'react';
import { memo } from "react";
import {useEffect} from 'react';
const useAlertItemList = (list:Array<string>)=>{
        const [result,setResult]= useState<Array<any>>([])
        useEffect(()=>{
            if(list.length){
                var intList:Array<any>= [];
                Promise.all(list.map(async (txHash:string,index:number)=>{
                return new Promise((resolveP, rejectP)=>{
                    const interval = setTimeout(()=>{
                        const status = new Promise((resolve,reject)=>{
                            getBSCTxStatus(txHash,(error)=>{
                                toast.error(error); 
                                reject(error);
                            })?.then((res)=>{
                                if(!res) {
                                    resolve(null);
                                    return;
                                };
                                if(res.data.status){
                                    resolve(parseInt(res.data.result.status))                           
                                    return;
                                }
                                resolve(null);
                            })
                        });
                        const tx = new Promise((resolve,reject)=>{
                            getBSCInternalTx(txHash,(error)=>{
                                toast.error(error); 
                                reject(error);
                            })?.then((res)=>{
                                if(!res) {
                                    resolve(null);
                                    return;
                                };
                                if(res.data.result.length>0){
                                        resolve(res.data.result[0]);
                                        return;
                                }
                                resolve(null);
                                return;
                            })
                        })
                        const txLogs = new Promise((resolve,reject)=>{
                            getBSCTx(txHash,(error)=>{
                                toast.error(error);
                               
                            })?.then((res)=>{
                                if(!res) {
                                    resolve(null);
                                    return;
                                };
                                // console.log("ressss",res.data);
                                if(res.data.id){
                                    resolve(res.data.result);
                                    return;
                                }
                                resolve(null);
                                return;
                            })
                        })
                        Promise.all([status,tx,txLogs]).then(resultTX=>{
                            resolveP({status:resultTX[0],tx:resultTX[1],txLogs:resultTX[2]});
                        }).catch(error=>rejectP(error));
                },1000*index)
                intList.push(interval);
                })
                
                })).then((results)=>{
                    setResult(results);
                    intList.map((item:any)=>clearTimeout(item));
                }).catch((error)=>{
                    console.log("listerror:",error)
                    intList.map((item:any)=>clearTimeout(item));
                })
            }
        },[list])
        return result;
}
export default useAlertItemList;