import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { complaintsBackImg } from '../assets/image'

export default function CompliantsPage() {
    const [ activePage, setActivePage ] = useState('how-to')
  return (
    <div>
        <Navbar />
        <div className="w-full min-h-screen relative flex flex-col items-center dm-sans">
            <div className="px-32 py-12 border-b bg-[#F6F6F6] border-[#D3D8DD] w-full">
                <div className="rounded-md shadow-sm p-1 h-[46px] flex w-100 bg-white">
                    <button
                    className={`flex items-center gap-1 w-[50%] justify-center text-[12px] font-light text-[#6E757D] ${
                        activePage === 'how-to' && 'font-medium bg-[#2475FF] text-white rounded-md shadow-md'
                    }`}
                    onClick={() => setActivePage('how-to')}
                    >
                        How to Complaints
                    </button>
                    <button
                    className={`flex items-center gap-1 w-[50%] justify-center text-[12px] font-light text-[#6E757D] ${
                        activePage === 'rewards' && 'font-medium bg-[#2475FF] text-white rounded-md shadow-md'
                    }`}
                    onClick={() => setActivePage('rewards')}
                    >
                        Plus rewards
                    </button>
                </div>
            </div>
            {
                activePage === 'how-to' && (
                    <div className="pl-32 pr-48 py-12 w-full space-y-4">
                        <h1 className="text-[36px] text-[#181F30] leading-tight dm-sans-medium">
                            How we address complaints
                        </h1>
                        <p className="text-[#6E757D] dm-sans-light max-w-[70%] mb-8 text-[14px] text-left">
                            We aim to provide excellent service and to treat all our customers fairly. Nevertheless, should you be dissatisfied with any aspect of our service, we will investigate any issues diligently and work to resolve your complaint at the earliest opportunity:
                        </p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] text-left'><span className='text-[#181F30] dm-sans-semibold'>Immediately -</span> We will work to resolve your complaint as quickly as possible and will send you a Summary Resolution Communication for complaints resolved within 3 business days of receipt of your complaint.</p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] text-left'><span className='text-[#181F30] dm-sans-semibold'> 5 Business Days -</span> If we are unable to resolve your complaint straight away, we will begin our detailed investigations on your complaint and provide you with a formal acknowledgement within 5 business days, along with an estimated timeframe for resolution.
                        </p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] text-left'><span className='text-[#181F30] dm-sans-semibold'> 15 Business Days - </span>In most cases, we will be in a position to resolve your complaint within 15 business days, providing you with the results of our investigation and decision through a written final response. In exceptional circumstances we will send you a holding reply specifying the deadline by which we will respond. This will not be longer than 35 business days from the date of your initial complaint.
                        </p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] text-left'><span className='text-[#181F30] dm-sans-semibold'> 35 Business Days - </span>As detailed above, in exceptional circumstances, we will provide our final response by no later than 35 business days after receipt of your complaint.
                        </p>
                        <h4 className="text-[22px] mt-10 text-[#181F30] leading-tight dm-sans-medium">
                            If You Are Still Unhappy
                        </h4>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] w-[94%] text-left mb-8'>We aim to resolve all complaints fairly and promptly. However, if you are dissatisfied with our suggested final resolution, or if over 35 business days have passed since you first brought your complaint to our attention, you may have the right to refer your complaint to Ombudsfin. Ombudsfin will only deal with your complaint once you tried to resolve it with us, so please notify us of your concerns and we'll do all we can to help.<br/> <br /> If you would like Ombudsfin to look into your complaint, you must contact them within six months of the date of our final response</p>
                        <p className='text-[#181F30] dm-sans-semibold text-[14px] w-[40%] text-left mb-8'>
                            You can write to them at:<br />
                            Ombudsfin at North Gate II, Boulevard du Roi Albert II, n°8, bte. 2, 1000 Bruxelles<br />
                            Email: ombudsman@ombudsfin.be<br />
                            Fax: +32 2 545 77 79 <br />
                            Website: www.ombudsfin.be.
                        </p>
                        <p className='text-[#6E757D] dm-sans-light text-[14px] w-[94%] text-left mb-8'>Ombudsfin will only deal with complaints about problems that occurred within Belgium or acts and omissions conducted by an NBB authorised payment service provider within the EEA. If you have a complaint about problems that occurred outside of Belgium and/or acts and omission by a non-NBB authorised entity, you may also have the right to refer your complaint to the local ombudsman where the problem occurred and follow the local out of court complaints and redress procedures to register your complaint. Further information can be found on the website of the European consumer financial complaints network at https://ec.europa.eu. <br /><br />You also have the right to refer your complaint to the EU-Commission's internet platform for resolution of disputes (ODR Platform). The ODR platform allows both customers and business seeking out-of-court resolutions for disputes to online contracts for the sale of goods or services. You can access the platform via the following link https://ec.europa.eu/consumers/odr/main/index.cfm.</p>
                    </div>
                )
            }
            {
                activePage === 'rewards' && (
                    <div className='px-32 pb-20 w-full'>
                        <div className="w-full h-full flex justify-between items-center">
                            <div className='flex flex-col space-y-4'>
                                    <span className='text-[#181F30] dm-sans-medium text-[36px]'>
                                        Get Rewarded with Flash <br/ > Transfer Plus Rewards™
                                    </span>
                                    <span className='text-[#6E757D] dm-sans-light w-[360px] text-[14px]'>Earn exclusive rewards every time you use Flash Transfer Plus 
                                    Rewards™. Enjoy benefits like cashback, discounts, and special offers, making every transaction even more rewarding.</span>
                                    <div className='flex gap-4 w-full'>
                                        <button className='bg-[#FFC000] text-[12px] p-3 w-[50%] rounded-lg'>Register with Plus Rewards</button>
                                        <button className='bg-white border text-[12px] rounded-lg border-[#2475FF] p-3 w-[40%] text-[#2475FF]'>Send Online</button>
                                    </div>
                            </div>
                            <div className='rounded-4xl'>
                                <img src={complaintsBackImg} alt="" className='w-[600px] h-[400px]' />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <Footer />
    </div>
  )
}
