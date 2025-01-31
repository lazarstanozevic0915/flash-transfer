import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import heroBackground from '../assets/image/hero-background.png';
import { blogImage10Img, blogImage11Img, blogImage1Img, blogImage2Img, blogImage3Img, blogImage4Img, blogImage5Img, blogImage6Img, blogImage7Img, blogImage8Img, blogImage9Img, blogUser1Img, blogUser2Img } from '../assets/image';

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
            <div className='w-full px-32 py-10 space-y-24 bg-white mb-20'>
                <div className="flex items-center w-full pr-10 gap-16 shadow-sm justify-between bg-[#F6F6F6] rounded-xl ">
                    <div className="">
                        <img
                            src={blogImage1Img}
                            alt="People with questions"
                            className="w-[680px] h-[400px]"
                        />
                    </div>
                    <div className="">
                        <h3 className='text-gray-600 text-[14px] mb-6 max-w-md'><span className='text-[#2475FF]'>Banking</span> . March 14th, 2019</h3>
                        <h2 className="text-xl font-medium mb-4">User our Flash Transfer to send, buy or sell your crypto vs cash money in the world.</h2>
                        <p className="text-gray-600 mb-6 max-w-md">
                             Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using a Binance account or using your no-custodial wallet ( Flash wallet, Metamask, Binance wallet, Trust wallet ...)
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                            Ask for help
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center w-full">
                    <h1 className="text-[34px] text-[#181F30] leading-tight dm-sans-medium">
                        More Blog
                    </h1>
                    <p className="text-[#6E757D] dm-sans-light mb-8 text-[14px] text-center">
                        Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                    </p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col">
                            <img src={blogImage2Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <button className='text-white bg-[#2475FF] text-[13px] rounded-md p-2'>Read more</button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src={blogImage3Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <button className='text-white bg-[#2475FF] text-[13px] rounded-md p-2'>Read more</button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src={blogImage4Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <button className='text-white bg-[#2475FF] text-[13px] rounded-md p-2'>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-start w-full">
                    <h1 className="text-[34px] text-[#181F30] leading-tight dm-sans-medium">
                        Blog Journal
                    </h1>
                    <p className="text-[#6E757D] dm-sans-light mb-8 text-[14px] text-left">
                        Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                    </p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col">
                            <img src={blogImage5Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser1Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[12px] text-left'>Wade Warren</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[12px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src={blogImage6Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser2Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[12px] text-left'>Jane Cooper</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[12px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src={blogImage7Img} alt="" />
                            <div className='flex flex-col space-y-3 p-5 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[16px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[13px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser2Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[12px] text-left'>Devon Lane</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[12px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center w-full">
                    <h1 className="text-[34px] text-[#181F30] leading-tight dm-sans-medium">
                        Latest Blog Posts
                    </h1>
                    <p className="text-[#6E757D] dm-sans-light mb-8 text-[14px] text-center">
                        Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8">
                        <div className="flex items-center w-full shadow-sm gap-4 justify-between bg-[#F6F6F6] rounded-xl ">
                            <div className="w-[380px] rounded-md h-[300px]">
                                <img
                                    src={blogImage8Img}
                                    alt="People with questions"
                                    className=" object-cover w-full rounded-2xl h-full "
                                />
                            </div>
                            <div className='flex flex-col space-y-3 py-5 px-0 w-100 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[11px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[14px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[11px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser1Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[10px] text-left'>Wade Warren</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[10px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full shadow-sm gap-4 justify-between bg-[#F6F6F6] rounded-xl ">
                            <div className="w-[380px] rounded-md h-[300px]">
                                <img
                                    src={blogImage9Img}
                                    alt="People with questions"
                                    className=" object-cover w-full rounded-2xl h-full "
                                />
                            </div>
                            <div className='flex flex-col space-y-3 py-5 px-0 w-100 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[11px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[14px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[11px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser1Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[10px] text-left'>Wade Warren</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[10px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full shadow-sm gap-4 justify-between bg-[#F6F6F6] rounded-xl ">
                            <div className="w-[380px] rounded-md h-[300px]">
                                <img
                                    src={blogImage10Img}
                                    alt="People with questions"
                                    className=" object-cover w-full rounded-2xl h-full "
                                />
                            </div>
                            <div className='flex flex-col space-y-3 py-5 px-0 w-100 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[11px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[14px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[11px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser1Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[10px] text-left'>Wade Warren</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[10px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full shadow-sm gap-4 justify-between bg-[#F6F6F6] rounded-xl ">
                            <div className="w-[380px] rounded-md h-[300px]">
                                <img
                                    src={blogImage11Img}
                                    alt="People with questions"
                                    className=" object-cover w-full rounded-2xl h-full "
                                />
                            </div>
                            <div className='flex flex-col space-y-3 py-5 px-0 w-100 rounded-b-lg bg-[#F6F6F6]'>
                                <h3 className='text-[#6E757D] dm-sans-light text-[11px] text-left'>March 14th, 2019</h3>
                                <h2 className='text-[#181F30] dm-sans-medium text-[14px] text-left'>User our Flash Transfer to send, buy</h2>
                                <p className='text-[#6E757D] dm-sans-light text-[11px] text-left'>Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency...</p>
                                <div className="flex gap-3">
                                    <img src={blogUser1Img} alt="" />
                                    <div className='flex flex-col py-1.5 justify-between'>
                                     <h4 className='text-[#181F30] dm-sans-medium text-[10px] text-left'>Wade Warren</h4>
                                     <h4 className='text-[#6E757D] dm-sans-light text-[10px] text-left'>Author at Panoply Store</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
