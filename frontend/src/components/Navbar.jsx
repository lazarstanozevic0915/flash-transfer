import React from 'react'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
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
        <div className="flex items-center space-x-1  text-[12px] dm-sans-medium">
            <NavLink to={`/signin`} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
            <NavLink to={`/signup`} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
        </div>
    </nav>
  )
}
