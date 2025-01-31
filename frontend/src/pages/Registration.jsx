import React from 'react';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import upload from "../assets/image/icons/upload.svg"
import country from "../assets/image/icons/UM.svg"
import Navbar from '../components/Navbar';

export default function Registration() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <div className="text-center bg-gray-50 pt-16 pb-32 relative">
          <h1 className="text-5xl font-semibold mb-4">Registration page for merchants</h1>
          <p className="text-gray-600 text-md">
          Join our merchant community to expand your reach and grow your business with <br /> seamless access to new customers and powerful tools          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src={heroBackground} alt="" className="h-[300px] w-auto object-contain" />
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto -mt-20 px-6 mb-24 relative z-10">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-1">First name</label>
                <input type="text" placeholder="Enter your account" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm mb-1 font-semibold">Last name</label>
                <input type="text" placeholder="Enter your last name" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-semibold">Email Address</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-1 font-semibold">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm mb-1 font-semibold">Confirm Password</label>
                <input type="password" placeholder="Re-enter your password" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-semibold">Street address</label>
              <input type="text" placeholder="Enter Street address" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-1 font-semibold">State</label>
                <input type="text" placeholder="Enter your state" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm mb-1 font-semibold">City</label>
                <input type="text" placeholder="Enter your city" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-semibold">Country/Region</label>
              <button className="w-full px-4 py-2 border border-gray-200 rounded-lg text-left flex items-center gap-2">
                <img src={country} alt="US" className="h-5" />
                <span>Choose your location</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-1 font-semibold">Name Of Company</label>
                <input type="text" placeholder="Enter company name" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm mb-1 font-semibold">Telephone</label>
                <input type="tel" placeholder="Enter phone number" className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-semibold">Upload Company Documents</label>
              <p className="text-sm text-gray-500 mb-2">
                Send us your identity card or passport front / back as well as your document which proves the existence of your company.
              </p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-2">
                  <img src={upload} alt="Upload" className="h-8" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Upload a file or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>

            <button className="w-full py-3 bg-[#FFC000] text-black rounded-lg font-medium hover:bg-yellow-600">
              Submit Form
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}