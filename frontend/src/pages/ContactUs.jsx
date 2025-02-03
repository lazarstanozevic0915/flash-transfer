import React from 'react'
import heroBackground from '../assets/image/hero-background.png'
import contactBack from '../assets/image/contactBack.png'

import Footer from '../components/Footer'
import { countryFlags, icons, socialIcons } from '../assets/image';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className='w-full dm-sans'>
        <div className="w-full h-screen max-lg:h-full bg-[#F6F6F6] rounded-b-[50px] relative" >
            <div className="absolute top-10 right-8 z-10">
                <img src={heroBackground} alt="" className=' h-[600px]  w-[880px] max-sm:w-[320px] object-fill' />
            </div>
            <Navbar /> 
            <main className='w-full h-[88%] px-32 max-sm:pt-12 max-sm:px-4 max-lg:px-20 py-6'>
                <div className="w-full h-full flex max-lg:grid max-lg:gap-4 justify-between items-center relative z-20">
                    <div className="w-[500px] max-sm:w-[320px] max-lg:w-full h-[400px] flex flex-col space-y-6 max-sm:space-y-4">
                        <span className='text-[54px]/16 max-sm:text-[34px]/10 dm-sans-medium'>Contact Us</span>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/6 max-sm:hidden'>Get in touch with us for any questions, support, or feedback.<br /> Our team is ready to assist you every step of the way!</p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/6 md:hidden'>Get in touch with us for any questions, support, or feedback. Our team is ready to assist you every step of the way!</p>
                        <div className='flex flex-col space-y-2 max-sm:mt-6 max-sm:space-y-5'>
                            <div className="flex space-x-3 items-center">
                                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
                                    <img src={icons.locationPin} alt="" />
                                </div>
                                <span className='text-[#6E757D] dm-sans-light text-[14px] max-sm:hidden'>742 Evergreen Terrace Springfield, OR 12345</span>
                                <span className='text-[#6E757D] dm-sans-light text-[14px] md:hidden'>742 Evergreen Terrace <br /> Springfield, OR 12345</span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
                                    <img src={icons.phone} alt="" />
                                </div>
                                <span className='text-[#6E757D] dm-sans-light text-[14px]'>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
                                    <img src={icons.email} alt="" />
                                </div>
                                <span className='text-[#6E757D] dm-sans-light text-[14px]'>support@example.com</span>
                            </div>
                        </div>
                        <p className='text-[#6E757D] dm-sans-light text-[14px]/6'>Looking for careers? <NavLink to={``} className='text-[#2475FF]'>View all job openings.</NavLink></p>
                    </div>
                    <div className="w-[480px] max-sm:w-[340px] flex items-center h-full">
                        <div className="w-[440px] h-full p-4 rounded-2xl shadow-2xl bg-white">
                            <div className="w-full h-full flex flex-col space-y-1">
                                <span className='text-[26px] dm-sans-medium'>Get in Touch</span>
                                <span className='text-[#6E757D] dm-sans-light text-[11px]'>You can reach us anytine</span>
                                <form action="" className='w-full h-full py-1 flex flex-col space-y-2'>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="name" className='text-[#374151] dm-sans-semibold text-[11px]'>
                                            Full name
                                        </label>
                                        <input type="text" id='name' className='rounded-lg border border-[#D3D8DD] p-3 outline-none text-[#6E757D] dm-sans-light text-[11px]' placeholder='Enter your name' />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="email" className='text-[#374151] dm-sans-semibold text-[11px]'>
                                            Email address
                                        </label>
                                        <input type="text" id='email' className='rounded-lg border border-[#D3D8DD] p-3 outline-none text-[#6E757D] dm-sans-light text-[11px]' placeholder='Enter your email' />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="phone" className='text-[#374151] dm-sans-semibold text-[11px]'>
                                            Phone number
                                        </label>
                                        <input type="text" id='phone' className='rounded-lg border border-[#D3D8DD] p-3 outline-none text-[#6E757D] dm-sans-light text-[11px]' placeholder='Enter your phone' />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="object" className='text-[#374151] dm-sans-semibold text-[11px]'>
                                            Object
                                        </label>
                                        <input type="text" id='object' className='rounded-lg border border-[#D3D8DD] p-3 outline-none text-[#6E757D] dm-sans-light text-[11px]' placeholder='Object' />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="message" className='text-[#374151] dm-sans-semibold text-[11px]'>
                                            Message
                                        </label>
                                        <textarea id='message' className='rounded-lg min-h-[60px] max-h-[60px] border border-[#D3D8DD] p-2 outline-none text-[#6E757D] dm-sans-light text-[11px]' placeholder='Write your message' />
                                    </div>
                                    <button className='p-3 text-[11px] rounded-lg bg-[#FFC000] dm-sans-medium'>Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="w-full bg-white pt-24 px-12 max-lg:px-3 space-y-14 max-sm:space-y-6" >
            <div className="w-full px-20 max-lg:px-3 flex flex-col items-center">
                <div className='w-full flex flex-col items-center space-y-3'>
                    <span className='text-[36px] dm-sans-medium'>Visit us</span>
                    <div className='flex flex-col items-center space-y-1'>
                        <span className='text-[#6E757D] dm-sans-light text-center text-[14px] max-sm:text-[15.5px] '>Home is behind, the world ahead and there are many paths to tread <br className='max-sm:hidden' /> through shadows to the edge.</span>
                    </div>
                    <div className="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-1 w-full h-[80px] max-lg:h-full gap-4">
                        <div className='w-full h-full max-sm:h-[100px] py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center'>
                            <img src={socialIcons.youtubeIcon} alt="youtube logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full max-sm:h-[100px] py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center'>
                            <img src={socialIcons.linkedInIcon} alt="linkedIn logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full max-sm:h-[100px] py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center'>
                            <img src={socialIcons.instagramIcon} alt="instagram logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full max-sm:h-[100px] py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center'>
                            <img src={socialIcons.twitterIcon} alt="twitter logo" className='w-[8rem] object-cover' />
                        </div>
                        <div className='w-full h-full max-sm:h-[100px] py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center'>
                            <img src={socialIcons.facebookIcon} alt="facebook logo" className='w-[8rem] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-20 max-lg:px-3 max-sm:h-[200px] flex flex-col items-center">
                <img src={contactBack} alt="" className='w-full h-full' />
            </div>
            <div className="w-full px-20 max-lg:px-3 py-16 max-sm:py-4 flex flex-col items-center space-y-8 bg-white">
                <div className="w-full flex max-sm:flex-col justify-between items-start">
                    <h2 className="text-[36px] dm-sans-medium max-sm:text-[24px] ">Visit our offices around <br className='max-sm:hidden' /> the world</h2>
                    <p className="text-[#6E757D] dm-sans-light text-[14px] max-w-[200px] max-sm:max-w-full ">
                        A short paragraph describing your team. You may want to describe what they are responsible for
                    </p>
                    
                </div>
                
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 max-sm:gap-3 w-full">
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

                    {/* Doha Office */}
                    <div className="bg-[#F6F6F6] rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={countryFlags.dohaflag} alt="" className='w-7 h-7 object-contain' />
                            <span className="text-[18px] dm-sans-medium">Doha Soon...</span>
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
