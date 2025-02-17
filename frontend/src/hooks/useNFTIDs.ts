import useActiveWeb3React from './useActiveWeb3React';
import { useMemo } from 'react';
import { useOpenseaOracleContract } from './useContract';
import { OPENSEA_ORACLE_CONTRACT_ADDRESS } from '../constants';
import { DEFAULT_NETWORK } from '../constants/chains';
import { useState } from 'react';
import { useEffect } from 'react';
import { BigNumber } from 'ethers';
const UseNFTIDs = () => {

    const { account, chainId } = useActiveWeb3React();
    const oracleContract = useOpenseaOracleContract(OPENSEA_ORACLE_CONTRACT_ADDRESS[chainId || DEFAULT_NETWORK]);

    const [nftIds, setNftIds] = useState<any>([]);

    useEffect(() => {
        console.log("_____________________________!!!!")
        const getIds = async () => {
            if (oracleContract && account) {
                const nfts = await oracleContract.walletOfOwner("0x4f02b7f3fcc2f48217c42549df9f8a1c01334097");
                // const nfts = await oracleContract.walletOfOwner(account);

                const ids = nfts.map((i: BigNumber) => {
                    return BigNumber.from(i).toNumber();
                })
                setNftIds(ids);
            } else setNftIds([])
        }

        let active = true;
        getIds();
        return () => { active = false };

    }, []);
    return nftIds;
}
export default UseNFTIDs;