import QrCode from "../assets/Group 1000002890.png";
import Modal from './Modal'
import { useState } from 'react'
import logo from "../assets/image/logo.svg";
import metamask from "../assets/image/icons/metamask.svg";
import phantom from "../assets/phantom.png";
import ledger from "../assets/ledger.png";

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
      <div className="flex gap-8 bg-white">
        {/* Left side - Wallet List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sign in with Wallet</h2>
          <p className="text-sm text-gray-600 mb-6">Connect to discover wallets:</p>
          
          <div className="space-y-4">
            {wallets.map(({ name, imgSrc }) => (
              <div key={name} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img 
                    src={imgSrc} 
                    alt={`${name} logo`}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-700 min-w-[80px]">{name}</span>
                </div>
                <button 
                  className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-500 hover:bg-gray-100"
                >
                  Connect
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Don't see your wallet listed above?{' '}
              <button className="text-blue-600 hover:text-blue-500">
                Connect to another wallet
              </button>
            </p>
          </div>
        </div>

        {/* Right side - QR Code */}
        <div className="flex flex-col items-center bg-gray-100 px-4 rounded-2xl mr-2">
          <h3 className="text-base font-medium mb-4">Wallet connect</h3>
          <div className="bg-gray-100 rounded-lg p-2 mt-18" >
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