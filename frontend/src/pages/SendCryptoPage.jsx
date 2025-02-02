import React, { useState } from 'react';

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
import copy from "../assets/image/icons/copy.svg";
import walletconnect from "../assets/WalletConnect.svg";
import DonutProgress from '../components/DonutProgress';

const SendCryptoPage = () => {

  const fullAddress = "1A1zP1eP5QGefi2DMPTfTL5S1A1zP1eP5QGefi2DMPTfTL5S"; // Full address to copy
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

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

        <div className='max-w-4xl mx-auto px-4 pt-8 pb-8 max-sm:py-0 max-md:pb-2'>
            {/* Progress Steps */}
            <div className="flex justify-between relative max-sm:hidden">
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
            <div className='hidden max-sm:flex -space-x-4 items-center'>
                <DonutProgress  size = "w-28 h-28" percentage = {50} />
                <div className="flex flex-col justify-between items-start">
                    <span className='text-[#181F30] text-[16px] font-bold'>Receiver’s info</span>
                    <span className='text-[#6E757D] text-[13px]'>Enter the informations.</span>
                </div>
            </div>
        </div>

        <div className="w-full relative flex justify-center dm-sans">
            <div className="w-full h-[70vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
                <div className="absolute top-0 left-[26%] max-sm:-left-5 z-10">
                    <img
                    src={heroBackground}
                    alt=""
                    className="h-[480px] max-sm:h-[320px] w-[600px] object-fill"
                    />
                </div>
            </div>
            <div className={`w-[800px] min-h-screen max-lg:px-6 space-y-6 max-sm:space-y-4 pt-24 max-sm:pt-8 pb-40 max-sm:pb-12  max-lg:pb-20 relative z-20 flex flex-col items-center justify-center`}>
                <span className="text-[44px]/10 dm-sans-medium max-md:text-[26px]/10">
                Send Crypto Payment
                </span>
                <p className="text-[#6E757D] dm-sans-light text-[14px] -mt-2 text-center max-md:hidden">
                You can see all the details of your transaction, check that you have made no <br /> mistake if necessary you can modify information on this page.                
                </p>
                <p className="text-[#6E757D] dm-sans-light text-[14px] -mt-2 text-center  md:hidden">
                You can see all the details of your <br /> transaction, check that you have made no <br /> mistake if necessary you can modify <br /> information on this page.                
                </p>
            <div className="w-full rounded-3xl bg-white shadow-md p-6 max-md:mx-4 max-md:p-3 max-md:w-full">
                  <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                        <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>
                          <h3 className='text-black font-semibold -mb-4 '>Send Crypto Payment</h3> 

                  <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="country" className='text-gray-400 dm-sans-medium text-[12px] text-left max-md:mb-2'>Send payment to this crypto address:</label>
                                <div className="flex items-center justify-between w-full max-md:w-[100%] border rounded-lg p-1 border-[#D3D8DD]">
                                <div>
                                  <p className="text-[#6E757D] dm-sans-medium text-[16px]">
                                  {fullAddress.slice(0, 6) + "..." + fullAddress.slice(-4)} {/* Truncate */ }
                                  </p>
                                </div>
                                <button
                                  onClick={handleCopy}
                                  className="border-l border-gray-400 text-[#2475FF] pl-4 text-[14px] font-medium flex"
                                >
                                  <img src={copy} alt="copy" className='object-contain' />
                                  {copied ? "Copied!" : "Copy"}
                                </button>
                              </div>
                                <div className='flex justify-center items-center gap-4 my-3'>
                                  <hr className='border border-[#D3D8DD] w-[43%] max-md:w-[35%]' />
                                  <p className='font-[14px] text-[#6E757D]'>Or Pay</p>
                                  <hr className='border border-[#D3D8DD] w-[43%] max-md:w-[35%]'/>
                                </div>
                          </div>
                    <div className="flex items-center justify-between gap-8 bg-gray-100 p-6 rounded-lg max-md:flex-col max-md:p-2 ">
                                    {/* Left side - Wallet List */}
                                    <div className='md:w-[55%] max-md:flex max-md:flex-col max-md:justify-start'>
                                      <h2 className="text-xl font-semibold mb-4">Connect wallet</h2>
                                      <p className="text-sm text-gray-600 mb-6">Connect to discover wallets:</p>
                                      
                                      <div className="space-y-4">
                                        {wallets.map(({ name, imgSrc }) => (
                                          <div key={name} className="flex items-center justify-between gap-12">
                                            <div className="flex items-center gap-4">
                                              <img 
                                                src={imgSrc} 
                                                alt={`${name} logo`}
                                                className="h-6 w-6 object-contain"
                                              />
                                              <span className="text-sm font-medium text-gray-700 min-w-[80px]">{name}</span>
                                            </div>
                                            <button 
                                              className="px-4 py-2 bg-[#D3D8DD] rounded-full text-sm flex justify-end text-gray-500 hover:bg-gray-100"
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
                                    <div className="flex flex-col items-center bg-white px-4 py-12 rounded-2xl mr-2 w-[320px] max-md:w-[98%]">
                                      <img src={walletconnect} alt="walletconnect" className='object-contain' />
                                      <h3 className="text-base font-medium mb-4">Wallet connect</h3>
                                      <div className=" rounded-lg p-2 -mt-2" >
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