import React from 'react';
import { ArrowDownToLine, ArrowUpToLine, Repeat } from 'lucide-react';
import { currency } from '../assets/image';
import { useAuth } from '../auth/AuthProvider';

const WalletDropdown = ({ isOpen, onClose, balance = "54,730.00" }) => {
  if (!isOpen) return null;
  const { disconnectWallet } = useAuth();

  return (
    <div className="absolute right-2 top-6 mt-2 w-72 bg-white pb-4 rounded-lg shadow-lg border border-gray-100 ">
      {/* Wallet Header */}
      <div className="p-4 border-b border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 mb-1">My Wallet</div>
          <div className="border-[#D3D8DD] border px-3 py-1 rounded-2xl flex items-center justify-center gap-2 text-xs">
            <img src={currency.solanaIcon} alt="" />
            <span>
              Solana
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center bg-[#EFF0F1] gap-2 p-4 rounded-2xl'>
          <div className="text-sm text-[#6E757D]">Total Balance</div>
          <div className="text-2xl font-semibold">${balance}</div>
          <div className="text-xs text-[#6E757D] mt-1">0x4f27...4d75</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 px-8">
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <ArrowDownToLine className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs text-[#6E757D]">Receive</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <ArrowUpToLine className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs text-[#6E757D]">Send</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <Repeat className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs text-[#6E757D]">Swap</span>
        </button>
      </div>

      <form action="" className='px-3 text-[12px]'>
        <div className='space-y-2'>
          <div className="w-full relative">
            <input type="text" placeholder='USDT 0.00' className='p-2 pl-7 border border-[#D3D8DD] rounded-lg w-full' />
            <div className="absolute left-1 bottom-2">
              <img src={currency.usdt} alt="" className='w-5 h-5 object-fill' />
            </div>
          </div>
          <input type="text" placeholder='To' className='p-2 border border-[#D3D8DD] rounded-lg w-full' />
          <div className="flex gap-2">
            <button className='flex-1 p-2.5 bg-[#D3D8DD] text-[#FF3E24] rounded-lg'
              onClick={(e) => {
                e.preventDefault();
                disconnectWallet();
              }}
            >Disconnect</button>
            <button className='flex-1 p-2.5 bg-[#FFC000] text-[#181F30] rounded-lg'>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WalletDropdown;