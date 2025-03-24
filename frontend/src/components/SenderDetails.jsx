import React from 'react'
import { blogUser1Img, currency, icons } from '../assets/image';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SenderDetails = () => {
const { paymentMethod, amount, sourceCurrency, destinationCurrency } = useSelector((state) => state.payment);
const { user } = useSelector(
    (state) => state.auth
);
  

return (
<div className='w-full'>
    <div className='py-2 px-3 flex items-center bg-[#F6F6F6] rounded-t-2xl justify-between'>
        <span className='text-[15px] font-semibold text-[#181F30]'>Sender Details</span>
        <NavLink to='/send/sender-details' className='text-[#2475FF] text-[13px]'>Edit</NavLink>
    </div>
    <div className="space-y-3 w-full px-4 pt-3 pb-5 border border-[#F6F6F6] rounded-b-2xl">
        <div className="flex justify-between items-center">
            <div className="flex gap-3">
                {/* <div className='border border-[#FFC000] rounded-full'>
                    <img src={blogUser1Img} alt="" />
                </div> */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className='flex flex-col py-1.5 justify-between'>
                    <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>{user.firstName} {user.lastName}</h4>
                    <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>{user.countryName}</h4>
                </div>
            </div>
            <div className='px-4 py-1.5 border text-[12px] rounded-3xl bg-[#00C735] text-white'>KYC</div>
        </div>
        <div className="w-full h-[1px] bg-[#F6F6F6]"></div>
        <div className='w-full flex justify-between'>
            <span className='text-[14px] font-medium text-[#6A6A6A]'>
                {(paymentMethod === 'bank') ? 'Bank Transfer' : (paymentMethod === 'card') ? 'Credit Card' : (paymentMethod === 'cash') ? 'Cash' : `${sourceCurrency}`}
             </span>
             {
                paymentMethod === 'wallet' && (
                    <img src={currency.btc} alt="" className='w-7 h-7 object-cover' />
                )
             }
             {
                paymentMethod === 'cash' && (
                    <img src={icons.moneyIcon} alt="" className='w-7 h-7 object-fill' />
                )
             }
             {
                paymentMethod === 'bank' && (
                    <img src={icons.bank} alt="" className='w-7 h-7 object-fill' />
                )
             }
             {
                paymentMethod === 'card' && (
                    <img src={icons.card} alt="" className='w-7 h-7 object-fill' />
                )
             }
        </div>
        {
            paymentMethod === 'wallet' && (
                <div className='w-full flex justify-between'>
                    <span className='text-[14px] font-medium text-[#6A6A6A]'>{sourceCurrency}</span>
                    <img src={currency.btc} alt="" className='w-7 h-7 object-cover' />
                </div>
            )
        }
        <div className='w-full flex justify-between'>
            <span className='text-[14px] font-medium text-[#6A6A6A]'>Source of funds</span>
            <span className='text-[14px] font-medium text-[#181F30]'>Saving</span>
        </div>
        <div className='w-full flex justify-between'>
            <span className='text-[14px] font-medium text-[#6A6A6A]'>Purpose of transaction</span>
            <span className='text-[14px] font-medium text-[#181F30]'>Saving</span>
        </div>
    </div>
    </div>
  )
}

export default SenderDetails