import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileBackImg, profileUserImg } from '../assets/image'

export default function ProfilePage() {
  return (
    <div>
        <Navbar />
        <div className="w-full min-h-screen relative pb-20 flex flex-col items-center dm-sans">
            <div className="w-full h-[40vh]">
                <img src={profileBackImg} alt="" className='h-full w-full object-cover' />
            </div>
            <div className="px-32 w-full">
                <form className='w-full h-full'>
                    <div className="flex justify-between items-start py-3">
                        <div className='flex gap-4'>
                            <div className='rounded-full -mt-20'>
                                <img src={profileUserImg} alt="" className='w-46 h-46 object-cover' />
                            </div>
                            <div className="flex flex-col">
                                <h3 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>Jane Cooper</h3>
                                <h3 className='text-[#6E757D] dm-sans-light text-[16px] text-left'>Customer ID :FT121212</h3>
                            </div>
                        </div>
                        <button className='px-12 py-3 rounded-md bg-[#2475FF] text-white text-[14px]'>Save</button>
                    </div>
                    <div className="grid grid-cols-2 gap-5 my-12">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>First name</label>
                            <input type="text" id='firstName' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your first name' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Last name</label>
                            <input type="text" id='lastName' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your last name' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Email</label>
                            <input type="email" id='email' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your email' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Password</label>
                            <input type="password" id='password' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your password' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="dob" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Date of Birth</label>
                            <input type="date" id='dob' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Present Address</label>
                            <input type="text" id='address' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your address' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="postal" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Postal Code</label>
                            <input type="number" id='postal' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your postal code' required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="country" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Country</label>
                            <input type="text" id='country' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter country' required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}
