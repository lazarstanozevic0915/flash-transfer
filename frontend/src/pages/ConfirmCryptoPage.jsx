import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { NavLink } from 'react-router-dom';
import { blogUser1Img, icons, language } from '../assets/image';

const ConfirmCryptoPage = () => {

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
                <div className="w-[1%] h-full bg-blue-500" />
            </div>
            
            {/* Steps */}
            {[
                { label: "Receiver's info", description: "Enter the informations", active: true },
                { label: "Receiver's Method", description: "Enter the informations", active: false },
                { label: "Review Details", description: "Enter the informations", active: false },
                { label: "Payment Complete", description: "Enter the informations", active: false }
            ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center w-1/4">
                    <div className=" bg-white rounded-full w-13 h-13 flex items-center justify-center">
                        <div className={` rounded-full border ${
                            step.active 
                            ? 'bg-blue-500 w-10 h-10 p-1 border-4 border-blue-50 text-white' 
                            : ' bg-white w-8 h-8 border-gray-200 text-gray-400'
                        } flex items-center justify-center z-10 mb-2 text-sm font-medium`}>
                            <div className={`w-4 h-4 rounded-full ${ step.active ? 'bg-white' : 'bg-gray-200'}`}></div>
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
                Confirm Crypto Address
                </span>
                <p className="text-[#6E757D] dm-sans-light text-[14px] -mt-2 text-center">
                How would you like the money delivered?                </p>
                <div className="w-full rounded-4xl bg-white shadow-md p-6">
                    <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                        <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}> 
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="country" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Enter the Crypto Address of an EVM chain: <br /> (ETH, Polygon, Base, Arbitrum, Optimism ...)</label>
                                <input type="text" id='country' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='0x.................................' required />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="city" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Select the Crypto</label>
                                <input type="text" id='city' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='USDT' required />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="city" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Select the Blockchain</label>
                                <input type="text" id='city' className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Base' required />
                            </div>

                        

                            <div className="flex gap-3">
                                <NavLink to={``} className='w-full p-2.5 flex items-center justify-center border rounded-xl text-[14px] border-[#D3D8DD] font-medium text-[#6E757D]'>Cancel</NavLink>
                                <button className='w-full p-2.5 rounded-xl text-[14px] bg-[#FFC000]'>Continue</button>
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

export default ConfirmCryptoPage;