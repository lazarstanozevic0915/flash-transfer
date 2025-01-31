import React from 'react'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Bell, HelpCircle, Settings } from 'lucide-react';

export default function Navbar() {
    const { isAuthenticated } = useAuth();
  return (
    <nav className='flex items-center justify-between relative z-20 border-b bg-[#F6F6F6] border-[#D3D8DD] px-32 py-3'>
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
            <div className="flex items-center space-x-4">
        {/* Amount Display */}
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-medium">$</span>
          <span className="text-[14px]">90000</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <HelpCircle className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img 
            src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" 
            alt="US Flag" 
            className="w-5 h-4"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm">JD</span>
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
