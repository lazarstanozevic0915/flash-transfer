import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import heroBackground from '../assets/image/hero-background.png';

export default function Blogs() {
  return (
   <div className="min-h-screen dm-sans flex flex-col">
        <Navbar />
        <div className="w-full min-h-screen relative flex flex-col items-center dm-sans">
            <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
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
            <div className="flex flex-col items-center w-full">
                <div className="w-[600px] h-[350px] space-y-6 relative z-20 pt-16 pb-40">
                    <div className="flex flex-col items-center space-y-4">
                        <h1 className="text-[44px] leading-tight dm-sans-medium">
                            Our Blogs
                        </h1>
                        <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.  
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full px-32 py-10 bg-white mb-20'>
            </div>
        </div>
        <Footer />
    </div>
  )
}
