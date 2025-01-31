import React from 'react';
import Footer from '../components/Footer';
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import check from "../assets/image/icons/check.svg"
import check1 from "../assets/image/icons/check1.svg"
import caution from "../assets/image/icons/caution.svg"

const VerificationCard = ({ title, items, isVerified, buttonText, buttonStyle }) => {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 px-6 py-10 flex flex-col justify-between h-full">
      <h3 className="text-2xl font-medium mb-6">{title}</h3>
      <span className='text-gray-300 mb-4'><hr /></span>
      <div className="flex-grow space-y-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.verified ? (
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <img src={check} alt="check icon" className='object-contain'/>
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <img src={caution} alt="check icon" className='object-contain'/>
              </div>
            )}
            <span className="text-gray-600">{item.text}</span>
          </div>
        ))}
      </div>
      <button 
        className={`py-3 px-2 mt-12 rounded-lg flex items-center justify-center gap-2 ${buttonStyle}`}
      >
        {isVerified && <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <img src={check1} alt="check icon" className='object-contain'/>
                  </div>
        }
        {buttonText}
      </button>
    </div>
  );
};


export default function KycPage() {

  const basicItems = [
    { text: 'Personal Information', verified: true },
    { text: 'Mobile Phone', verified: true }
  ];

  const intermediateItems = [
    { text: 'All Basic Requirements', verified: true },
    { text: 'Government ID', verified: true }
  ];

  const advancedItems = [
    { text: 'All Intermediate Requirements', verified: false },
    { text: 'Proof if Address', verified: false },
    { text: 'Review time', verified: false },
    { text: 'Facial Verification', verified: false }
  ];


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
       <nav className='flex items-center justify-between border-b border-[#D3D8DD] px-32 py-3'>
                <div className="flex space-x-8">
                    <div className="flex items-center space-x-1">
                        <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px]' />
                        <span className='inter-semibold text-[16px]'>Flash Transfer</span>
                    </div>
                    <div className="flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Send</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Find location</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Track a transfer</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Help</NavLink>
                    </div>
                </div>
                <div className="flex items-center space-x-1  text-[12px] dm-sans-medium">
                    <NavLink to={``} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
                    <NavLink to={``} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
                </div>
            </nav>
      <main className=" mx-auto px-0">
        <div className="text-center mb-1 py-18">
                <h1 className="text-5xl font-semibold mb-6">Personal Verification</h1>
                  <p className="text-gray-600">
                    Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                  </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-35 mb-20 py-16">
          <VerificationCard
            title="Basic"
            items={basicItems}
            isVerified={true}
            buttonText="Verified"
            buttonStyle="bg-green-500 text-white"
          />
          
          <VerificationCard
            title="Intermediate"
            items={intermediateItems}
            isVerified={true}
            buttonText="Verified"
            buttonStyle="bg-green-500 text-white"
          />
          
          <VerificationCard
            title="Advanced"
            items={advancedItems}
            isVerified={false}
            buttonText="Verified Now"
            buttonStyle="bg-blue-500 text-white"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

