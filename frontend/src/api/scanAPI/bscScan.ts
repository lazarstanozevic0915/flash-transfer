import axios, { AxiosInstance } from 'axios';
import { BSCAPI } from '../../constants';
import { DEFAULT_NETWORK } from '../../constants/chains';
import { BSCAPIKEY } from '../../constants';
import { toast } from 'react-toastify';
import { getBasicRequest } from './utils/index';
export const BSC_API ={
    logs:" ?module=account&action=txlist",
    txStatus:" ?module=transaction&action=gettxreceiptstatus",
    tx: " ?module=proxy&action=eth_getTransactionReceipt",
    intTx:" ?module=account&action=txlistinternal"
}


export const getBSCLogs = (fromBlock:number,address:string,callback:(error:string)=>void)=>{
    if(address ==="" || BSCAPIKEY === "")
    {
        toast.warning("Invalid params in getLogs");
        return;
    }
    
    let url = BSCAPI[DEFAULT_NETWORK]+BSC_API.logs+"&address="+ address +"&startblock="+fromBlock+"&sort=asc &apikey="+BSCAPIKEY;
    
   delete axios.defaults.headers.common["authorization"]
    
    return axios.get(url).catch(error=>{
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          callback(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          callback(error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          callback(error.message);
        }
      })
}

export const getBSCTxStatus = (tx:string,callback:(error:string)=>void)=>{
    if(tx ==="" || BSCAPIKEY === "")
    {
        toast.warning("Invalid params in getLogs");
        return;
    }
    
    let url = BSCAPI[DEFAULT_NETWORK]+BSC_API.txStatus+"&txhash="+ tx+"&apikey="+BSCAPIKEY;
    delete axios.defaults.headers.common["authorization"]
    return axios.get(url).catch(error=>{
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          callback(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          callback(error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          callback(error.message);
        }
      })
}
export const getBSCTx = (tx:string,callback:(error:string)=>void)=>{
    if(tx ==="" || BSCAPIKEY === "")
    {
        toast.warning("Invalid params in getLogs");
        return;
    }
    
    let url = BSCAPI[DEFAULT_NETWORK]+BSC_API.tx+"&txhash="+ tx+"&apikey="+BSCAPIKEY;
    delete axios.defaults.headers.common["authorization"]
    return axios.get(url).catch(error=>{
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          callback(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          callback(error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          callback(error.message);
        }
      })
}
export const getBSCInternalTx = (tx:string,callback:(error:string)=>void)=>{
  if(tx ==="" || BSCAPIKEY === "")
  {
      toast.warning("Invalid params in getLogs");
      return;
  }
  
  let url = BSCAPI[DEFAULT_NETWORK]+BSC_API.intTx+"&txhash="+ tx+"&apikey="+BSCAPIKEY;
  delete axios.defaults.headers.common["authorization"]
  return axios.get(url).catch(error=>{
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        callback(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        callback(error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(error.message);
      }
    })
}
export const getBSCInternalTxAsync =async (tx:string)=>{
  let url = BSCAPI[DEFAULT_NETWORK]+BSC_API.intTx+"&txhash="+ tx+"&apikey="+BSCAPIKEY;
  delete axios.defaults.headers.common["authorization"]
  return axios.get(url);
}