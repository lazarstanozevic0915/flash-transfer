import React, { useState } from 'react';
import { CircleIcon, XCircleIcon, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { icons } from '../assets/image';

const TransferOrder = () => {
  const [activePage, setActivePage] = useState('form');
  const [active, setActive] = useState('send');
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
      <div className="w-full h-screen relative flex justify-center dm-sans">
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
        
        <div className={`w-[600px] ${activePage === 'form' ? 'h-[500px]' : 'h-[650px]'} space-y-6 relative z-20 flex flex-col items-center justify-center`}>
          <span className="text-[44px]/12 dm-sans-medium">
            Track a {activePage === 'form' ? 'Transfer' : 'Status'}
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
            {activePage === 'form'
              ? 'Home is behind, the world ahead and there are many paths to tread through shadows to the edge.'
              : 'Stay updated on your transfers with real-time status tracking. Know exactly when your transaction is initiated, processed, and completed for complete peace of mind.'}
          </p>

          {activePage === 'form' ? (
            <div className="w-full h-[260px] rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <div className="rounded-md shadow-sm p-1 h-[32%] flex w-full bg-[#F6F6F6]">
                  <button
                    className={`flex items-center gap-1 w-[50%] justify-center text-[14px] font-light text-[#6E757D] ${
                      active === 'send' && 'font-medium bg-[#FFC000] text-[#181F30] rounded-md shadow-md'
                    }`}
                    onClick={() => setActive('send')}
                  >
                    <img src={icons.letter} alt="" className="h-5 w-5" />
                    Send
                  </button>
                  <button
                    className={`flex items-center gap-1 w-[50%] justify-center text-[14px] font-light text-[#6E757D] ${
                      active === 'receive' && 'font-medium bg-[#FFC000] text-[#181F30] rounded-md shadow-md'
                    }`}
                    onClick={() => setActive('receive')}
                  >
                    <img src={icons.download} alt="" className="h-5 w-5" />
                    Receive
                  </button>
                </div>

                <form className="h-full w-full flex flex-col justify-between" onSubmit={handleSubmit}>
                  <div className="flex flex-col py-2 space-y-2">
                    <label htmlFor="tracking-number" className="text-[#374151] text-[12px] font-semibold">
                      Enter Tracking Number
                    </label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        name="tracking-number"
                        id="tracking-number"
                        className="p-3 border w-full border-[#D3D8DD] text-[12px] font-semibold"
                        placeholder="Flash Tracking Number (FTN)"
                        onChange={() => setError('')}
                      />
                      {error && (
                        <div className="right-2 bottom-2 absolute rounded-full w-6 items-center justify-center h-6 bg-[#FF3E24] text-[12px] text-white flex">
                          <span>!</span>
                        </div>
                      )}
                    </div>
                    {error && <span className="text-[#FF3E24] text-[12px] font-medium">{error}</span>}
                  </div>
                  <button className="p-2 w-full font-semibold bg-[#FFC000] text-[#181F30] text-[13px] rounded-md shadow-md">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white rounded-4xl shadow-md p-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    Flash Tracking Number (FTN): 456-789-321
                  </p>
                </div>

                <div className="space-y-6 bg-[#F6F6F6] p-5 ">
                  {status === 'inProgress' ? (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <div className="w-0.5 h-12 bg-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Sent</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <div className="w-0.5 h-12 bg-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">In progress</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <CircleIcon className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Handover</p>
                          <p className="text-sm text-gray-500 mt-1">
                            The Money transfer has been sent to the recipient's Bank. If the bank is unable to complete this transfer, we will notify the sender.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <div className="w-0.5 h-12 bg-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Sent</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <XCircleIcon className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Cancelled</p>
                          <p className="text-sm text-gray-500 mt-1">
                            The Money transfer has been Cancelled due to some reason
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransferOrder;