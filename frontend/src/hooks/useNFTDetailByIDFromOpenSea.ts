import {ethers} from "ethers";
import openSeaNFTABI from "../abi/openseaNFTABI.json";
import { OPENSEANFTCONTRACTADDRESS } from "../constants";
import { useMemo } from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios  from "axios";
const UseNFTDetailByIDFromOpenSea = (tokenId:number):any=>{
    const [tokenURI,setTokenURI] = useState<string>("");
    const [metadata,setMetadata] = useState()
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
    const openseaNFTCollectionContract = new ethers.Contract(OPENSEANFTCONTRACTADDRESS,openSeaNFTABI,provider);
    useEffect( ()=>{
         if(tokenId>0){
            openseaNFTCollectionContract.tokenURI(tokenId).then((uri:string)=>{
                setTokenURI(uri);
             }) .catch((error:any)=>{
               console.log("nft detail error:",error);
             })
         }
    },[tokenId])

    useEffect(()=>{
        if(tokenURI!==""){
           const ipfsClient = axios.create();
           delete ipfsClient.defaults.headers.common["authorization"];
           ipfsClient.defaults.headers.withCredentials = false
           ipfsClient.get("https://ipfs.io/"+tokenURI,{
            headers:{
                withCredentials: false
            }
           }).then((res:any)=>{
                setMetadata(res?.data);
            }).catch((error:any)=>{
                console.log("nft token uri error:",error);
            })    
        }
    },[tokenURI])
    return metadata;
}
export default UseNFTDetailByIDFromOpenSea;