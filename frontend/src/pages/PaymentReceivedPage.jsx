import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import track from "../assets/image/icons/track.svg";
import { Check, Printer } from 'lucide-react';

const PaymentReceivedPage = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
      };

  return (
    <div className="min-h-screen dm-sans">
      {/* Header */}
     <Navbar />

      {/* Main Content */}
      <main className="">

        <div className='max-w-4xl mx-auto px-4 pt-8 pb-8'>
            {/* Progress Steps */}
            <div className="flex justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-24 w-[78%] h-[2px] bg-gray-200">
                <div className="w-full h-full bg-blue-500" />
            </div>
            
            {/* Steps */}
            {[
                { label: "Receiver's info", description: "Enter the informations", active: false, completed: true },
                { label: "Receiver's Method", description: "Enter the informations", active: false, completed: true },
                { label: "Review Details", description: "Enter the informations", active: false, completed: true },
                { label: "Payment Complete", description: "Enter the informations", active: false, completed: true }
            ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center w-1/4">
                    <div className=" bg-white rounded-full w-13 h-13 flex items-center justify-center">
                        <div className={` rounded-full border ${
                            step.active 
                            ? 'bg-blue-500 w-10 h-10 p-1 border-4 border-blue-50 text-white' 
                            : step.completed ? 'bg-blue-500 w-9.5 h-9.5 p-1 text-white' : ' bg-white w-8 h-8 border-gray-200 text-gray-400'
                        } flex items-center justify-center z-10 mb-2 text-sm font-medium`}>
                            <div className={step.completed ? '' : `w-4 h-4 rounded-full ${ step.active ? 'bg-white' : 'bg-gray-200'}`}>
                                {step.completed && <Check size={20} />}
                            </div>
                        </div>
                    </div>
                <div className="text-center">
                    <div className="text-sm font-semibold">{step.label}</div>
                    <div className="text-[10px] text-gray-500">{step.description}</div>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="w-full relative flex justify-center dm-sans">
            <div className="w-full h-[70vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
                <div className="absolute top-0 left-[26%] z-10">
                    <img
                    src={heroBackground}
                    alt=""
                    className="h-[480px] w-[600px] object-fill"
                    />
                </div>
            </div>
            <div className={`w-[800px] min-h-screen space-y-4 pt-24 pb-40 relative z-20 flex flex-col items-center justify-center`}>
                <span className="text-[44px]/10 dm-sans-medium">
                    Received 
                </span>
                <div className="dm-sans-medium flex items-center gap-2 text-[18px] text-center">
                    You are almost done
                    <div className='w-5 h-5 rounded-full text-white bg-[#00C735] flex items-center justify-center'>
                        <Check size={13} />
                    </div>

                </div>
                <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                    Here is the summary of your order. Please follow the instructions displayed.
                </p>
                <div className="w-full rounded-4xl bg-white shadow-md p-6">
                    <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                        <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}> 
                            <h1 className="text-xl font-semibold mb-6">Instructions for making payment</h1>
                            
                            <div className="">
                                <h2 className="text-blue-500 font-semibold">Step 1</h2>
                                <p>Log in to your bank’s website</p>
                            </div>

                            <div className="">
                                <h2 className="text-blue-500 font-semibold">Step 2</h2>
                                <p>Transfer the total amount to "Orange Money" (beneficiary):</p>
                                <div className=" rounded-lg mt-2">
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Beneficiary</span>
                                        <span className="font-semibold">Orange Money</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Address</span>
                                        <span className="font-semibold text-right">Schubertring 1/1a, 1010 <br /> Vienna, Austria</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Name Of The Bank</span>
                                        <span className="font-semibold text-right">Orange Money <br /> Bank Gmbh</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Rising</span>
                                        <span className="font-semibold">203.90 EUR</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Bic/Swift</span>
                                        <span className="font-semibold">WUIBATWN</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Wire Going</span>
                                        <span className="font-semibold">At65198860000000018</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#F6F6F6]">
                                        <span>Payment Reference (Required)</span>
                                        <span className="font-semibold text-right">EB9470837, Nu<br />man, USA</span>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <h2 className="text-blue-500 font-semibold">Step 3</h2>
                                <p>Your money will be available once we have received the total amount of 203.90 EUR</p>
                            </div>

                            <div className="flex items-center bg-gray-200 py-4 px-3 rounded-lg mb-6">
                                <img src={track} alt="track" className="object-contain mr-3" />
                                <p className="font-semibold">Tracking Number (FTN): <span className="text-gray-800">771 824 9542</span></p>
                            </div>

                            <button className="w-full flex items-center justify-center py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg gap-2 hover:bg-yellow-600 transition-colors">
                                <Printer />
                                Print
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </main>
    <Footer />
    </div>
  );
};

export default PaymentReceivedPage;