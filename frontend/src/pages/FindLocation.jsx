import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { icons, socialIcons } from '../assets/image';
import contactBack from '../assets/image/contactBack.png';

const FindLocation = () => {
  const [sendMode, setSendMode] = useState(true);

  return (
    <div className="min-h-screen dm-sans flex flex-col">
      <Navbar />
      <div className="w-full min-h-screen relative flex flex-col items-center dm-sans">
        <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
          <div className="absolute top-2 -right-20 z-10">
            <img
              src={heroBackground}
              alt=""
              className="h-[300px] w-[440px] object-fill"
            />
          </div>
          <div className="absolute top-2 -left-40 z-10">
            <img
              src={heroBackground}
              alt=""
              className="h-[300px] w-[440px] object-fill"
            />
          </div>
        </div>
        <div className='flex flex-col items-center'>
            <div className="w-[600px] space-y-6 relative z-20 pt-16">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-[44px] leading-tight dm-sans-medium">
                Find locations
                </h1>
                <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                Home is behind, the world ahead and there are many paths to tread through shadows to the edge.
                </p>
            </div>

            <div className="bg-white rounded-2xl relative z-20 shadow-md p-6 space-y-6">
                <div className="bg-red-50 rounded-md p-3 text-red-600 text-sm flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-xs">!</span>
                To continue, please enter the address.
                </div>

                <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                    <label className="text-sm text-gray-600 mb-1 block">Send From</label>
                    <div className="relative">
                        <select className="w-full p-3 border border-gray-200 rounded-md appearance-none bg-white pr-10">
                        <option>USA</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="flex-1">
                    <label className="text-sm text-gray-600 mb-1 block">Enter ZIP/Postal Code</label>
                    <input
                        type="text"
                        placeholder="Address/State or Zip"
                        className="w-full p-3 border border-gray-200 rounded-md"
                    />
                    </div>
                </div>
                
                <div className="flex w-full justify-end">
                    <div className="flex items-center gap-2 text-blue-600 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Use Current Location
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-medium mb-3">What are you trying to do?</h2>
                        <div className="rounded-md shadow-sm p-1 h-[50px] flex w-full bg-[#F6F6F6]">
                            <button
                            className={`flex items-center gap-1 w-[50%] justify-center text-[14px] font-light text-[#6E757D] ${
                                sendMode && 'font-medium bg-[#2475FF] text-white rounded-md shadow-md'
                            }`}
                            onClick={() => setSendMode(true)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send
                            </button>
                            <button
                            className={`flex items-center gap-1 w-[50%] justify-center text-[14px] font-light text-[#6E757D] ${
                                !sendMode && 'font-medium bg-[#2475FF] text-white rounded-md shadow-md'
                            }`}
                            onClick={() => setSendMode(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                            Receive
                            </button>
                        </div>
                </div>

                    <button className="p-3 w-full font-semibold bg-[#FFC000] text-[#181F30] text-[13px] rounded-md shadow-md">
                        Continue
                    </button>
                </div>
            </div>
            </div>

            <div className="w-full bg-white pt-24 pb-24 px-12 space-y-14 relative z-20">
            <div className="w-full px-20 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-3">
                <span className="text-[36px] dm-sans-medium">Visit us</span>
                <div className="flex flex-col items-center space-y-1">
                    <span className="text-[#6E757D] dm-sans-light text-center text-[14px] leading-6">
                    Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                    </span>
                </div>
                <div className="grid grid-cols-5 w-full h-[80px] gap-4">
                    {Object.entries(socialIcons).map(([key, icon]) => (
                    <div
                        key={key}
                        className="w-full h-full py-3 bg-[#F6F6F6] border border-[#D3D8DD] rounded-3xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <img src={icon} alt={`${key} logo`} className="w-[8rem] object-cover" />
                    </div>
                    ))}
                </div>
                </div>
            </div>
            
            <div className="w-full px-20 flex flex-col items-center">
                <img src={contactBack} alt="" className="w-full h-full rounded-2xl" />
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindLocation;