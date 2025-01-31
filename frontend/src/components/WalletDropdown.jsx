import React from 'react';
import { ArrowDownToLine, ArrowUpToLine, Repeat } from 'lucide-react';

const WalletDropdown = ({ isOpen, onClose, balance = "54,730.00" }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-2 top-6 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Wallet Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="text-sm text-gray-500 mb-1">My Wallet</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold">${balance}</div>
            <div className="text-xs text-gray-400 mt-1">0x4f27...4d75</div>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs">Solana</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 p-4">
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <ArrowDownToLine className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs">Receive</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <ArrowUpToLine className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs">Send</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
            <Repeat className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs">Swap</span>
        </button>
      </div>
    </div>
  );
};

export default WalletDropdown;