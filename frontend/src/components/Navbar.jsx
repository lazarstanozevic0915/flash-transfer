import React, { useState } from 'react'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Bell, ChevronDown, HelpCircle, Settings } from 'lucide-react';
import { blogUser1Img, icons, language } from '../assets/image';
import ProfileDropdown from './ProfileDropdown';
import WalletDropdown from './WalletDropdown';
import CurrencyLanguageDropdown from './CurrencyLanguageDropdown';

export default function Navbar() {
    const { isAuthenticated } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between relative z-50 border-b bg-[#F6F6F6] border-[#D3D8DD] px-32 py-3'>
        <div className="flex space-x-8">
            <div className="flex items-center space-x-1">
                <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px]' />
                <span className='inter-semibold text-[16px]'>Flash Transfer</span>
            </div>
            <div className="flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                <NavLink to={`/send`} className={`hover:text-[#111] hover:dm-sans-bold`}>Send</NavLink>
                <NavLink to={`/find-location`} className={`hover:text-[#111] hover:dm-sans-bold`}>Find location</NavLink>
                <NavLink to={`/track-order`} className={`hover:text-[#111] hover:dm-sans-bold`}>Track a transfer</NavLink>
                <NavLink to={`/help`} className={`hover:text-[#111] hover:dm-sans-bold`}>Help</NavLink>
            </div>
        </div>
        {isAuthenticated ? (
            <>
            <div className="flex items-center space-x-3">
        {/* Amount Display */}
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-medium">$</span>
          <span className="text-[14px]">90000</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <div className='w-7 h-7 items-center flex justify-center rounded-full bg-white '>
            <img src={icons.nft} alt="" className="w-4 h-4" />
          </div>
          <div className='w-7 h-7 items-center relative flex justify-center rounded-full bg-white ' onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}>
            <img src={icons.wallet} alt="" className="w-4 h-4" />
            <div>
            <WalletDropdown 
            isOpen={isWalletDropdownOpen} 
            onClose={() => setIsWalletDropdownOpen(false)} 
            />
            </div>
          </div>
          <div className='w-7 h-7 items-center flex justify-center rounded-full bg-white '>
            <Bell className="w-4 h-4 text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center  relative rounded-full bg-white w-8 h-8 justify-center space-x-2 cursor-pointer"  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}>
          <img 
            src={language.english}
            alt="US Flag" 
            className="w-4 h-4"
          />
          <div>
          <CurrencyLanguageDropdown
            isOpen={isCurrencyDropdownOpen} 
            onClose={() => setIsCurrencyDropdownOpen(false)} 
            />
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer"  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className=" p-1 rounded-full gap-2 bg-white relative flex z-50 text-[#D3D8DD] border-[#D3D8DD] items-center justify-center">
                <img src={blogUser1Img} alt="" className='w-7 h-7 object-fill' />
                <ChevronDown size={16} />
                <div className="relative z-50">
                    <ProfileDropdown 
                        isOpen={isDropdownOpen} 
                        onClose={() => setIsDropdownOpen(false)} 
                    />
                </div>
          </div>
        </div>
      </div>
            </>
        ) : (
            <div className="flex items-center space-x-1  text-[12px] dm-sans-medium">
                <NavLink to={`/signin`} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
                <NavLink to={`/signup`} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
            </div>
        )}
    </nav>
  )
}
