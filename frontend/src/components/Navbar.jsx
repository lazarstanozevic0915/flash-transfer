import React, { useState } from 'react'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Bell, ChevronDown, Menu } from 'lucide-react';
import { blogUser1Img, icons, language } from '../assets/image';
import ProfileDropdown from './ProfileDropdown';
import WalletDropdown from './WalletDropdown';
import CurrencyLanguageDropdown from './CurrencyLanguageDropdown';
import NFTDropdown from './NFTdropdown';
import NotificationDropdown from './NotificationDropdown';

export default function Navbar() {
    const { isAuthenticated } = useAuth();
    const [activeDropdown, setActiveDropdown] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
    const [isNftDropdownOpen, setIsNftDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className='flex items-center justify-between relative z-50 border-b bg-[#F6F6F6] border-[#D3D8DD] px-4 md:px-32 py-3'>
            {/* Logo and Brand */}
            <div className="flex items-center space-x-1">
                <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px]' />
                <span className='inter-semibold text-[16px]'>Flash Transfer</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                <div className="flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                    <NavLink to={`/send`} className={`hover:text-[#111] hover:dm-sans-bold`}>Send</NavLink>
                    <NavLink to={`/find-location`} className={`hover:text-[#111] hover:dm-sans-bold`}>Find location</NavLink>
                    <NavLink to={`/track-order`} className={`hover:text-[#111] hover:dm-sans-bold`}>Track a transfer</NavLink>
                    <NavLink to={`/help`} className={`hover:text-[#111] hover:dm-sans-bold`}>Help</NavLink>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2 rounded-full bg-white hover:bg-gray-100 "
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                    <div className="flex flex-col p-4">
                        <NavLink to={`/send`} className="py-2">Send</NavLink>
                        <NavLink to={`/find-location`} className="py-2">Find location</NavLink>
                        <NavLink to={`/track-order`} className="py-2">Track a transfer</NavLink>
                        <NavLink to={`/help`} className="py-2">Help</NavLink>
                    </div>
                </div>
            )}

            {/* Desktop Authentication Section */}
            {isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-3">
                    {/* Amount Display */}
                    <div className="flex items-center space-x-2">
                        <span className="text-green-600 font-medium">$</span>
                        <span className="text-[14px]">90000</span>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-3">
                        <div className='w-7 h-7 items-center flex justify-center cursor-pointer rounded-full bg-white relative' 
                            onClick={() => {
                                setActiveDropdown('nft');
                                setIsNftDropdownOpen(!isNftDropdownOpen);
                            }}
                        >
                            <img src={icons.nft} alt="" className="w-4 h-4" />
                            {activeDropdown === 'nft' && (
                                <NFTDropdown 
                                    isOpen={isNftDropdownOpen && activeDropdown === 'nft'}
                                    onClose={!isNftDropdownOpen}
                                />
                            )}
                        </div>

                        <div className='w-7 h-7 items-center relative cursor-pointer flex justify-center rounded-full bg-white'
                            onClick={() => {
                                setActiveDropdown('wallet');
                                setIsWalletDropdownOpen(!isWalletDropdownOpen);
                            }}
                        >
                            <img src={icons.wallet} alt="" className="w-4 h-4" />
                            {activeDropdown === 'wallet' && (
                                <WalletDropdown 
                                    isOpen={isWalletDropdownOpen && activeDropdown === 'wallet'} 
                                    onClose={!isWalletDropdownOpen} 
                                />
                            )}
                        </div>

                        <div className='w-7 h-7 items-center relative flex justify-center cursor-pointer rounded-full bg-white'
                            onClick={() => {
                                setActiveDropdown('notification');
                                setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
                            }}
                        >
                            <Bell className="w-4 h-4 text-gray-600" />
                            {activeDropdown === 'notification' && (
                                <NotificationDropdown 
                                    isOpen={isNotificationDropdownOpen && activeDropdown === 'notification'}
                                    onClose={!isNotificationDropdownOpen}
                                />
                            )}
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center relative rounded-full bg-white w-8 h-8 justify-center cursor-pointer"
                        onClick={() => {
                            setActiveDropdown('currency');
                            setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
                        }}
                    >
                        <img 
                            src={language.english}
                            alt="US Flag" 
                            className="w-4 h-4"
                        />
                        {activeDropdown === 'currency' && (
                            <CurrencyLanguageDropdown
                                isOpen={isCurrencyDropdownOpen && activeDropdown === 'currency'} 
                                onClose={!isCurrencyDropdownOpen} 
                            />
                        )}
                    </div>

                    {/* Profile */}
                    <div className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => {
                            setActiveDropdown('profile');
                            setIsDropdownOpen(!isDropdownOpen);
                        }}
                    >
                        <div className="p-1 rounded-full gap-2 bg-white relative flex z-50 text-[#D3D8DD] border-[#D3D8DD] items-center justify-center">
                            <img src={blogUser1Img} alt="" className='w-7 h-7 object-fill' />
                            <ChevronDown size={16} />
                            {activeDropdown === 'profile' && (
                                <ProfileDropdown 
                                    isOpen={isDropdownOpen && activeDropdown === 'profile'} 
                                    onClose={!isDropdownOpen} 
                                />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="hidden md:flex items-center space-x-1 text-[12px] dm-sans-medium">
                    <NavLink to={`/signin`} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
                    <NavLink to={`/signup`} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
                </div>
            )}
        </nav>
    );
}