import { useState } from 'react'
import WalletConnect from './WalletConnect'
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
import wallet from "../assets/wallet.png";
import google from "../assets/image/icons/google.svg";


export default function SocialButtons() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  return (
    <>
      <div className="mt-6">
        <div className="text-center text-sm text-gray-500 mb-4">OR</div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <img src={google} alt="" className="h-5 w-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <img src={facebook} alt="" className="h-5 w-5 mr-2" />
            Facebook
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <img src={apple} alt="apple" className="h-5 w-5 mr-2" />
            Apple
          </button>
          <button
            onClick={() => setIsWalletModalOpen(true)}
            className="flex items-center justify-center px-4 py-2  border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img src={wallet} alt="wallet" className="h-5 w-5 mr-2" />
            Wallet
          </button>
        </div>
      </div>

      <WalletConnect
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  )
}