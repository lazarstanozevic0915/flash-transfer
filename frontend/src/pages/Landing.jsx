import React, { useState } from 'react'

import heroBackground from '../assets/image/hero-background.png'

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

import fastLogo from '../assets/image/icons/fastTransactionLogo.png'
import security from '../assets/image/icons/security.png'
import easyTransfer from '../assets/image/icons/easyTransferLogo.png'
import fastBack from '../assets/image/icons/fastBack.png'

import usersLogo from '../assets/image/icons/users.svg'
import timerLogo from '../assets/image/icons/timer.svg'
import bookWrite from '../assets/image/icons/bookWrite.svg'
import bitcoin from '../assets/image/icons/bitcoin.svg'
import money from '../assets/image/icons/money.svg'
import apple from '../assets/image/icons/apple.svg'
import googlePlay from '../assets/image/icons/googlePlay.svg'
import phoneBack from '../assets/image/icons/phoneBack.svg'

import { NavLink } from 'react-router-dom'
import CurrencySelect from '../components/CurrencySelect'
import FAQSection from '../components/FAQSection'
import TestimonialsSection from '../components/TestimonialSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useAuth } from '../auth/AuthProvider'
import { walletIcons } from '../assets/image'

export default function Landing() {

    const { connectedWallet } = useAuth();
    const [fromCurrency, setFromCurrency] = useState({ code: 'USDT', logo: usdtLogo, label: 'USDT' });
    const [toCurrency, setToCurrency] = useState({ code: 'EUR', logo: eurLogo, label: 'EUR' });
    const [sendAmount, setSendAmount] = useState('');
    const [receiveAmount, setReceiveAmount] = useState('');

    const handleSwap = () => {
        // Swap currencies
        const tempCurrency = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(tempCurrency);

        // Swap amounts
        const tempAmount = sendAmount;
        setSendAmount(receiveAmount);
        setReceiveAmount(tempAmount);
    };
    
    const faqData = [
        {
            title: "How send crypto to Flash Transfer?",
            content: "Find answers to common inquiries and get the support you need in our Frequently Asked Questions section."
        },
        {
            title: "Where can the Flash Transfer service be used ?",
            content: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
        },
        {
            title: "In which/how many countries does Flash Transfer operate ?",
            content: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
        },
        {
            title: "How to convert your cryptocurrency to fiat ?",
            content: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
        },
        {
            title: "How to send the cryptocurrency so that the beneficiary receives it in cash ?",
            content: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
        },
        {
            title: "How much are the transaction fees ?",
            content: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
        }
    ];

  return (
    <div className='w-full dm-sans '>
        <div className="w-full h-screen  max-md:h-[200vh] max-md:w-screen bg-[#F6F6F6] rounded-b-[50px] relative" >
            <div className="absolute max-sm:hidden bottom-0 right-0 z-10">
                <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
            </div>
            <Navbar />
            <main className='w-full h-[88%] px-32 max-sm:px-2 py-6'>
                <div className="w-full h-full flex max-md:flex-col max-md:gap-5 justify-between items-center relative z-20">
                    <div className="w-[500px] max-sm:w-[300px] md:h-[400px] flex flex-col space-y-4">
                        <span className='text-[54px]/16 max-sm:text-[28px]/9 dm-sans-medium'>Send, buy, or sell crypto globally with Flash Transfer</span>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/7 max-sm:text-[12px]/6'>Exchange your cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using your no-custodial wallet (Flash wallet, Metamask, Phantom ...) </p>
                        <div className="flex items-center max-md:flex-col max-md:gap-4 justify-center space-x-4">
                            <NavLink to={``} className={` flex max-md:w-full max-md:justify-center max-md:p-2 items-center dm-sans-medium text-[14px] px-12 py-2 rounded-md bg-[#222222] text-white space-x-2 `}>
                                <img src={youtubeIcon} alt="youtube icon" className='w-[26px] h-[26px] object-fill' />
                                <span>Tutorial</span>
                            </NavLink>
                            <NavLink to={``} className={` flex max-md:w-full max-sm:-ml-4 max-md:justify-center max-md:p-2 items-center dm-sans-semibold text-[14px] px-12 py-2 rounded-md bg-[#E7E7E7] space-x-2 `}>
                                <img src={trustIcon} alt="Trust Pilot icon" className='w-[26px] h-[26px] object-fill' />
                                <span>Trustpilot</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-[440px] max-sm:w-[350px] h-full max-sm:h-[76%] max-sm:pb-0 p-4 rounded-2xl shadow-2xl bg-white">
                        <div className="w-full h-full flex flex-col space-y-1">
                            {
                                connectedWallet !== '' && connectedWallet !== null  && (
                                    <div className='h-[8%] border p-0.5 w-full mb-2 flex items-center justify-center gap-1 rounded-lg bg-[rgba(0,199,53,0.2)] border-[rgba(0,199,53,0.6)]'>
                                        { connectedWallet === 'Flash Wallet' && <img src={walletIcons.flashIcon} alt="" className='w-7 h-7 onject-fill' /> }
                                        { connectedWallet === 'Metamask' && <img src={walletIcons.metamaskIcon} alt="" className='w-5 h-5 mr-1 onject-fill' /> }
                                        { connectedWallet === 'Phantom' && <img src={walletIcons.phantomIcon} alt="" className='w-5 h-5 mr-1 onject-fill' /> }
                                        { connectedWallet === 'Ledger' && <img src={walletIcons.ledgerIcon} alt="" className='w-5 h-5 mr-1 onject-fill' /> }
                                        <span className='font-normal text-[#181F30] text-[13px]'>
                                            {`${connectedWallet} - Connected`}
                                        </span>
                                    </div>
                                )
                            }
                            <div className={`w-full ${connectedWallet !== '' ? 'h-[40%]' : 'h-[48%]'} relative flex flex-col gap-2`}>
                                <div className="w-full h-[50%] rounded-2xl bg-[#EFF0F1] p-3">
                                    <div className="w-full h-[30%] flex items-center justify-between">
                                        <div>
                                            <CurrencySelect 
                                                selectedCurrency={fromCurrency}
                                                onSelect={(currency) => setFromCurrency(currency)}
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
                                                selectedCurrency={toCurrency}
                                                onSelect={(currency) => setToCurrency(currency)}
                                            />
                                        </div>
                                        <span className='bg-white text-[10px] dm-sans-light text-[#181F30] px-3 py-1 rounded-lg '>Receive</span>
                                    </div>
                                    <div className=" w-full h-[70%] max-sm:h-[70%] flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <input type="text" className='p-2 outline-none dm-sans-medium text-[#181F30] text-[20px] w-32 text-center' placeholder='0.9382' disabled />
                                            <span className='text-[11px] dm-sans-light text-[#181F30]'>Received Amount</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-10 h-10 rounded-full absolute top-[43%] left-[45%] bg-[#FFC40F] border-6 border-white flex items-center justify-center hover:cursor-pointer" title='swap' onClick={handleSwap}>
                                    <img src={swapIcon} alt="swap" className='h-[12px] w-[12px] object-center'  />
                                </button>
                            </div>
                            <div className="w-full h-[36%] max-sm:h-[50%] flex flex-col">
                                <div className="flex w-full items-center text-[#000000] justify-center py-2 text-[12px] border-b border-[#D3D8DD]">
                                    <span className='dm-sans-light'>{`1 USDT = 1 EUR`}</span>
                                </div>
                                <div className="flex flex-col w-full items-center text-[#000000] justify-center gap-1 py-3 text-[12px] border-b border-[#D3D8DD]">
                                    <div className='flex w-full items justify-between'>
                                        <span className='text-[#6A6A6A] dm-sans-light'>Exchange Rate</span>
                                        <span className='dm-sans-medium'>{`1 USDT = 1 EUR`}</span>
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
                            <div className="w-full h-[16%] flex flex-col max-sm:-mt-50 max-sm:space-y-3 space-y-1">
                                <button className='h-[50%] text-[11px] rounded-lg bg-[#FFC000] dm-sans-medium'>Continue</button>
                                <button className='h-[50%] text-[11px] rounded-lg border border-[#D3D8DD] dm-sans-medium'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="w-full bg-white pt-24 max-sm:pt-12 px-12 max-sm:px-4 space-y-14" >
            <div className="w-full px-20 max-sm:px-4  flex flex-col items-center">
                <div className='w-full flex flex-col items-center space-y-6'>
                    <span className='text-[36px] text-[#181F30] max-sm:text-[20px]/6 font-semibold max-sm:text-center'>Choose from our trusted partners</span>
                    <div className='flex flex-col items-center max-md:items-start space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] max-md:text-left'>We make sure your money is delivered quickly and easily</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'> Choose payment types from our network: cash collection points, mobile money and bank transfer.</span>
                    </div>
                    <div className="grid grid-cols-5 max-sm:grid-cols-2 max-md:grid-cols-3 max-md:h-full max-sm:h-full w-full h-[200px] gap-4 grid-rows-2">
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
            <div className="w-full h-[80vh] max-md:h-full px-20 max-md:px-4 max-md:py-5 relative flex max-sm:grid items-center bg-[#F6F6F6] rounded-4xl">
                <div className="absolute bottom-2 right-32">
                    <img src={heroBackground} alt="" className='w-[700px]' />
                </div>
                <div className='w-full h-[70%] max-md:h-full relative z-20 flex max-md:grid max-md:gap-4 items-center space-x-6'>
                    <div className='flex flex-col space-y-4 w-[30%] max-md:w-full'>
                        <span className='bg-white text-[10px] dm-sans-light text-[#181F30] w-36 px-3 py-1 rounded-lg'>Fast, Secure Exchange</span>
                        <span className='text-[36px]/12 max-md:hidden dm-sans-medium'>Global Fiat and Crypto  Exchange at Your Fingertips</span>
                        <span className='md:hidden text-[20px] dm-sans-medium'>Global Fiat and Crypto <br />  Exchange at Your Fingertips</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] max-md:text-[12px]'>
                        Exchange your favorite cryptocurrencies and fiat currencies seamlessly with fast transactions, low fees, and 24/7 support.
                        </span>
                    </div>
                    <div className='w-[60%] max-md:w-full h-full flex max-md:grid space-x-6'>
                        <div className='w-[46%] max-md:w-full h-full flex space-y-6 flex-col items-end'>
                            <div className='w-[86%] max-md:w-full max-md:h-full h-[60%] rounded-2xl bg-white p-4 flex flex-col justify-between'>
                                <span className='text-[36px]/12 dm-sans-medium'>20</span>
                                <div className='space-y-2 grid pb-6'>
                                    <span className='text-[#181F30] max-sm:hidden dm-sans-bold text-[10px]'>
                                        Popular cryptocurrencies available !
                                    </span>
                                    <span className='text-[#181F30] md:hidden dm-sans-bold text-[12px]'>
                                        Popular cryptocurrencies <br /> available !
                                    </span>
                                    <span className='text-[#6E757D] dm-sans-medium text-[10px]'>
                                        You can exchange your cryptocurrencies: BTC, ETH, FLASH, USDC, USDT, DAI, BNB, POL, SOL, AVAX, CRO, SUI and more.
                                    </span>
                                </div>
                            </div>
                            <div className='w-full h-[40%] max-md:h-full rounded-2xl bg-white p-4 flex flex-col max-md:grid max-md:space-y-6 justify-between'>
                                <span className='text-[36px]/12 dm-sans-medium'>200+</span>
                                <div className='space-y-2 grid'>
                                    <span className='text-[#181F30] dm-sans-bold text-[10px]'>
                                        Fiat Currencies Support
                                    </span>
                                    <span className='text-[#6E757D] dm-sans-medium text-[10px]'>
                                        We support all Fiat currencies in the world!
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] max-md:w-full h-full flex items-center'>
                            <div className='h-[50%] w-[90%] max-md:w-full max-md:h-full mt-6 rounded-2xl bg-white p-4 flex flex-col justify-between'>
                                <span className='text-[36px]/12 max-md:text-[36px]/6 dm-sans-medium'>5k</span>
                                <div className='space-y-2 grid pb-6'>
                                    <span className='text-[#181F30] dm-sans-bold text-[10px]'>
                                        Active Users
                                    </span>
                                    <span className='text-[#6E757D] dm-sans-medium text-[10px]'>
                                        Our users are satisfied with the speed, low fees and support !
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-20 max-md:px-4 flex flex-col items-center">
                <div className='w-full flex flex-col items-center max-sm:items-center space-y-6'>
                    <span className='text-[36px] text-[#181F30] max-sm:text-[22px]/6 font-semibold max-sm:text-center'>Why Choose Us</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Send & Receive money to your loved ones in minutes with great rates and low fees.</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'> Over 40 countries and +36 currencies supported.</span>
                    </div>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 w-full h-[300px] max-md:h-full gap-8">
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={fastLogo} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Fast Transaction
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>The transaction is instant with cryptocurrency in seconds.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={security} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Security
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>The blockchain is tamper-proof,<br />transparent and secure.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={easyTransfer} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Easy Transfer
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Send money and easily convert your cryptocurrency to cash and vice versa.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20 max-md:px-2 w-full'>
                <div className="w-full h-full flex max-md:grid gap-20 max-md:gap-12 items-center">
                    <div className='bg-[#F6F6F6] rounded-4xl w-[600px] max-sm:w-[330px] h-[500px] max-sm:h-[350px]'>
                        <img src={fastBack} alt="" className='w-full h-full' />
                    </div>
                    <div className='flex flex-col space-y-4'>
                            <span className='text-[#181F30] text-[36px] max-sm:text-[22px]/7 font-semibold max-sm:text-left'>
                                Fast, Secure <br className='max-sm:hidden' />
                                Money <br className='hidden max-sm:flex' /> Transfers
                            </span>
                            <span className='text-[#6E757D] dm-sans-light w-[280px] text-[14px]'>Exchange your favorite cryptocurrencies and fiat currencies seamlessly with fast transactions, low fees, and 24/7 support.</span>
                            <div className='flex flex-col gap-8'>
                                <div className="flex gap-4 w-full">
                                    <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[60px] h-[60px]'>
                                        <img src={usersLogo} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-[#181F30] dm-sans-medium text-[14px]'>
                                            100% Decentralized
                                        </span>
                                        <span className='text-[#6E757D] dm-sans-light text-[12px] max-sm:w-[250px] w-[280px] text-left'>Keep control of your private keys, send your crypto, or connect your wallet via WalletConnect.</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[60px] h-[60px]'>
                                        <img src={timerLogo} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-[#181F30] dm-sans-medium text-[14px]'>
                                            Convert Fiat & Crypto
                                        </span>
                                        <span className='text-[#6E757D] dm-sans-light text-[12px] max-sm:w-[250px] w-[280px] text-left'>Convert between fiat and crypto seamlessly with +36 currencies available.</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[80vh] max-md:h-full px-20 max-md:px-4 max-md:py-4 relative flex items-center max-md:items-start bg-[#F6F6F6] rounded-4xl">
                <div className='w-full flex flex-col items-center space-y-6 max-md:space-y-4'>
                    <span className='text-[36px] max-sm:text-[22px] dm-sans-medium'>Just few steps to start</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'>Its easiest as you think.Follow 3 easiest step</span>
                    </div>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 w-full h-[300px] max-md:h-full gap-8">
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#FFFFFF] space-y-6 rounded-2xl  max-md:space-y-3'>
                            <div className='p-3 rounded-full bg-[rgba(36,117,255,0.1)] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={bookWrite} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Register for free
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#FFFFFF] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[rgba(36,117,255,0.1)] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={bitcoin} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Send your crypto
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#FFFFFF] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[rgba(36,117,255,0.1)] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={money} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Go withdraw your cash
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20 max-md:px-3 w-full'>
                <div className="w-full h-full flex max-md:flex-col-reverse max-md:gap-4 justify-between items-center">
                    <div className='flex flex-col max-md:w-full space-y-4'>
                            <span className='text-[#181F30] font-semibold text-[36px]/12 max-sm:text-[24px]/8'>
                                 Fastest & Most Secure <br className='max-sm:hidden' /> Way to Send Crypto to <br className='max-sm:hidden' />Fiat Globally
                            </span>
                            <span className='text-[#6E757D] dm-sans-light w-[280px] max-md:w-full text-[14px]'>Send crypto to fiat globally with unmatched speed, security, and low fees.</span>
                            <div className='flex flex-col gap-8'>
                                <div className="flex max-md:grid max-md:gap-3 items-center max-md:items-start space-x-4">
                                    <NavLink to={``} className={` w-full flex max-md:py-3 items-center dm-sans-medium text-[14px] justify-center  py-2 rounded-md bg-[#222222] text-white space-x-2 `}>
                                        <img src={apple} alt="apple icon" className='w-[24px] h-[24px] object-fill' />
                                        <span>Apple Store</span>
                                    </NavLink>
                                    <NavLink to={``} className={` w-full flex max-md:py-3 items-center justify-center dm-sans-medium text-[14px] py-2 rounded-md bg-[#222222] text-white space-x-2 `}>
                                        <img src={googlePlay} alt="google play icon" className='w-[24px] h-[24px] object-fill' />
                                        <span>Play Store</span>
                                    </NavLink>
                                </div>
                            </div>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-4xl pt-20'>
                        <img src={phoneBack} alt="" className='w-[600px] h-[500px]' />
                    </div>
                </div>
            </div>
            <div className="w-full px-20 max-md:px-3 flex flex-col items-center">
                <div className='w-full flex flex-col items-center max-sm:items-center space-y-4'>
                    <span className='font-semibold text-[36px]/12 max-sm:text-[24px]/8 max-sm:hidden'>Frequently asked questions</span>
                    <span className='font-semibold text-[36px]/12 max-sm:text-[24px]/8 hidden max-sm:flex'>Just few steps to start</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] max-sm:hidden'>Find answers to common inquiries and get the support you need in our</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] max-sm:hidden'>Frequently Asked Questions section.</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px] hidden max-sm:flex'>Its easiest as you think.Follow 3 easiest step</span>
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-x-6 gap-y-4">
                        {
                            faqData.map(faq => (
                                <div key={faq.title}>
                                    <FAQSection title={faq.title} content={faq.content} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <TestimonialsSection />
        </div>
        <Footer />
    </div>
  )
}
