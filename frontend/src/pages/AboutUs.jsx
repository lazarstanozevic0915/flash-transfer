import React from 'react'

import heroBackground from '../assets/image/hero-background.png'

import ReactPlayer from 'react-player';

import fastLogo from '../assets/image/icons/customerSupport.svg'
import security from '../assets/image/icons/secureTransfer.svg'
import easyTransfer from '../assets/image/icons/employees.svg'

import bloombergLogo from '../assets/image/medias/bloomberg.svg'
import benzingaLogo from '../assets/image/medias/benzinga.svg'
import yahooLogo from '../assets/image/medias/yahoo.svg'
import digitalJournalLogo from '../assets/image/medias/digitalJournal.svg'

import TeamSection from '../components/TeamSection';

import Footer from '../components/Footer'
import { countryFlags } from '../assets/image';
import Navbar from '../components/Navbar';

export default function AboutUs() {

return (
    <div className='w-full dm-sans'>
        <div className="w-full h-screen bg-[#F6F6F6] rounded-b-[50px] relative" >
            <div className="absolute top-10 right-8 z-10">
                <img src={heroBackground} alt="" className=' h-[600px] w-[880px] object-fill' />
            </div>
            <Navbar />
            <main className='w-full h-[88%] px-32 py-6'>
                <div className="w-full h-full flex justify-between items-center relative z-20">
                    <div className="w-[500px] h-[400px] flex flex-col space-y-4">
                        <span className='text-[54px]/16 dm-sans-medium'>World first platform to convert directly crypto to cash</span>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/7'>Flash Transfer is the world’s first platform enabling direct crypto-to-cash conversion, making it easy to buy, sell, or exchange crypto for cash with secure, instant transactions.</p>
                    </div>
                    <div className="w-[480px] -mt-12 flex items-center h-full">
                    <div className="w-full h-[70%] rounded-4xl border-white shadow-2xl border-6 overflow-hidden">
                        <div className="relative w-full h-full rounded-4xl overflow-hidden">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=LWkE3vCDaWk"
                                width="100%"
                                height="100%"
                                controls
                                style={{ borderRadius: '30px' }}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="w-full bg-white pt-24 px-12 space-y-14" >
            <div className="w-full px-20 flex flex-col items-center">
                <div className='w-full flex flex-col items-center space-y-6'>
                    <span className='text-[36px] dm-sans-medium'>Why Choose Flash Transfer?</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'>With 24/7 support, secure transfers, and a team of 200+ experts, Flash Transfer ensures crypto</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'> transactions are simple, safe, and fully supported.</span>
                    </div>
                    <div className="grid grid-cols-3 w-full h-[300px] gap-8">
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={fastLogo} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                24/7 Customer Support
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Our dedicated support team is available around the clock to assist with any questions, ensuring a smooth and reliable experience.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={security} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                Secure Transfers
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>Enjoy peace of mind with robust security protocols that protect every transaction, making transfers safe and secure.</span>
                        </div>
                        <div className='w-full h-full flex flex-col items-center p-6 bg-[#F6F6F6] space-y-6 rounded-2xl'>
                            <div className='p-3 rounded-full bg-[#2475FF] flex items-center justify-center w-[90px] h-[90px]'>
                                <img src={easyTransfer} alt="" />
                            </div>
                            <span className='text-[#181F30] dm-sans-bold text-[18px]'>
                                200+ employees
                            </span>
                            <span className='text-[#6E757D] dm-sans-light text-[14px] text-center'>With a team of over 200 skilled professionals, we bring extensive knowledge and commitment to supporting our users worldwide.</span>
                        </div>
                    </div>
                </div>
            </div>
            <TeamSection />
            <div className="w-full px-20 flex flex-col items-center">
                <div className='w-full flex flex-col items-center space-y-3'>
                    <span className='text-[36px] dm-sans-medium'>Seen in the Media</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'>A short paragraph describing your team. You may want to describe</span>
                        <span className='text-[#6E757D] dm-sans-light text-[14px]'>  what they are responsible for</span>
                    </div>
                    <div className="grid grid-cols-4 w-full h-[100px] gap-4">
                        <div className='w-full h-full py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={bloombergLogo} alt="bloomberg logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={benzingaLogo} alt="benzinga logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={yahooLogo} alt="yahoo logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-md flex items-center justify-center'>
                            <img src={digitalJournalLogo} alt="digital journal logo" className='w-[8rem] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-20 py-16 flex flex-col items-center space-y-8 bg-white">
                <div className="w-full flex justify-between items-start">
                    <h2 className="text-[36px] dm-sans-medium">Visit our offices around the world</h2>
                    <p className="text-[#6E757D] dm-sans-light text-[14px] max-w-[200px]">
                        A short paragraph describing your team. You may want to describe what they are responsible for
                    </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 w-full">
                    {/* Dubai Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.UAEflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Dubai</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>

                    {/* Paris Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                        <img src={countryFlags.Franceflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Paris</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>

                    {/* Ivory Coast Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.IvoryCoastflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Ivory Coast</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>

                    {/* London Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.UKflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">London Soon ...</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>

                    {/* Singapore Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.Singaporflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Singapore Soon ...</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>

                    {/* Hong Kong Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.HongKongflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Hong Kong Soon ...</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#6E757D]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[14px] dm-sans-light">contact@flash-transfer.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}