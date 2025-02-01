import QrCode from "../assets/Group 1000002890.png";
import Modal from './Modal'
import { useState } from 'react'
import logo from "../assets/image/logo.svg";
import metamask from "../assets/image/icons/metamask.svg";
import phantom from "../assets/phantom.png";
import ledger from "../assets/ledger.png";
import walletconnect from "../assets/WalletConnect.svg";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function WalletConnect({ isOpen, onClose }) {
  const { login, connectWallet } = useAuth();
  const navigate = useNavigate()

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
      <div className="flex max-md:flex-col justify-between gap-8 max-md:gap-2 dm-sans bg-white">
        {/* Left side - Wallet List */}
        <div className="flex flex-col p-5 gap-5 w-full ">
          <h2 className="text-[22px] font-normal mb-2">Sign in with Wallet</h2>
          <p className="text-sm text-[#6E757D] mb-2">Connect to discover wallets:</p>
          
          <div className="space-y-4 space-x-2">
            {wallets.map(({ name, imgSrc }) => (
              <div key={name} className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={imgSrc} 
                    alt={`${name} logo`}
                    className="h-8 w-8 object-fill"
                  />
                  <span className="text-sm font-normal text-[#181F30]">{name}</span>
                </div>
                <button 
                  className="px-6 py-2 bg-[#EBECED] rounded-full text-[13px] text-[#181F30] hover:bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    login();
                    connectWallet(`${name}`);
                    navigate('/');
                  }}
                >
                  Connect
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 gap-1 flex flex-col justify-center items-start">
            <p className="text-[14px] text-[#6E757D]">
              Don't see your wallet listed above?{' '}
            </p>
            <button className="text-[#2475FF] text-[14px] hover:text-blue-500">
                Connect to another wallet
              </button>
          </div>
        </div>

        {/* Right side - QR Code */}
        <div className="flex flex-col items-center justify-start bg-gray-100 px-20 py-12 rounded-2xl w-[320px]">
          <div className="flex flex-col items-center mb-6">
            <img src={walletconnect} alt="WalletConnect" className="h-8 w-8 object-contain" />
            <h3 className="text-base font-light text-[#181F30]">Wallet connect</h3>
          </div>
          <div className="bg-white rounded-3xl p-1 w-[180px] h-[180px] flex items-center justify-center">
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