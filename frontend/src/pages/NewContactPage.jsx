import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { icons } from '../assets/image';

const NewContactPage = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('inProgress');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[100vh] relative flex justify-center dm-sans">
        <div className="w-full h-[50%] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
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
        
        <div className={`w-[700px] min-h-screen py-20 space-y-6 relative z-20 flex flex-col items-center justify-center`}>
          <span className="text-[44px]/12 dm-sans-medium">
            Add New Contact
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
            Home is behind, the world ahead and there are many paths to tread<br /> through shadows to the edge.
          </p>
          <div className="w-full rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>  
                  <div className="flex gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="firstName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>First name*</label>
                        <input type="text" id='firstName' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your first name' required />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="lastName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Last name*</label>
                        <input type="text" id='lastName' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your last name' required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="email" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Email address</label>
                      <input type="email" id='email' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your email' required />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="mobileMoney" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Mobile money</label>
                      <input type="text" id='mobileMoney' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your mobile money' required />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="country" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Country/Region</label>
                      <input type="text" id='country' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Country' required />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="streetAddress" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Street address*</label>
                      <input type="text" id='streetAddress' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your street address' required />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="city" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>City*</label>
                      <input type="text" id='city' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your city' required />
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="state" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>State*</label>
                        <input type="text" id='state' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your state' required />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="zip" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>ZIP*</label>
                        <input type="text" id='zip' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your ZIP code' required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="purpose" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Purpose*</label>
                      <input type="text" id='purpose' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your Purpose' required />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="funds" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Source of funds*</label>
                      <input type="text" id='funds' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your funds' required />
                  </div>
                  <button className='rounded-lg p-2.5 text-[14px] bg-[#FFC000]'>Continue</button>
                </form>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewContactPage;