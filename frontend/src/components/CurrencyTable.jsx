import React, { useMemo, useState } from 'react';
import { Star } from 'lucide-react';
import { currency, language } from '../assets/image';

const CurrencyTable = ({searchQuery, filterType}) => {
  const [favorites, setFavorites] = useState(new Set());

  const cryptoData = [
    { name: 'Arbitrum', code: 'ETH', amount: '$67.00', change: '-0.02%', image: currency.arb },
    { name: 'Avalanche', code: 'AVAX', amount: '$67.00', change: '-0.02%', image: currency.avax },
    { name: 'Base', code: 'ETH', amount: '$67.00', change: '-0.02%', image: currency.base },
    { name: 'Belgium', code: 'EUR', amount: '$67.00', change: '-0.02%', image: language.belgium },
    { name: 'Benin', code: 'XOF', amount: '$67.00', change: '-0.02%', image: language.benin },
    { name: 'Binance Smart Chain', code: 'BNB', amount: '$67.00', change: '-0.02%', image: currency.bnb },
    { name: 'Bitcoin', code: 'BTC', amount: '$67.00', change: '-0.02%', image: currency.btc },
    { name: 'Blast', code: 'ETH', amount: '$67.00', change: '-0.02%', image: currency.blast },
    { name: 'Burkina Faso', code: 'XOF', amount: '$67.00', change: '-0.02%', image: language.burkina },
    { name: 'Chad', code: 'XAF', amount: '$67.00', change: '-0.02%', image: language.chad },
    { name: 'Cameroon', code: 'XAF', amount: '$67.00', change: '-0.02%', image: language.cameroon },
    { name: 'Comoross', code: 'XMF', amount: '$67.00', change: '-0.02%', image: currency.comoros },
    { name: 'Cronos', code: 'CRO', amount: '$67.00', change: '-0.03%', image: currency.cronos },
    { name: 'Congo Brazzaville', code: 'XAF', amount: '$67.00', change: '-0.03%', image: language.congoR },
    { name: 'Congo Kinshasa', code: 'CDF', amount: '$67.00', change: '-0.03%', image: language.congoK },
    { name: 'DAI', code: 'EVM', amount: '$67.00', change: '-0.03%', image: currency.dai },
    { name: 'Ethereum', code: 'ETH', amount: '$67.00', change: '-0.03%', image: currency.eth },
    { name: 'EURC', code: 'EVM', amount: '$67.00', change: '-0.03%', image: currency.usdc },
    { name: 'EURT', code: 'EVM', amount: '$67.00', change: '-0.03%', image: currency.usdt },
    { name: 'Fantom', code: 'FTM', amount: '$67.00', change: '-0.03%', image: currency.fantom },
    { name: 'Flash', code: 'SOL', amount: '$67.00', change: '-0.03%', image: currency.flash },
    { name: 'France', code: 'EUR', amount: '$67.00', change: '-0.03%', image: language.french },
    { name: 'Gabon', code: 'XAF', amount: '$67.00', change: '-0.03%', image: language.gabon },
    { name: 'Gambia', code: 'GMD', amount: '$67.00', change: '-0.03%', image: language.gambia },
    { name: "Gambia", code: "GMD", amount: '$67.00', change: '-0.03%', image: language.gambia2  },
    { name: "Guinea Bissau", code: "XOF", amount: '$67.00', change: '-0.03%', image: language.guineaB  },
    { name: "Guinea", code: "GNF", amount: '$67.00', change: '-0.03%', image: language.guinea  },
    { name: "Haiti", code: "HTG", amount: '$67.00', change: '-0.03%', image: language.haiti  },
    { name: "India", code: "INR", amount: '$67.00', change: '-0.03%', image: language.indian  },
    { name: "Ireland", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.ireland  },
    { name: "Italy", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.italy  },
    { name: "Ivory Coast", code: "XOF", amount: '$67.00', change: '-0.03%', image: language.ivory  },
    { name: "Kenya", code: "KES", amount: '$67.00', change: '-0.03%', image: language.kenya  },
    { name: "Liberia", code: "LRD", amount: '$67.00', change: '-0.03%', image: language.liberia  },
    { name: "Luxembourg", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.luxem  },
    { name: "Madagascar", code: "MGA", amount: '$67.00', change: '-0.03%', image: language.mada  },
    { name: "Mali", code: "XOF", amount: '$67.00', change: '-0.03%', image: language.mali  },
    { name: "Mauritania", code: "MRU", amount: '$67.00', change: '-0.03%', image: language.mauri  },
    { name: "Morocco", code: "MAD", amount: '$67.00', change: '-0.03%', image: language.morocco  },
    { name: "Nigeria", code: "NGN", amount: '$67.00', change: '-0.03%', image: language.nigeria  },
    { name: "Niger", code: "XOF", amount: '$67.00', change: '-0.03%', image: language.niger  },
    { name: "Optimism", code: "ETH", amount: '$67.00', change: '-0.03%', image: currency.optimism  },
    { name: "Polygon", code: "POL", amount: '$67.00', change: '-0.03%', image: currency.polygon  },
    { name: "Portugal", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.portuguese  },
    { name: "Rwanda", code: "RWF", amount: '$67.00', change: '-0.03%', image: language.rwanda  },
    { name: "Senegal", code: "XOF", amount: '$67.00', change: '-0.03%', image: language.senegal  },
    { name: "Sierra Leone", code: "SLL", amount: '$67.00', change: '-0.03%', image: language.sierra  },
    { name: "Solana", code: "SOL", amount: '$67.00', change: '-0.03%', image: currency.solanaIcon  },
    { name: "Spain", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.spanish  },
    { name: "SUI", code: "SUI", amount: '$67.00', change: '-0.03%', image: currency.sui  },
    { name: "The Netherlands", code: "EUR", amount: '$67.00', change: '-0.03%', image: language.netherlands  },
    { name: "Tunisia", code: "TND", amount: '$67.00', change: '-0.03%', image: language.tunisia  },
    { name: "Tanzania", code: "TZS", amount: '$67.00', change: '-0.03%', image: language.tanzania  },
    { name: "Ton", code: "TON", amount: '$67.00', change: '-0.03%', image: currency.ton  },
    { name: "USDC", code: "EVM", amount: '$67.00', change: '-0.03%', image: currency.usdc  },
    { name: "USDT", code: "EVM", amount: '$67.00', change: '-0.03%', image: currency.usdt  },
    { name: "Uganda", code: "UGX", amount: '$67.00', change: '-0.03%', image: language.uganda  },
    { name: "Vietnam", code: "VND", amount: '$67.00', change: '-0.03%', image: language.vietnamese  },
  ];

  const toggleFavorite = (name) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(name)) {
        newFavorites.delete(name);
      } else {
        newFavorites.add(name);
      }
      return newFavorites;
    });
  };

    // Helper function to determine if an item is crypto
    const isCrypto = (code) => {
      const cryptoCodes = ['ETH', 'AVAX', 'BNB', 'BTC', 'CRO', 'EVM', 'FTM', 'SOL', 'POL', 'SUI', 'TON'];
      return cryptoCodes.includes(code);
    };
  
    // Filter and search logic
    const filteredData = useMemo(() => {
      return cryptoData.filter(item => {
        // Search filter
        const searchMatch = (
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        // Type filter
        let typeMatch = true;
        if (filterType === 'crypto') {
          typeMatch = isCrypto(item.code);
        } else if (filterType === 'fiat') {
          typeMatch = !isCrypto(item.code);
        }
  
        return searchMatch && typeMatch;
      });
    }, [searchQuery, filterType]);

  return (
    <div className="w-full bg-white rounded-xl dm-sans">
      <table className="w-full">
        <thead className='bg-[#F6F6F6] rounded-t-lg'>
          <tr className="border-b border-gray-100">
            <th className="py-4 px-6 text-left text-[13px] text-gray-500 font-normal">Favourites</th>
            <th className="py-4 px-6 text-left text-[13px] text-gray-500 font-normal">Crypto & fiat</th>
            <th className="py-4 px-6 text-left text-[13px] text-gray-500 font-normal">Amount</th>
            <th className="py-4 px-6 text-left text-[13px] text-gray-500 font-normal">Change(24h)</th>
            <th className="py-4 px-6 text-left text-[13px] text-gray-500 font-normal">Chart(24h)</th>
            <th className="py-4 px-6 text-right text-[13px] text-gray-500 font-normal">Action</th>
          </tr>
        </thead>
        <tbody className='border border-[#F6F6F6]'>
          {
          filteredData.length > 0 ? (
            filteredData.map((crypto, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-6">
                <button 
                  onClick={() => toggleFavorite(crypto.name)}
                  className="focus:outline-none"
                >
                  <Star 
                    className={`w-4 h-4 ${favorites.has(crypto.name) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                </button>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  <img src={crypto.image} alt="" className="w-6 h-6 rounded-full" />
                  <span className="text-[14px] text-gray-900">{crypto.name} - {crypto.code}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-[14px] text-gray-900">{crypto.amount}</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-green-500">{crypto.change}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.5L6 2.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 6L6 2.5L9.5 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </td>
              <td className="py-4 px-6">
                <svg width="84" height="32" viewBox="0 0 84 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 24L12.6897 18.4L23.3793 22.4L34.069 16L44.7586 20L55.4483 13.6L66.1379 16.8L76.8276 8L82 10.4" 
                    stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </td>
              <td className="py-4 px-6 text-right">
                <button className="px-6 py-2 bg-blue-500 text-white text-[14px] rounded-lg hover:bg-blue-600">
                  Send
                </button>
              </td>
            </tr>
           ))
          ) : (
            <tr>
              <td colSpan="6" className="py-8 text-center text-gray-500">
                No results found for your search criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;