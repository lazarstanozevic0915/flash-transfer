import React from 'react';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import user from "../assets/image/beneficiary.svg"
import country from "../assets/image/icons/UM.svg"
import search from "../assets/image/icons/search.svg"
import addben from "../assets/image/icons/Black.svg"
import Navbar from '../components/Navbar';

export default function Beneficiary() {
    const beneficiaries = Array(12).fill({
        name: 'Theresa Webb',
        country: 'USA',
    });

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className=" mx-auto px-0">
                    <div className="flex flex-col mb-28 relative bg-gray-100 px-30 py-24 rounded-b-2xl">
                        <div className="absolute -bottom-10 -left-100 z-10">
                             <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
                        </div>
                        <div className='flex justify-between items-center mb-12'>
                        <div className="text-left">
                            <h1 className="text-5xl font-bold mb-6">Beneficiary</h1>
                            <p className="text-gray-600 text-lg">
                                Find the full list of your beneficiaries here. You can add a new or delete a beneficiary.
                            </p>
                        </div>
                        <button className="px-6 py-2.5 bg-[#0066FF] text-white rounded-lg flex items-center gap-2 text-lg">
                            <img src={addben} alt="user" className='object-contain' />
                            Add new beneficiary
                        </button>
                        </div>
                        <div className="relative mb-12">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-12 py-3.5 border border-gray-200 rounded-lg bg-white"
                        />
                        <img src={search} alt="" className="absolute z-10 left-4 top-1/2 transform text-lg -translate-y-1/2 h-5 w-5 text-gray-800 object-contain" />
                    </div>
                    </div>

                    

                    <div className="grid grid-cols-2 gap-4 mx-32 mb-22">
                        {beneficiaries.map((beneficiary, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3">
                                    <img src={user} alt={beneficiary.name} className="h-10 w-10 rounded-full" />
                                    <div>
                                        <h3 className="font-medium text-sm">{beneficiary.name}</h3>
                                        <div className="flex items-center gap-1 mt-0.5">
                                            <img src={country} alt="US" className="h-3.5 w-4" />
                                            <span className="text-xs text-gray-600">USA</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-[#0066FF] text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                                    Transfer again
                                </button>
                            </div>
                        ))}
                    </div>
            </main>
            <Footer />
        </div>
    );
}