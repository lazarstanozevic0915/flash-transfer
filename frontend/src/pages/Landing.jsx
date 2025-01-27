import React from 'react'

import heroBackground from '../assets/image/hero-background.png'

import logo from '../assets/image/logo.svg'

import youtubeIcon from '../assets/image/icons/youtube.svg'
import trustIcon from '../assets/image/icons/trustpilot.svg'
import swapIcon from '../assets/image/icons/swap.svg'

import usdtLogo from '../assets/image/icons/currency/usdt.svg'
import eurLogo from '../assets/image/icons/currency/eur.svg'

import coinbaseLogo from '../assets/image/partners/coinbase.svg'
import binanceLogo from '../assets/image/partners/binance.svg'
import microsoftLogo from '../assets/image/partners/microsoft.svg'
import orangeMoneyLogo from '../assets/image/partners/orangeMoney.svg'
import mtnLogo from '../assets/image/partners/mtn.svg'
import waveLogo from '../assets/image/partners/wave.svg'
import mooveMoneyLogo from '../assets/image/partners/mooveMoney.svg'
import walletConnectLogo from '../assets/image/partners/walletConnect.svg'
import blockmateLogo from '../assets/image/partners/blockmate.svg'
import julayaLogo from '../assets/image/partners/julaya.svg'

import { NavLink } from 'react-router-dom'
import CurrencySelect from '../components/CurrencySelect'

export default function Landing() {
  return (
    <div className='w-full '>
        <div className="w-full h-screen bg-[#F6F6F6] rounded-b-[50px] relative" >
            <div className="absolute bottom-0 right-0 z-10">
                <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
            </div>
            <nav className='flex items-center justify-between border-b border-[#D3D8DD] px-32 py-3'>
                <div className="flex space-x-8">
                    <div className="flex items-center space-x-1">
                        <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px]' />
                        <span className='inter-semibold text-[16px]'>Flash Transfer</span>
                    </div>
                    <div className="flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Send</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Find location</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Track a transfer</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Help</NavLink>
                    </div>
                </div>
                <div className="flex items-center space-x-1  text-[12px] dm-sans-medium">
                    <NavLink to={``} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
                    <NavLink to={``} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
                </div>
            </nav>
            <main className='w-full h-[88%] px-32 py-6'>
                <div className="w-full h-full flex justify-between items-center relative z-20">
                    <div className="w-[500px] h-[400px] flex flex-col space-y-4">
                        <span className='text-[54px]/16 dm-sans-medium'>Send, buy, or sell crypto globally with Flash Transfer</span>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/7'>Exchange your cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using your no-custodial wallet (Flash wallet, Metamask, Phantom ...) </p>
                        <div className="flex items-center space-x-4">
                            <NavLink to={``} className={` flex items-center dm-sans-medium text-[14px] px-12 py-2 rounded-md bg-[#222222] text-white space-x-2 `}>
                                <img src={youtubeIcon} alt="youtube icon" className='w-[26px] h-[26px] object-fill' />
                                <span>Tutorial</span>
                            </NavLink>
                            <NavLink to={``} className={` flex items-center dm-sans-semibold text-[14px] px-12 py-2 rounded-md bg-[#E7E7E7] space-x-2 `}>
                                <img src={trustIcon} alt="Trust Pilot icon" className='w-[26px] h-[26px] object-fill' />
                                <span>Trustpilot</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-[440px] h-full p-4 rounded-2xl shadow-2xl bg-white">
                        <div className="w-full h-full flex flex-col space-y-1">
                            <div className="w-full h-[48%] relative flex flex-col gap-2">
                                <div className="w-full h-[50%] rounded-2xl bg-[#EFF0F1] p-3">
                                    <div className="w-full h-[30%] flex items-center justify-between">
                                        <div>
                                            <CurrencySelect 
                                                selectedCurrency={{ code: 'USDT', logo: usdtLogo, label: 'USDT' }}
                                                onSelect={(currency) => {
                                                    // Handle currency selection
                                                    console.log('Selected currency:', currency);
                                                }}
                                            />
                                        </div>
                                        <span className='bg-white text-[10px] dm-sans-light text-[#181F30] px-3 py-1 rounded-lg'>Send</span>
                                    </div>
                                    <div className=" w-full h-[70%] flex items-center justify-center pb-2">
                                        <div className="flex flex-col items-center gap-1">
                                            <input type="text" className='p-2 outline-none dm-sans-medium text-[#181F30] text-[20px] w-32 text-center' placeholder='0.9382' />
                                            <span className='text-[11px] dm-sans-light text-[#181F30]'>Amount Send</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[50%] rounded-2xl bg-[#EFF0F1] p-3">
                                    <div className="w-full h-[30%] flex items-center justify-between">
                                        <div>
                                            <CurrencySelect 
                                                selectedCurrency={{ code: 'EUR', logo: eurLogo, label: 'EUR' }}
                                                onSelect={(currency) => {
                                                    // Handle currency selection
                                                    console.log('Selected currency:', currency);
                                                }}
                                            />
                                        </div>
                                        <span className='bg-white text-[10px] dm-sans-light text-[#181F30] px-3 py-1 rounded-lg '>Receive</span>
                                    </div>
                                    <div className=" w-full h-[70%] flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <input type="text" className='p-2 outline-none dm-sans-medium text-[#181F30] text-[20px] w-32 text-center' placeholder='0.9382' disabled />
                                            <span className='text-[11px] dm-sans-light text-[#181F30]'>Received Amount</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-10 h-10 rounded-full absolute top-[43%] left-[45%] bg-[#FFC40F] border-6 border-white flex items-center justify-center hover:cursor-pointer" title='swap'>
                                    <img src={swapIcon} alt="swap" className='h-[12px] w-[12px] object-center'  />
                                </button>
                            </div>
                            <div className="w-full h-[36%] flex flex-col">
                                <div className="flex w-full items-center text-[#000000] justify-center py-2 text-[12px] border-b border-[#D3D8DD]">
                                    <span className='dm-sans-light'>{`1 USDT = 1 eur`}</span>
                                </div>
                                <div className="flex flex-col w-full items-center text-[#000000] justify-center gap-1 py-3 text-[12px] border-b border-[#D3D8DD]">
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Exchange Rate</span>
                                        <span className='dm-sans-medium'>{`1 USDT = 1 eur`}</span>
                                    </div>
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Fee</span>
                                        <span className='dm-sans-medium'>{`+2.50 EUR`}</span>
                                    </div>
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Transfer Time</span>
                                        <span className='dm-sans-medium'>{`1 Min`}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-center text-[#000000] justify-center gap-1 py-2 text-[12px]">
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Total to Pay</span>
                                        <span className='dm-sans-medium'>{`102.50 EUR`}</span>
                                    </div>
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Recipient Gets</span>
                                        <span className='dm-sans-medium'>{`100.00 EUR`}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[16%] flex flex-col space-y-1">
                                <button className='h-[50%] text-[11px] rounded-lg bg-[#FFC000] dm-sans-medium'>Continue</button>
                                <button className='h-[50%] text-[11px] rounded-lg border border-[#D3D8DD] dm-sans-medium'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="w-full h-screen bg-white pt-24 px-12 space-y-14" >
            <div className="w-full px-20 flex flex-col items-center">
                <div className='w-full flex flex-col items-center space-y-6'>
                    <span className='text-[36px] dm-sans-medium'>Choose from our trusted partners</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'>We make sure your money is delivered quickly and easily</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'> Choose payment types from our network: cash collection points, mobile money and bank transfer.</span>
                    </div>
                    <div className="grid grid-cols-5 w-full h-[200px] gap-4 grid-rows-2">
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={coinbaseLogo} alt="coinbase logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={binanceLogo} alt="binance logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={microsoftLogo} alt="microsoft logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={orangeMoneyLogo} alt="orange money logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={mtnLogo} alt="mtn logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={waveLogo} alt="wave logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={mooveMoneyLogo} alt="moove money logo" className='w-[5rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={walletConnectLogo} alt="wallet connect logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={blockmateLogo} alt="block mate logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={julayaLogo} alt="julaya logo" className='w-[8rem] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[80vh] relative bg-[#F6F6F6] rounded-4xl">
                <div className="absolute bottom-2 right-32">
                    <img src={heroBackground} alt="" className='w-[700px]' />
                </div>
            </div>
        </div>
    </div>
  )
}
