import { usePriceOracleContract } from "./useContract";
import { useEffect, useState } from "react";
import { getUSDPriceOftoken } from "../contract";
import useActiveWeb3React from './useActiveWeb3React';
import { DEFAULT_NETWORK } from '../constants/chains';
import { ORACLE_CONTRACT_ADDRESS } from "../constants";

export default function useTokenPrice(tokenName: string): number {
    const { chainId } = useActiveWeb3React();
    const [usd, setUsd] = useState<number>(0);

    // console.log("oracle_contract",chainId,ORACLE_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK])
    const PriceOracleContract = usePriceOracleContract(ORACLE_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);

    useEffect(() => {

        if (PriceOracleContract && tokenName !== "") {
            try {

                getUSDPriceOftoken(PriceOracleContract, tokenName).then((res: number) => {
                    setUsd(res);
                })
            } catch (error) {
                console.error('price error', error)
                setUsd(0);
            }
        } else {
            setUsd(0);
        }
    }, [tokenName, PriceOracleContract])
    return usd;
}