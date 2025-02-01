import QrCode from "../assets/Group 1000002890.png";
import Modal from './Modal'
import { useState } from 'react'
import logo from "../assets/image/logo.svg";
import metamask from "../assets/image/icons/metamask.svg";
import phantom from "../assets/phantom.png";
import ledger from "../assets/ledger.png";
import walletconnect from "../assets/WalletConnect.svg";

export default function WalletConnect({ isOpen, onClose }) {
  const wallets = [
    { 
      name: 'Flash Wallet',
      imgSrc: logo
    },
    { 
      name: 'Metamask',
      imgSrc: metamask
    },
    { 
      name: 'Phantom',
      imgSrc: phantom
    },
    { 
      name: 'Ledger',
      imgSrc: ledger
    }
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between gap-8 bg-white">
        {/* Left side - Wallet List */}
        <div className="flex flex-col w-full ">
          <h2 className="text-xl font-semibold mb-4">Sign in with Wallet</h2>
          <p className="text-sm text-gray-600 mb-6">Connect to discover wallets:</p>
          
          <div className="space-y-4 space-x-2">
            {wallets.map(({ name, imgSrc }) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src={imgSrc} 
                    alt={`${name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-700">{name}</span>
                </div>
                <button 
                  className="px-6 py-2 bg-gray-50 rounded-full text-sm text-gray-500 hover:bg-gray-100"
                >
                  Connect
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center items-start">
            <p className="text-sm text-gray-600">
              Don't see your wallet listed above?{' '}
            </p>
            <button className="text-blue-600 hover:text-blue-500">
                Connect to another wallet
              </button>
          </div>
        </div>

        {/* Right side - QR Code */}
        <div className="flex flex-col items-center justify-center bg-gray-100 px-20 py-12 rounded-2xl w-[320px]">
          <div className="flex flex-col items-center mb-4">
            <img src={walletconnect} alt="WalletConnect" className="h-8 w-8 object-contain mb-2" />
            <h3 className="text-base font-medium">Wallet connect</h3>
          </div>
          <div className="bg-white rounded-lg p-4 w-[180px] h-[180px] flex items-center justify-center">
            <img 
              src={QrCode}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}