import React, { useMemo } from "react";
import {useState} from 'react';
import {useContext} from 'react';
import { useLocalStorageState } from '../hooks';
import {useEffect} from 'react';
import useAlertItemList from '../hooks/useAlertItemList';
import useActiveWeb3React from "../hooks/useActiveWeb3React";

export interface IAlertContext {
    alertList:Array<any>;
    alertArray:Array<string>;
    setAlertList:any;
  }
export interface IAlertItem {
    time:string;
    status:number,
    amount:number
}
const AlertContext = React.createContext<IAlertContext | null>(null);
export const  AlertContextProvider = ({ children = null as any })=>{
    const {account} = useActiveWeb3React();
    
    const [allist,setlist] = useLocalStorageState("ALERT_LIST_"+account,"");
    const [alertList,setAlertList] = useState<Array<string>>(allist !== ""?allist:[]);
    useEffect(()=>{
        if(alertList.length && account){
            setlist(alertList);
        }
    },[alertList,account])
    useEffect(()=>{setAlertList(allist)},[allist])
    const alertLists =  useAlertItemList(alertList);
    
    const data = {
        alertList:alertLists,
        alertArray:alertList,
        setAlertList:setAlertList
    }
    return(
        <AlertContext.Provider
        value={data}
        >
            {children}
        </AlertContext.Provider>
    )
}
export const useAlertProvider = () => {
    const context = useContext(AlertContext);
  
    if (!context) {
      throw new Error('Component rendered outside the provider tree');
    }
  
    return context;
  };