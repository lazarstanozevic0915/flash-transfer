import useActiveWeb3React from './useActiveWeb3React';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ZAPPER_KEY } from '../constants';
import useChainInfo from './useChainInfo';
export type IToken = {
    tokenAddress: string;
    balance: string;
    tokenAmountFix: string;
    chain: string;
    tokenAmount: string;
    symbol: string;
    type: number;
    icon: string;
}
const useTokenList = () => {
    const { account } = useActiveWeb3React();
    const [tokenList, setTokenList] = useState<Array<IToken>>([]);
    const { chain, icon } = useChainInfo();
    useEffect(() => {
        if (account && chain) {
            // delete axios.defaults.headers.common["authorization"];
            axios.get("https://api.zapper.fi/v2/balances?addresses[]=" + account + "&&api_key=" + ZAPPER_KEY).then((res1) => {

                const data1 = res1.data;

                let tmpResult: Array<IToken> = [];
                data1.split('\n').forEach((e: string) => {
                    if (e.startsWith('data')) {
                        const curNetName = chain.name.split(' ')[0];
                        var data = JSON.parse(e.slice(5));
                        // console.log("is same:",data?.network?.search(curNetName.toLowerCase()),"curnetname:",curNetName)

                        // console.log("usd price:",data);

                        if (data['balance'] && data['balance']['wallet'] && data?.network?.search(curNetName.toLowerCase()) === 0) {
                            for (var res in data['balance']['wallet']) {
                                var token = data['balance']['wallet'][res]
                                tmpResult.push({
                                    tokenAddress: token['address'],
                                    balance: token['balanceUSD'],
                                    tokenAmountFix: token['context']['balance'],
                                    chain: token['network'],
                                    tokenAmount: token['context']['balanceRaw'],
                                    symbol: token['context']['symbol'],
                                    icon: token['displayProps']['images'][0],
                                    type: 1
                                });
                            }

                        }

                    }
                });

                setTokenList(tmpResult);
            }).catch((error) => {
                console.log("useTokenList error:", error);
            })
        }

    }, [account, chain])
    // console.log("tokenList:",tokenList)
    return tokenList;
}
export default useTokenList;