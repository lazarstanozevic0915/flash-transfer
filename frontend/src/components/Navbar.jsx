import React, { useState } from 'react'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Bell, ChevronDown, HelpCircle, Settings } from 'lucide-react';
import { blogUser1Img, currency, icons, language } from '../assets/image';
import ProfileDropdown from './ProfileDropdown';
import WalletDropdown from './WalletDropdown';
import CurrencyLanguageDropdown from './CurrencyLanguageDropdown';
import NFTDropdown from './NFTdropdown';
import NotificationDropdown from './NotificationDropdown';
import WalletConnect from './WalletConnect';
import WalletConnectDropdown from './WalletConnectDropdown';

export default function Navbar() {
    const { isAuthenticated, connectedWallet } = useAuth();
    const [ activeDropdown, setActiveDropdown  ] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
    const [isNftDropdownOpen, setIsNftDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

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
                <div className="flex items-center space-x-2 border-[#EBECED] bg-[rgba(255,255,255,0.8)] border p-1.5 pr-6 rounded-3xl ">
                  <div className="flex gap-1 items-center text-[#6E757D]">
                    <img src={currency.usdt} alt="" className='w-5 h-5 object-fill' />
                    <ChevronDown size={12} />
                  </div>
                  <span className="text-[#6E757D] opacity-60 font-light">|</span>
                  <span className="text-[13px] font-light text-[#6E757D]">$100.00</span>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-3">
                  <div className='w-7 h-7 items-center flex justify-center cursor-pointer rounded-full bg-white relative' onClick={() => {
                                    setActiveDropdown('nft');
                                    setIsNftDropdownOpen(!isNftDropdownOpen);
                                  }}
                                >
                    <img src={icons.nft} alt="" className="w-4 h-4" />
                    {
                      activeDropdown === 'nft' &&
                             ( <div>
                                  <NFTDropdown 
                                  isOpen={ isNftDropdownOpen && activeDropdown === 'nft'}
                                  onClose={!isNftDropdownOpen}
                                  />
                                </div>
                              )
                    }
                  </div>
                  <div className='w-7 h-7 items-center relative cursor-pointer flex justify-center rounded-full bg-white ' onClick={() => {
                                    setActiveDropdown('wallet');
                                    setIsWalletDropdownOpen(!isWalletDropdownOpen);
                                  }}
                                >
                    <img src={icons.wallet} alt="" className="w-4 h-4" />
                    { 
                      activeDropdown === 'wallet' && connectedWallet === '' ? 
                      (
                        <WalletConnectDropdown
                          isOpen={ isWalletDropdownOpen && activeDropdown === 'wallet'} 
                          onClose={!isWalletDropdownOpen} 
                        />
                      )
                      :
                      (
                        <div>
                            <WalletDropdown 
                              isOpen={ isWalletDropdownOpen && activeDropdown === 'wallet'} 
                              onClose={!isWalletDropdownOpen} 
                            />
                        </div>
                      )
                    }
                  </div>
                  <div className='w-7 h-7 items-center relative flex justify-center cursor-pointer rounded-full bg-white' onClick={() => {
                                  setActiveDropdown('notification');
                                  setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
                                  }}
                                >
                    <Bell className="w-4 h-4 text-gray-600" />
                     {
                        activeDropdown === 'notification' &&
                      (
                        <div>
                          <NotificationDropdown 
                            isOpen={ isNotificationDropdownOpen && activeDropdown === 'notification'}
                            onClose={!isNotificationDropdownOpen}
                          />
                        </div>
                      )
                    }
                  </div>
                </div>

                {/* Language Selector */}
                <div className="flex items-center  relative rounded-full bg-white w-8 h-8 justify-center cursor-pointer"  onClick={() => {
                                                            setActiveDropdown('currency');
                                                            setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
                                                          }}
                                                        >
                  <div className=" rounded-full bg-white w-8 h-8 flex items-center justify-center space-x-2 cursor-pointer">
                    <img 
                      src={language.english}
                      alt="US Flag" 
                      className="w-4 h-4"
                    />
                  </div>
                  {
                    activeDropdown === 'currency' &&
                    (<div className="relative z-50">
                      <CurrencyLanguageDropdown
                          isOpen={  isCurrencyDropdownOpen && activeDropdown === 'currency'} 
                          onClose={!isCurrencyDropdownOpen } 
                      />
                    </div>)
                  }
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-2 cursor-pointer"  onClick={() => {
                  setActiveDropdown('profile');
                  setIsDropdownOpen(!isDropdownOpen);
                  }}>
                  <div className=" p-1 rounded-full gap-2 bg-white relative flex z-50 text-[#D3D8DD] border-[#D3D8DD] items-center justify-center">
                        <img src={blogUser1Img} alt="" className='w-7 h-7 object-fill' />
                        <ChevronDown size={16} />

                       { 
                          activeDropdown === 'profile' &&
                          (<div className="relative z-50">
                              <ProfileDropdown 
                                  isOpen={ isDropdownOpen  && activeDropdown === 'profile'} 
                                  onClose={!isDropdownOpen } 
                              />
                          </div>)
                        }
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
