// ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile, checkAuthStatus } from '../store/authSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { profileBackImg, profileUserImg } from '../assets/image';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    address: '',
    postal: '',
    country: '',
  });

  // useEffect(() => {
  //   dispatch(checkAuthStatus());
  // }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
        dob: user.dob || '',
        address: user.address || '',
        postal: user.postal || '',
        country: user.country || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen relative pb-20 flex flex-col items-center dm-sans">
        <div className="w-full h-[40vh]">
          <img src={profileBackImg} alt="" className='h-full w-full object-cover' />
        </div>
        <div className="px-32 max-lg:px-4 w-full">
          <form className='w-full h-full' onSubmit={handleSubmit}>
            <div className="flex justify-between items-start py-3">
              <div className='flex gap-4 max-sm:gap-1'>
                <div className='rounded-full -mt-20'>
                  <img src={profileUserImg} alt="" className='w-46 h-46 object-cover' />
                </div>
                <div className="flex flex-col">
                  <h3 className='text-[#181F30] dm-sans-medium text-[16px] max-sm:text-[16px] font-semibold mb-2 text-left'>{user?.firstName} {user?.lastName}</h3>
                  <h3 className='text-[#6E757D] dm-sans-light text-[16px] max-sm:text-[12.6px] text-left'>Customer ID : {user?.customerId}</h3>
                </div>
              </div>
              <button type="submit" className='px-12 py-3 max-sm:hidden rounded-md bg-[#2475FF] text-white text-[14px]' disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 my-12 max-sm:my-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>First name</label>
                <input type="text" id='firstName' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your first name' value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Last name</label>
                <input type="text" id='lastName' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your last name' value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Email</label>
                <input type="email" id='email' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Password</label>
                <input type="password" id='password' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="dob" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Date of Birth</label>
                <input type="date" id='dob' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' value={formData.dob} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Present Address</label>
                <input type="text" id='address' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your address' value={formData.address} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="postal" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Postal Code</label>
                <input type="number" id='postal' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter your postal code' value={formData.postal} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Country</label>
                <input type="text" id='country' className='border p-3 rounded-md text-[14px] border-[#D3D8DD]' placeholder='Enter country' value={formData.country} onChange={handleChange} required />
              </div>
              <button type="submit" className='px-12 py-3 sm:hidden rounded-md bg-[#2475FF] text-white text-[14px]' disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}