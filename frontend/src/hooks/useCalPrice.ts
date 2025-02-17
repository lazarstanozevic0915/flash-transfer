import { useEffect, useState } from "react";
import useGetPrice from "./useGetPrice";
import { calPrice } from "../Services/exchange";


export default function useCalPrice(tokenName: string, currencyName: string, input_type: number, amount_token: number, amount_fiat: number, exchange_type: number): any {
    const [data, setData] = useState({});
    useEffect(() => {
        const getPrice = async () => {
            const payload = {
                token: tokenName,
                currency: currencyName,
                input_type: input_type,
                amount_token: amount_token,
                amount_fiat: amount_fiat,
                exchange_type: exchange_type
            }
            let res = await calPrice(payload);
            if (res.success == true) {
                setData(res.data)
            }
            console.log("🚀 ~ file: useCalPrice.ts:19 ~ getPrice ~ res:", res)

        }
        getPrice()
    }, [tokenName, currencyName, input_type, amount_token, amount_fiat, exchange_type])

    return data;

}
