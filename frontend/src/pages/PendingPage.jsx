import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import pending from "../assets/image/pending.svg";
import track from "../assets/image/icons/track.svg";

export default function PendingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden dm-sans">
      <Navbar />
      <main className="max-w-7xl flex items-center justify-center mx-auto my-18 px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col w-[50%] items-center">
          <div className="mb-8">
            <img src={pending} alt="Pending" className="h-24 w-auto" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Payment Pending</h1>
          <div className="flex flex-col mb-6 border border-gray-600 p-4 w-full rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">You Sent</span>
              <span>100 EUR</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Transfer Rate</span>
              <span>1 USD = 1 EUR</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Fee</span>
              <span>2.50 EUR</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Transfer Time</span>
              <span>1 Min</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Received On</span>
              <span>100.00 EUR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total to pay</span>
              <span>102.50 EUR</span>
            </div>
          </div>
          <div className="text-blue-500 mb-6 w-full flex justify-start rounded-lg bg-gray-200 p-3">
            <img src={track} alt="track" className='object-contain mr-3' />
            <p>Tracking number: {"\u200B"}(+1-771-824-9642)</p>
          </div>
          <div className="text-gray-600 flex flex-col justify-start w-full ">
            <h3 className="font-bold mb-2">Receiver Instructions</h3>
            <ol className="list-decimal pl-4 space-y-2">
              <li>Visit our receiver's page.</li>
              <li>Present your order number.</li>
              <li>Pay in cash.</li>
            </ol>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 w-full">
            <Link
              to="/"
              className="px-6 py-2.5 w-full text-center border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Back to Home
            </Link>
            <button className="px-6 py-2.5 w-full text-center justify-center bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}