import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { NavLink } from 'react-router-dom';
// import { blogUser1Img, icons } from '../assets/image';
import { Check } from 'lucide-react';
import { blogUser1Img, currency, icons } from '../assets/image';

const ReviewDetailsPage = () => {


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
                <div className="w-[62%] h-full bg-blue-500" />
            </div>
            
            {/* Steps */}
            {[
                { label: "Receiver's info", description: "Enter the informations", active: false, completed: true },
                { label: "Receiver's Method", description: "Enter the informations", active: false, completed: true },
                { label: "Review Details", description: "Enter the informations", active: true, completed: false },
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
            <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
                <div className="absolute top-0 left-[26%] z-10">
                    <img
                    src={heroBackground}
                    alt=""
                    className="h-[480px] w-[600px] object-fill"
                    />
                </div>
            </div>
            <div className={`min-h-[50vh] space-y-6 relative z-20 flex flex-col items-center justify-center`}>
                <span className="text-[44px]/10 dm-sans-medium">
                    Review Details
                </span>
                <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                    Check the summary of your order before validating.
                </p>
            </div>
        </div>
        <div className='w-full min-h-screen pt-16 pb-32 px-32'>
            <div className='w-full flex gap-9'>
                <div className="w-[64%] space-y-6 h-full">
                    <div className='w-full'>
                        <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                            <span className='text-[15px] font-semibold text-[#181F30]'>Sender Details</span>
                            <NavLink to='/receiver' className='text-[#2475FF] text-[13px]'>Edit</NavLink>
                        </div>
                        <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <div className='border border-[#FFC000] rounded-full'>
                                        <img src={blogUser1Img} alt="" />
                                    </div>
                                    <div className='flex flex-col py-1.5 justify-between'>
                                        <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Numan Xaffar</h4>
                                        <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                    </div>
                                </div>
                                <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>KYC</div>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Bitcoin</span>
                                <img src={currency.btc} alt="" className='w-7 h-7 object-cover' />
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Blockchain</span>
                                <img src={currency.btc} alt="" className='w-7 h-7 object-cover' />
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Source of funds</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>Saving</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Purpose of transaction</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>Saving</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                            <span className='text-[15px] font-semibold text-[#181F30]'>Receiver details</span>
                            <NavLink to='/receiver' className='text-[#2475FF] text-[13px]'>Edit</NavLink>
                        </div>
                        <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <div className='border border-[#FFC000] rounded-full'>
                                        <img src={blogUser1Img} alt="" />
                                    </div>
                                    <div className='flex flex-col py-1.5 justify-between'>
                                        <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Kamran Xaffar</h4>
                                        <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Cash pickup</span>
                                <img src={icons.moneyIcon} alt="" className='w-7 h-7 object-fill' />
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Receiver Country</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>France</span>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>You sent</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>100BTC</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Transfer rate</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>1 EUR = 1 EUR</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Fee</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>+2.50 USDT</span>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[13px] font-medium text-[#181F30]'>Total to pay</span>
                                <span className='text-[15px] font-medium text-[#181F30]'>100EUR</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[13px] font-medium text-[#181F30]'>Recipient Gets</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>100.00 EUR</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src={icons.receiverSup} alt="" />
                                    <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Availability</h4>
                                </div>
                                <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>Immediate</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-3">
                        <button className='p-2.5 border w-full text-[#6E757D] border-[#D3D8DD] rounded-xl text-[14px]'>Cancel</button>
                        <button className='p-2.5 w-full rounded-xl text-[14px] bg-[#FFC000]'>Confirm</button>
                    </div>
                </div>
                <div className="w-[36%] space-y-6 h-full">
                    <div className='w-full'>
                        <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                            <span className='text-[15px] font-semibold text-[#181F30]'>Amount</span>
                        </div>
                        <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <div className='rounded-full'>
                                        <img src={icons.receiverCard} alt="" />
                                    </div>
                                    <div className='flex flex-col py-1.5 justify-between'>
                                        <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>$100</h4>
                                        <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Credit Card</h4>
                                    </div>
                                </div>
                                <button className='px-4 py-2 border text-[13px] rounded-xl border-[#2475FF] text-[#2475FF]'>Edit Amount</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
                            <span className='text-[15px] font-semibold text-[#181F30]'>Transfer Summary</span>
                        </div>
                        <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Amount to send</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>$100</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Transfer Rate</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>$ 5.99</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Fee Waived</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>-$ 5.99</span>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Total Cost</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>$100</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Total to recipient</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>RS 30000</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[14px] font-medium text-[#6A6A6A]'>Exchange Rate</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>$1=RS300</span>
                            </div>
                            <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[13px] font-medium text-[#181F30]'>Total to pay</span>
                                <span className='text-[15px] font-medium text-[#181F30]'>100EUR</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span className='text-[13px] font-medium text-[#181F30]'>Recipient Gets</span>
                                <span className='text-[14px] font-medium text-[#181F30]'>100.00 EUR</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src={icons.receiverSup} alt="" />
                                    <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Availability</h4>
                                </div>
                                <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>Immediate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    <Footer />
    </div>
  );
};

export default ReviewDetailsPage;