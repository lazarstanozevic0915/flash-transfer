import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { NavLink } from 'react-router-dom';
import { blogUser1Img, icons, language } from '../assets/image';
import { Check } from 'lucide-react';
import logo from "../assets/image/logo.svg";
import metamask from "../assets/image/icons/metamask.svg";
import phantom from "../assets/phantom.png";
import ledger from "../assets/ledger.png";
import QrCode from "../assets/Group 1000002890.png";

const SendCryptoPage = () => {

    const wallets = [
        { 
          name: 'Flash Wallet',
          imgSrc: logo
        },
        { 
          name: 'Metamask',
          imgSrc: metamask
        },
        { 
          name: 'Phantom',
          imgSrc: phantom
        },
        { 
          name: 'Ledger',
          imgSrc: ledger
        }
      ]

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
                <div className="w-[35%] h-full bg-blue-500" />
            </div>
            
            {/* Steps */}
            {[
                { label: "Receiver's info", description: "Enter the informations", active: false, completed: true },
                { label: "Receiver's Method", description: "Enter the informations", active: true, completed: false },
                { label: "Review Details", description: "Enter the informations", active: false, completed: false },
                { label: "Payment Complete", description: "Enter the informations", active: false, completed: false }
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
            <div className={`w-[800px] min-h-screen space-y-6 pt-24 pb-40 relative z-20 flex flex-col items-center justify-center`}>
                <span className="text-[44px]/10 dm-sans-medium">
                Send Crypto Payment
                </span>
                <p className="text-[#6E757D] dm-sans-light text-[14px] -mt-2 text-center">
                You can see all the details of your transaction, check that you have made no <br /> mistake if necessary you can modify information on this page.                </p>
                <div className="w-full rounded-4xl bg-white shadow-md p-6">
                    <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                        <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>
                            <h3 className='text-black font-semibold -mb-4'>Send Crypto Payment</h3> 
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="country" className='text-gray-400 dm-sans-medium text-[12px] text-left'>Send payment to this crypto address:</label>
                                <div class="flex items-center justify-between w-full border rounded-lg p-1 border-[#D3D8DD]">
  <div>
    <p class="text-[#6E757D] dm-sans-medium text-[16px]">
      0x14D8C9EaF7...805D
    </p>
  </div>
  <button class="border-l border-gray-400 pl-4 text-[14px] font-medium">
    Copy
  </button>
</div>
                            </div>
                            <div className="flex justify-between gap-8 bg-gray-100 p-6 rounded-lg">
                                    {/* Left side - Wallet List */}
                                    <div>
                                      <h2 className="text-xl font-semibold mb-4">Sign in with Wallet</h2>
                                      <p className="text-sm text-gray-600 mb-6">Connect to discover wallets:</p>
                                      
                                      <div className="space-y-4">
                                        {wallets.map(({ name, imgSrc }) => (
                                          <div key={name} className="flex items-center gap-3">
                                            <div className="flex items-center gap-8">
                                              <img 
                                                src={imgSrc} 
                                                alt={`${name} logo`}
                                                className="h-6 w-6 object-contain"
                                              />
                                              <span className="text-sm font-medium text-gray-700 min-w-[80px]">{name}</span>
                                            </div>
                                            <button 
                                              className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-500 hover:bg-gray-100"
                                            >
                                              Connect
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                            
                                      <div className="mt-6 flex flex-col">
                                        <p className="text-sm flex justify-start text-gray-600">
                                          Don't see your wallet listed above?{' '}
                                          </p>
                                          <button className="text-blue-600 hover:text-blue-500 flex justify-start">
                                            Connect to another wallet
                                          </button>
                                      </div>
                                    </div>
                            
                                    {/* Right side - QR Code */}
                                    <div className="flex flex-col items-center bg-white px-4 rounded-2xl mr-2 w-[320px]">
                                      <h3 className="text-base font-medium mb-4">Wallet connect</h3>
                                      <div className=" rounded-lg p-2 mt-18" >
                                        <img 
                                          src={QrCode}
                                          alt="QR Code"
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                    </div>
                                  </div>
                        

                            <div className="flex gap-3">
                                <NavLink to={``} className='w-full p-2.5 flex items-center justify-center border rounded-xl text-[14px] border-[#D3D8DD] font-medium text-[#6E757D]'>Cancel</NavLink>
                            </div> 
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

export default SendCryptoPage;