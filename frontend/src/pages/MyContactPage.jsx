import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { blogUser1Img, icons, language } from '../assets/image';

const MyContactPage = () => {
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
            My Contacts
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
            Home is behind, the world ahead and there are many paths to tread<br /> through shadows to the edge.
          </p>
          <div className="w-full rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="p-2 flex justify-between items-center border border-[#D3D8DD] bg-[#EFF0F1] rounded-lg">
                            <div className="flex gap-3">
                                <img src={blogUser1Img} alt="" />
                                <div className='flex flex-col py-1.5 justify-between'>
                                <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Theresa Webb</h4>
                                <div className="flex gap-2">
                                    <img src={language.english} alt="" className='w-4 h-4 object-cover' />
                                    <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                </div>
                                </div>
                            </div>
                            <button className='text-white px-4 py-2 bg-[#2475FF] text-[14px] rounded-md'>Share</button>
                        </div> 
                        <div className="p-2 flex justify-between items-center border border-[#D3D8DD] bg-[#EFF0F1] rounded-lg">
                            <div className="flex gap-3">
                                <img src={blogUser1Img} alt="" />
                                <div className='flex flex-col py-1.5 justify-between'>
                                <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Theresa Webb</h4>
                                <div className="flex gap-2">
                                    <img src={language.english} alt="" className='w-4 h-4 object-cover' />
                                    <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                </div>
                                </div>
                            </div>
                            <button className='text-white px-4 py-2 bg-[#2475FF] text-[14px] rounded-md'>Share</button>
                        </div> 
                        <div className="p-2 flex justify-between items-center border border-[#D3D8DD] bg-[#EFF0F1] rounded-lg">
                            <div className="flex gap-3">
                                <img src={blogUser1Img} alt="" />
                                <div className='flex flex-col py-1.5 justify-between'>
                                <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Theresa Webb</h4>
                                <div className="flex gap-2">
                                    <img src={language.english} alt="" className='w-4 h-4 object-cover' />
                                    <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                </div>
                                </div>
                            </div>
                            <button className='text-white px-4 py-2 bg-[#2475FF] text-[14px] rounded-md'>Share</button>
                        </div> 
                        <div className="p-2 flex justify-between items-center border border-[#D3D8DD] bg-[#EFF0F1] rounded-lg">
                            <div className="flex gap-3">
                                <img src={blogUser1Img} alt="" />
                                <div className='flex flex-col py-1.5 justify-between'>
                                <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>Theresa Webb</h4>
                                <div className="flex gap-2">
                                    <img src={language.english} alt="" className='w-4 h-4 object-cover' />
                                    <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>USA</h4>
                                </div>
                                </div>
                            </div>
                            <button className='text-white px-4 py-2 bg-[#2475FF] text-[14px] rounded-md'>Share</button>
                        </div> 
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

export default MyContactPage;