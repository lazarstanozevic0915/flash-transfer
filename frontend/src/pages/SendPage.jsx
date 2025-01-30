import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { icons } from '../assets/image';
import HandCash from '../icons/HandCash';
import CryptoWallet from '../icons/CryptoWallet';
import CreditCard from '../icons/CreditCard';
import Bank from '../icons/Bank';
import CashPick from '../icons/CashPick';
import CashWallet from '../icons/cashWallet';
import MobileMoney from '../icons/MobileMoney';

const SendPage = () => {
  const [activePage, setActivePage] = useState('form');
  const [activePay, setActivePay] = useState('cash');
  const [activeReceive, setActiveReceive] = useState('cash');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('inProgress');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trackingNumber = e.target['tracking-number'].value;
    if (trackingNumber === '' || trackingNumber.length !== 10) {
      setError('Enter 10-Digit tracking number');
    } else {
      setActivePage('status');
      setStatus(trackingNumber.endsWith('1') ? 'inProgress' : 'cancelled');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full relative flex justify-center dm-sans">
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
        
        <div className={`w-[700px] min-h-screen  ${activePage === 'form' ? 'h-[500px]' : 'h-[650px]'} space-y-6 relative z-20 flex flex-col items-center justify-center`}>
          <span className="text-[44px]/12 dm-sans-medium">
            Send through
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
            Home is behind, the world ahead and there are many paths to tread<br /> through shadows to the edge.
          </p>
          <div className="w-full rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>  
                    <div className="flex flex-col gap-3">
                        <h3 className='text-[#273240] dm-sans-semibold text-[15px] text-left'>How would you like to pay ?</h3>
                        <div className="grid grid-cols-4 gap-4">
                            <button 
                                className={`flex items-center justify-center text-[13px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activePay === 'cash' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActivePay('cash')}
                            >
                                <HandCash />
                                <h3 className=''>Cash Payment</h3>
                            </button>
                            <button 
                                className={`flex items-center justify-center text-[13px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activePay === 'wallet' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActivePay('wallet')}
                            >
                                <CryptoWallet />
                                <h3 className=''>Crypto Wallet</h3>
                            </button>
                            <button 
                                className={`flex items-center justify-center text-[13px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activePay === 'card' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActivePay('card')}
                            >
                                <CreditCard />
                                <h3 className=''>Credit Card</h3>
                            </button>
                            <button 
                                className={`flex items-center justify-center text-[13px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activePay === 'bank' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActivePay('bank')}
                            >
                                <Bank />
                                <h3 className=''>Bank Transfer</h3>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='text-[#273240] dm-sans-semibold text-[15px] text-left'>How does your receiver want money ?</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button 
                                className={`flex flex-col items-center justify-center text-[14px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activeReceive === 'cash' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActiveReceive('cash')}
                            >
                                <CashPick color={activeReceive === 'cash' ? 'blue-500' : ''} />
                                <h3 className=''>Cash Payment</h3>
                            </button>
                            <button 
                                className={`flex flex-col items-center justify-center text-[14px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activeReceive === 'wallet' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActiveReceive('wallet')}
                            >
                                <CashWallet color={activeReceive === 'wallet' ? 'blue-500' : ''} />
                                <h3 className=''>Crypto Wallet</h3>
                            </button>
                            <button 
                                className={`flex flex-col items-center justify-center text-[14px] bg-[#F4F5F7] text-[#181F30] p-4 rounded-2xl cursor-pointer gap-2 ${ activeReceive === 'mobile' && 'bg-blue-500 text-white'} `}
                                onClick={() => setActiveReceive('mobile')}
                            >
                                <MobileMoney color={activeReceive === 'mobile' ? 'blue-500' : ''} />
                                <h3 className=''>Credit Card</h3>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className='w-full p-3 border rounded-xl text-[14px] border-[#2475FF] text-[#2475FF]'>Add From Contact</button>
                        <button className='w-full p-3 rounded-xl text-[14px] bg-[#FFC000]'>Add New</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendPage;