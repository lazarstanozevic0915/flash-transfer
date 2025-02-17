/* eslint-disable import/no-extraneous-dependencies */
import { getAddress } from '@ethersproject/address';
import { AddressZero } from '@ethersproject/constants';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { ethers, Contract } from 'ethers';
import { formatFixed, parseFixed, BigNumber } from "@ethersproject/bignumber";
import { BigNumberish } from 'ethers';
// import {  } from "@ethersproject/bignumber";

const names = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];

export function hexEncode(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const hex = str.charCodeAt(i).toString(16);
        result += ("000" + hex).slice(-4);
    }
    return result;
}

export function hexDecode(str: string): string {
    const hexes = str.match(/.{1,4}/g) || [];
    let back = "";
    for (let j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }
    return back;
}

export function signMessage(library: Web3Provider, account: string, message: string): Promise<string> {
    const signer = getSigner(library, account);
    return signer.signMessage(message);
}

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked();
}

export const getshortWalletAddress = (account: string): string => {
    if (ethers.isAddress(account)) {
        return `${account.slice(0, 6)}...${account.slice(-4)}`;
    }
    return account;
};

function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library;
}

export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
    if (!ethers.isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return new Contract(address, ABI, getProviderOrSigner(library, account) as any);
}

export function formatUints(value: BigNumberish, uintName?: string | BigNumberish): string {
    if (typeof uintName === "string") {
        const index = names.indexOf(uintName);
        if (index !== -1) { uintName = 3 * index; }
    }
    return formatFixed(value, (uintName != null) ? uintName : 18);
}

export function parseUints(value: string, uintName?: BigNumberish): BigNumber {
    if (typeof value !== "string") {
        throw new Error("value must be a string");
    }
    if (typeof uintName === "string") {
        const index = names.indexOf(uintName);
        if (index !== -1) { uintName = 3 * index; }
    }
    return parseFixed(value, (uintName != null) ? uintName : 18);
}

export function formatEther(wei: BigNumberish): string {
    return ethers.formatUnits(wei, 18);
}

export function parseEther(ether: string): BigNumber {
    return parseUints(ether, 18);
}

export function createTopic(funName: string): string {
    return ethers.id(funName);
}