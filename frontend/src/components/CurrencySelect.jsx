import React, { useState } from 'react';
import usdtLogo from '../assets/image/icons/currency/usdt.svg'
import eurLogo from '../assets/image/icons/currency/eur.svg'
import solanaLogo from '../assets/image/icons/currency/solana.svg'

const CurrencySelect = ({ selectedCurrency, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { code: 'EUR', logo: eurLogo, label: 'EUR' },
    { code: 'USDT', logo: usdtLogo, label: 'USDT' },
    { code: 'SOL', logo: solanaLogo, label: 'SOL' }
  ];

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2 outline-none dm-sans-light text-[14px] text-[#181F30]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={selectedCurrency.logo} 
          alt={selectedCurrency.code}
          className="w-6 h-6 rounded-full"
        />
        <span>{selectedCurrency.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
              onClick={() => {
                onSelect(currency);
                setIsOpen(false);
              }}
            >
              <img 
                src={currency.logo} 
                alt={currency.code}
                className="w-4 h-4 rounded-full"
              />
              <span className="dm-sans-light text-[13px] text-[#181F30]">
                {currency.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;