import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Bell, ChevronDown, LogOut, Menu, X } from 'lucide-react'
import { blogUser1Img, currency, icons, language } from '../assets/image'
import logo from '../assets/image/logo.svg'
import ProfileDropdown from './ProfileDropdown'
import WalletDropdown from './WalletDropdown'
import CurrencyLanguageDropdown from './CurrencyLanguageDropdown'
import NFTDropdown from './NFTdropdown'
import NotificationDropdown from './NotificationDropdown'
import WalletConnect from './WalletConnect';
import WalletConnectDropdown from './WalletConnectDropdown';

export default function Navbar() {
    const { isAuthenticated, connectedWallet } = useAuth()
    const [activeDropdown, setActiveDropdown] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false)
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false)
    const [isNftDropdownOpen, setIsNftDropdownOpen] = useState(false)
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const mobileMenuLinks = [
        { to: '/send', label: 'Send' },
        { to: '/find-location', label: 'Find location' },
        { to: '/track-order', label: 'Track a transfer' },
        { to: '/help', label: 'Help' }
    ]

    const { logout } = useAuth();

    return (
        <nav className='relative z-50 border-b bg-[#F6F6F6] border-[#D3D8DD]'>
            <div className="px-4 md:px-32 py-3">
                {/* Desktop and Mobile Header */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                        {/* Logo */}
                        <NavLink to={`/`} className="flex items-center space-x-1">
                            <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px] max-sm:h-[48px]' />
                            <span className='inter-semibold text-[16px] max-sm:hidden'>Flash Transfer</span>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                            {mobileMenuLinks.map(link => (
                                <NavLink key={link.to} to={link.to} className="hover:text-[#111] hover:dm-sans-bold">
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>  

                    {/* Desktop Auth/Profile Section */}
                    <div className="hidden md:flex">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-3">
                                {/* Amount Display */}
                                <div className="flex items-center space-x-2 border-[#EBECED] bg-[rgba(255,255,255,0.8)] border p-1.5 pr-6 rounded-3xl">
                                    <div className="flex gap-1 items-center text-[#6E757D]">
                                        <img src={currency.usdt} alt="" className='w-5 h-5 object-fill' />
                                        <ChevronDown size={12} />
                                    </div>
                                    <span className="text-[#6E757D] opacity-60 font-light">|</span>
                                    <span className="text-[13px] font-light text-[#6E757D]">$100.00</span>
                                </div>

                                {/* Action Icons */}
                                <div className="flex items-center space-x-3">
                                    {/* NFT Icon */}
                                    <div className='relative w-7 h-7 items-center flex justify-center cursor-pointer rounded-full bg-white'
                                        onClick={() => {
                                            setActiveDropdown('nft')
                                            setIsNftDropdownOpen(!isNftDropdownOpen)
                                        }}>
                                        <img src={icons.nft} alt="" className="w-4 h-4" />
                                        {activeDropdown === 'nft' && (
                                            <NFTDropdown 
                                                isOpen={isNftDropdownOpen && activeDropdown === 'nft'}
                                                onClose={!isNftDropdownOpen}
                                            />
                                        )}
                                    </div>

                                    {/* Wallet Icon */}
                                    <div className="relative">
                                        <div className='w-7 h-7 items-center flex justify-center cursor-pointer rounded-full bg-white'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveDropdown('wallet');
                                                setIsWalletDropdownOpen(!isWalletDropdownOpen);
                                            }}>
                                            <img src={icons.wallet} alt="" className="w-4 h-4" />
                                        </div>
                                        <div>
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
                                                        onClose={activeDropdown !== 'wallet'} 
                                                        />
                                                    </div>
                                            )}
                                        </div>

                                    </div>

                                    {/* Notification Bell */}
                                    <div className='relative w-7 h-7 items-center flex justify-center cursor-pointer rounded-full bg-white'
                                        onClick={() => {
                                            setActiveDropdown('notification')
                                            setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
                                        }}>
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
                                <div className="relative w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-white"
                                    onClick={() => {
                                        setActiveDropdown('currency')
                                        setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                                    }}>
                                    <img src={language.english} alt="US Flag" className="w-4 h-4" />
                                    {activeDropdown === 'currency' && (
                                        <CurrencyLanguageDropdown
                                            isOpen={isCurrencyDropdownOpen && activeDropdown === 'currency'}
                                            onClose={!isCurrencyDropdownOpen}
                                        />
                                    )}
                                </div>

                                {/* Profile */}
                                <div className="relative flex items-center space-x-2 cursor-pointer"
                                    onClick={() => {
                                        setActiveDropdown('profile')
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }}>
                                    <div className="p-1 rounded-full gap-2 bg-white flex text-[#D3D8DD] border-[#D3D8DD] items-center justify-center">
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
                            <div className="flex items-center space-x-1 text-[12px] dm-sans-medium">
                                <NavLink to="/signin" className="py-4 px-6 hover:scale-105">Login</NavLink>
                                <NavLink to="/signup" className="py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105">Sign up</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setIsCurrencyDropdownOpen(false);
                            setIsDropdownOpen(false);
                            setIsWalletDropdownOpen(false);
                            setIsNftDropdownOpen(false);
                            setIsNotificationDropdownOpen(false);
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-10 w-10 rounded-full bg-white p-2" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-4 py-3 space-y-4">
                        {/* Mobile Navigation Links */}
                        {mobileMenuLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="block py-2 text-base text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        {/* Mobile Auth Buttons */}
                        {!isAuthenticated && (
                            <div className="pt-4 border-t border-gray-200">
                                <NavLink
                                    to="/signin"
                                    className="block w-full px-4 py-2 text-center text-base font-medium text-gray-700 hover:bg-gray-50 mb-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    className="block w-full px-4 py-2 text-center text-base font-medium bg-[#FFC000] rounded-xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign up
                                </NavLink>
                            </div>
                        )}

                        {/* Mobile User Menu Items (when authenticated) */}
                        {isAuthenticated && (
                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex items-center space-x-2 px-4 py-2" 
                                    onClick={() => {
                                        setActiveDropdown('profile')
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }}
                                >
                                    <img src={blogUser1Img} alt="" className="w-8 h-8 rounded-full" />
                                    <span className="text-sm font-medium text-gray-700">Profile</span>
                                    {activeDropdown === 'profile' && (
                                            <ProfileDropdown 
                                                isOpen={isDropdownOpen && activeDropdown  === 'profile'}
                                                onClose={!isDropdownOpen}
                                            />
                                        )}
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 px-4 py-2"
                                         onClick={() => {
                                            setActiveDropdown('currency')
                                            setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                                        }}
                                    >
                                    <img src={language.english} alt="" className="w-6 h-6 rounded-full" />
                                    <span className="text-sm font-medium text-gray-700">Language</span>
                                    {activeDropdown === 'currency' && (
                                        <CurrencyLanguageDropdown
                                            isOpen={isCurrencyDropdownOpen && activeDropdown === 'currency'}
                                            onClose={!isCurrencyDropdownOpen}
                                        />
                                    )}
                                    </div>
                            
                                </div>
                                <div className="px-4 py-2 space-y-1">
                                    <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveDropdown('wallet');
                                            setIsWalletDropdownOpen(!isWalletDropdownOpen);
                                        }}
                                    >
                                        <img src={icons.wallet} alt="" className="w-4 h-4" />
                                        <span>Wallet</span>
                                        <div>
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
                                                        onClose={activeDropdown !== 'wallet'} 
                                                        />
                                                    </div>
                                            )}
                                        </div>

                                    </button>
                                    <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
                                        onClick={() => {
                                            setActiveDropdown('nft')
                                            setIsNftDropdownOpen(!isNftDropdownOpen)
                                        }}
                                    >
                                        <img src={icons.nft} alt="" className="w-4 h-4" />
                                        <span>NFTs</span>
                                        {activeDropdown === 'nft' && (
                                            <NFTDropdown 
                                                isOpen={isNftDropdownOpen && activeDropdown === 'nft'}
                                                onClose={!isNftDropdownOpen}
                                            />
                                        )}
                                    </button>
                                    <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
                                        onClick={() => {
                                            setActiveDropdown('notification')
                                            setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
                                        }}
                                    >
                                        <Bell className="w-4 h-4" />
                                        <span>Notifications</span>
                                        {activeDropdown === 'notification' && (
                                            <NotificationDropdown 
                                                isOpen={isNotificationDropdownOpen && activeDropdown === 'notification'}
                                                onClose={!isNotificationDropdownOpen}
                                            />
                                        )}
                                    </button>
                                    <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
                                        onClick={() => logout()}
                                    >
                                    <LogOut className="w-4 h-4" />
                                        <span>Log out</span>
                                        
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}