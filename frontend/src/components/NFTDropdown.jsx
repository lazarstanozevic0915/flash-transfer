import React from 'react';
import { nftIcons } from '../assets/image';

const NFTDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const nftItems = [
    {
      id: 'bronze44',
      title: 'Discount On Transaction Fees - Bronze #44',
      type: 'bronze',
      imgSrc: nftIcons.bronzeFeeReduction
    },
    {
      id: 'silver30',
      title: 'Discount On Transaction Fees - Silver #30',
      type: 'silver',
      imgSrc: nftIcons.silverFeeReduction
    },
    {
      id: 'bronze88',
      title: 'Ranking Increase - Bronze #88',
      type: 'bronze',
      imgSrc: nftIcons.bronzeFeeReduction
    },
    {
      id: 'silver67',
      title: 'Ranking Increase - Silver #67',
      type: 'silver',
      imgSrc: nftIcons.silverFeeReduction
    }
  ];

  return (
    <div className="absolute right-0 top-6 mt-2 w-88 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Header */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-[#181F30]">NFT</h3>
      </div>

      {/* NFT List */}
      <div className="py-2">
        {nftItems.map((item) => (
          <div
            key={item.id}
            className="p-3 mx-3 hover:bg-gray-50 flex items-center space-x-2 cursor-pointer border-b border-gray-300"
          >
            <div>
                <img src={item.imgSrc} alt="" className='object-contain' />
            </div>
            <span className="text-sm text-[#181F30]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTDropdown;