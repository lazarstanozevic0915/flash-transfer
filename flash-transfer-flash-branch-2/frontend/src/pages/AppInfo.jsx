import React from 'react';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import iphone from "../assets/iPhone 15 Pro 1.png"
import apple from "../assets/image/icons/apple.svg"
import playstore from "../assets/image/icons/googlePlay.svg"




export default function AppInfo() {

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
        <div className="text-center mb-28 bg-gray-100  py-38 rounded-b-2xl relative ">
                <div className="absolute -bottom-10 -left-70 z-10">
                        <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
                    </div>
                <div className="absolute -bottom-10 -right-70 z-10">
                        <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
                    </div>
                <h1 className="text-5xl font-semibold mb-6">Fast Transfer mobile app</h1>
                  <p className="text-gray-600">
                    Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                  </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-2 py-20 mb-16 -mt-8">
          <div className='p-20 flex flex-col justify-center ml-14 '>
            <h2 className="text-5xl font-medium mb-6">
              Send money in one <br /> tap with the app
            </h2>
            <p className="text-gray-600 mb-6">
              With millions of downloads, the fast transfer mobile app is an <br /> easier way to send money.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-2 text-gray-600">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Send money wherever you are</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Use exchange rates and estimate fees</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Easily manage your transactions and profile</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Log in quickly and securely using facial recognition (only <br /> on iOS) or your fingerprint</span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6">With millions of downloads, the fasttransfer mobile app is an <br /> easier way to send money.</p>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-lg">
                <img src={apple} alt="apple" className='object-contain' />
                <span>App Store</span>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg">
              <img src={playstore} alt="apple" className='object-contain' />
                <span>Play Store</span>
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="bg-gray-100 pr-0 pt-8 pb-0 pl-2 rounded-3xl flex items-center justify-center ">
            <img src={iphone} alt="iphone mockup" className='object-contain'/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}