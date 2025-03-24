import React, { useEffect, useState } from 'react';
import usdtLogo from '../assets/image/icons/currency/usdt.svg'
import eurLogo from '../assets/image/icons/currency/eur.svg'
import solanaLogo from '../assets/image/icons/currency/solana.svg'
import { currency } from '../assets/image';

const CurrencySelect = ({ selectedCurrency, onSelect }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currencies, setCurrencies] = useState([])
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/exchange/currencies`)

        if (response.ok) {
          const res = await response.json()
          setCurrencies(res.data)
        } else {
          console.error('Failed to fetch currencies:', response.status)
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
      }
    }

    fetchCurrencies()
  }, [])
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2 outline-none dm-sans-light text-[14px] text-[#181F30]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={selectedCurrency.icon} 
          alt={selectedCurrency.code}
          className="w-6 h-6 rounded-full"
        />
        <span>{selectedCurrency.code}</span>
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
                src={currency.icon} 
                alt={currency.code}
                className="w-4 h-4 rounded-full"
              />
              <span className="dm-sans-light text-[13px] text-[#181F30]">
                {currency.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;