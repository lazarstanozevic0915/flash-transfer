import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { NavLink } from 'react-router-dom';
// import { blogUser1Img, icons } from '../assets/image';
import { Check } from 'lucide-react';

const CardPage = () => {


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
                <div className="w-[32%] h-full bg-blue-500" />
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
                    Enter your card information
                </span>
                <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                    Home is behind, the world ahead and there are many paths to tread<br /> through shadows to the edge.
                </p>
                <div className="w-full rounded-4xl bg-white shadow-md p-6">
                    <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                        <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}> 
                            {/* <div className="flex gap-3 border w-full p-2.5 border-[#FF3E24] rounded-xl text-[12px] text-[#FF3E24] bg-red-100 items-center">
                                <div className='rounded-full flex items-center border w-5 h-5 justify-center p-1'>i</div>
                                <h3>Select Delivery method</h3>
                            </div> */}

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="name" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Cardholder Name</label>
                                <input type="text" id='name' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Full name here' required />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="card" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Card Number</label>
                                <input type="text" id='card' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='1234 0000 0000 0000' required />
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="expiry" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Expiry Date</label>
                                    <input type="date" id='expiry' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' required />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="cvv" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>CVC/CVV</label>
                                    <input type="password" id='cvv' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='CVV' required />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" name="save" id="save" />
                                <label htmlFor="cvv" className='text-[#6E757D] dm-sans-medium text-[14px] text-left'>Save Card</label>
                            </div>
                            
                            <div className="flex gap-3">
                                <NavLink to={``} className='w-full p-2.5 flex items-center justify-center border rounded-xl text-[14px] border-[#D3D8DD] font-medium text-[#6E757D]'>Back</NavLink>
                                <button className='w-full p-2.5 rounded-xl text-[14px] bg-[#2475FF] text-white'>+ Add new card</button>
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

export default CardPage;