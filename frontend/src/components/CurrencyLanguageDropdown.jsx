import React, { useState } from 'react';
import { language } from '../assets/image';

const CurrencyLanguageDropdown = ({ onClose, isOpen }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const currencies = ['USDT', 'EUR'];
  const languages = [
    { name: 'French', flag: language.french },
    { name: 'Germany', flag: language.germany },
    { name: 'Spanish', flag: language.spanish },
    { name: 'Netherlands', flag: language.netherlands },
    { name: 'Portuguese', flag: language.portuguese },
    { name: 'Arabic', flag: language.arabic },
    { name: 'Indian', flag: language.indian },
    { name: 'Vietnamese', flag: language.vietnamese }
  ];

  const exchangeRate = 1.06;
  const fee = 0.50;
  const transferTime = '1 Min';
  const totalToPay = 102.60;
  const recipientGets = 100.00;

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-46 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 space-y-4">
        {/* Language Selection */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Language</h3>
          <div className="grid gap-2">
            {languages.map((lang) => (
              <button
                key={lang.name}
                className={`flex items-center space-x-2 px-1 py-2 rounded-lg hover:bg-gray-50 text-left ${
                  selectedLanguage === lang.name ? 'bg-gray-50' : ''
                }`}
                onClick={() => setSelectedLanguage(lang.name)}
              >
                {/* <span>{lang.flag}</span> */}
                <img src={lang.flag} alt="" />
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyLanguageDropdown;