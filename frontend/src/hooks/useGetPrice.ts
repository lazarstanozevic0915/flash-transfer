import { useEffect, useState } from "react";
import { getPrice } from "../Services/exchange";

export default function useGetPrice(tokenName: string, currencyName: string): number {
    const [usd, setUsd] = useState<number>(0);
    useEffect(() => {
        const getTokenPrice = async () => {
            const payload = {
                token: tokenName,
                currency: currencyName
            }
            console.log("🚀 ~ file: useGetPrice.ts:12 ~ getTokenPrice ~ payload:", payload)
            let res = await getPrice(payload);
            console.log("🚀 ~ file: useGetPrice.ts:13 ~ getTokenPrice ~ res:", res)
            if (res.success === true) {
                setUsd(res.price.currency)
            }
            else
                setUsd(0)
        }
        getTokenPrice();
    }, [tokenName, currencyName])

    return usd;
}