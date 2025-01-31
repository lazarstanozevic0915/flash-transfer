import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { NavLink } from 'react-router-dom';
// import { blogUser1Img, icons } from '../assets/image';
import { Check } from 'lucide-react';

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
            <div className='w-full h-screen flex gap-9'>
                <div className="w-[64%] h-full border">
                    <div className='w-full'>
                        <div className='p-2 flex '></div>
                    </div>
                </div>
                <div className="w-[36%] h-full border"></div>
            </div>
        </div>
      </main>
    <Footer />
    </div>
  );
};

export default ReviewDetailsPage;