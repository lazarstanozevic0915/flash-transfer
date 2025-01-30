import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroBackground from '../assets/image/hero-background.png';
import { icons } from '../assets/image';
import TransactionTable from '../components/TransactionTable';

export default function HistoryPage() {
  return (
    <div>
        <Navbar /> 
        <div className="w-full min-h-screen dm-sans">
            <div className="w-full rounded-b-4xl px-32 py-16 bg-[#F6F6F6] relative">
                <div className="absolute top-2 -left-40 z-10">
                    <img
                        src={heroBackground}
                        alt=""
                        className="h-[270px] w-[400px] object-fill"
                    />
                </div>
                <div className="space-y-6 relative z-20">
                    <div className='flex items-center w-full justify-between'>
                        <h1 className="text-[44px] leading-tight dm-sans-medium">
                            History
                        </h1>
                        <button className='px-8 py-2 rounded-md bg-[#2475FF] text-white text-[14px]'>Start New Transfer</button>
                    </div>
                    <div className="w-full h-[1px] bg-[#D3D8DD]"></div>
                    <div className="flex gap-4">
                        <div className="relative w-full">
                            <input type="text" className='w-full border border-[#D3D8DD] text-[14px] bg-white rounded-lg p-2.5 pl-12 ' placeholder='Search' />
                            <div className="absolute left-3 bottom-3">
                                <img src={icons.search} alt="" />
                            </div>
                        </div>
                        <button className='px-8 py-2 rounded-md bg-white text-[#6E757D] font-semibold text-[14px] flex items-center justify-center gap-2 border border-[#D3D8DD]'>
                            <img src={icons.filter} alt="" />
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-32 py-20 w-full">
                <TransactionTable />
            </div>
        </div>
        <Footer />
    </div>
  )
}
