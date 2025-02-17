import { injected, bscConnector, walletConnectV2 } from '../connectors';
import { AbstractConnector } from '@web3-react/abstract-connector';
export interface WalletInfo {
    connector: AbstractConnector;
    name: string;
    // icon: string;
    description: string;
    href: string | null;
    color: string;
    primary?: boolean;
  }
// eslint-disable-next-line import/prefer-default-export
export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    METAMASK: {
      connector: injected,
      name: 'MetaMask',
    //   icon: METAMASK_ICON,
      description: 'Easy-to-use browser extension.',
      href: null,
      color: '#E8831D',
    },
    WALLET_CONNECT: {
      connector: walletConnectV2,
      name: 'WalletConnect',
    //   icon: WALLET_CONNECT_ICON,
      description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
      href: null,
      color: '#4196FC',
    },
    TRUST_CONNECT: {
      connector: injected,
      name: 'TrustConnect',
    //   icon: WALLET_CONNECT_ICON,
      description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
      href: null,
      color: '#4196FC',
    },
    BSC_CONNECT: {
      connector: bscConnector,
      name: 'BSCConnect',
    //   icon: WALLET_CONNECT_ICON,
      description: 'Connect to Binance Wallet, Rainbow Wallet and more...',
      href: null,
      color: '#4196FC',
    }
  };

//   /**
//  * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
//  * @returns {boolean} true if the setup succeeded, false otherwise
//  */
// export const setupNetwork = async () => {
//   const provider = window.ethereum
//   if (provider) {
//     const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
//     try {
//       await provider.request({
//         method: 'wallet_addEthereumChain',
//         params: [
//           {
//             chainId: `0x${chainId.toString(16)}`,
//             chainName: 'Binance Smart Chain Mainnet',
//             nativeCurrency: {
//               name: 'BNB',
//               symbol: 'bnb',
//               decimals: 18,
//             },
//             rpcUrls: nodes,
//             blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
//           },
//         ],
//       })
//       return true
//     } catch (error) {
//       console.error('Failed to setup the network in Metamask:', error)
//       return false
//     }
//   } else {
//     console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
//     return false
//   }
// }
  