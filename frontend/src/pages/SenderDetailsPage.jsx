import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroBackground from '../assets/image/hero-background.png';
import { language } from '../assets/image';
import { useForm } from '../hooks/useForm';
import { validateNewContact } from '../utils/validation';
import { addNewBeneficiary } from '../Services/beneficiary';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/authSlice';
import { toast } from 'react-toastify';

const SenderDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [status, setStatus] = useState('inProgress');
  const [country, setCountry] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showFundsDropdown, setShowFundsDropdown] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [sourceOfFunds, setSourceOfFunds] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState('');

  const { values, errors, isSubmitting, handleChange, } = useForm(
      {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        country: country,
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        purpose: '',
        sourceOfFunds: '',
      },
      validateNewContact
    );

  const purposeOptions = ["Family support", "Payment for goods/services", "Education", "Personal expenses", "Investment"];

  const fundsOptions = ["Salary", "Personal savings", "Investments", "Sales of goods", "Other legitimate income"];


  useEffect(() => {
    dispatch(clearError());
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        
        const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        ).map(country => ({
          name: country.name.common,
          flag: country.flags.svg || country.flags.png
        }));
        
        setCountries(sortedCountries);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to load countries. Please try again later.');
      }
    };

    fetchCountries();
  }, [dispatch]);

  const handleSubmit = (e) => {   
      e.preventDefault();
      navigate('/send/review-details');
  };

  const handleCountrySelect = (country) => {
    setCountry(country.name);
    setSelectedFlag(country.flag);
    setShowCountryDropdown(false);
    handleChange({
      target: {
        name: "country",
        value: country.name,
      },
    });
  };
  
  

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[100vh] relative flex justify-center dm-sans">
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
        
        <div className={`w-[700px] min-h-screen py-20 max-sm:px-4 space-y-6 relative z-20 flex flex-col items-center justify-center`}>
          <span className="text-[44px]/12 dm-sans-medium max-sm:text-center max-sm:text-[36px] max-sm:mb-2 ">
            Sender Details
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center max-sm:text-[15.8px]">
            Home is behind, the world ahead and there are many paths to tread<br className='max-sm:hidden' /> through shadows to the edge.
          </p>
          <div className="w-full rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <form onSubmit={handleSubmit} className="h-full w-full flex flex-col gap-6 justify-between">  
                  <div className="flex max-sm:flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="firstName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>First name*</label>
                        <input 
                          type="text" 
                          id='firstName' 
                          className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                          name='firstName' 
                          value={values.firstName}  
                          onChange={handleChange} 
                          placeholder='Enter your first name' 
                          required 
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="lastName" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Last name*</label>
                        <input 
                          type="text" 
                          id='lastName' 
                          className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                          name='lastName' 
                          value={values.lastName}  
                          onChange={handleChange} 
                          placeholder='Enter your last name' 
                          required 
                        />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="email" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Email address</label>
                      <input 
                        type="email" 
                        id='email' 
                        className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                        name='email' 
                        value={values.email}  
                        onChange={handleChange} 
                        placeholder='Enter your email' 
                        required 
                      />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="mobileNumber" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Mobile Number</label>
                      <input 
                        type="text" 
                        id='mobileNumber' 
                        className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                        name='mobileNumber' 
                        value={values.mobileNumber} 
                        onChange={handleChange} 
                        placeholder='Enter your mobile number' 
                        required 
                      />

                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="country" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Country/Region</label>
                      <div className='relative w-full'>
                        <div className='absolute left-3 top-2.5 border-r border-gray-400 py-0 '>
                          {selectedFlag ? (
                            <img src={selectedFlag} alt="" className='w-6 h-6 mr-3' />
                          ) : (
                            <img src={language.english} alt="" className='w-6 h-6 mr-3' />
                          )}
                        </div>
                        <input 
                          type="text" 
                          id='country'
                          name='country' 
                          className='border p-2.5 pl-14 rounded-md text-[14px] bg-[#F4F5F7] border-[#D3D8DD] w-full' 
                          placeholder='Choose your Location' 
                          required 
                          value={country}
                          onChange={handleChange}
                          readOnly
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {showCountryDropdown && (
                          <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {countries.length > 0 ? (
                              countries.map((country, index) => (
                                <div 
                                  key={index}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[14px] flex items-center"
                                  onClick={() => handleCountrySelect(country)}
                                >
                                  <img src={country.flag} alt={`${country.name} flag`} className="w-5 h-5 mr-2" />
                                  {country.name}
                                </div>
                              ))
                            ) : (
                              <div className="px-4 py-2 text-[14px]">Loading countries...</div>
                            )}
                          </div>
                        )}
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="streetAddress" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Street address*</label>
                      <input 
                        type="text" 
                        id='streetAddress' 
                        className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                        name='streetAddress' 
                        onChange={handleChange} 
                        placeholder='Enter your street address' 
                        required 
                      />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="city" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>City*</label>
                      <input 
                        type="text" 
                        id='city'
                        name='city'
                        value={values.city} 
                        className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]' 
                        onChange={handleChange} 
                        placeholder='Enter your city' 
                        required 
                      />
                  </div>
                  <div className="flex max-sm:flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="state" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>State*</label>
                        <input 
                          type="text" 
                          id='state'
                          name='state'
                          value={values.state} 
                          className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]'  
                          onChange={handleChange} 
                          placeholder='Enter your state' 
                          required 
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="zip" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>ZIP*</label>
                        <input 
                          type="text" 
                          id='zipCode' 
                          name='zipCode'
                          value={values.zipCode}
                          className='border p-2.5 rounded-md text-[14px] border-[#D3D8DD]'  
                          onChange={handleChange} 
                          placeholder='Enter your ZIP code' 
                          required 
                        />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full relative">
                      <label htmlFor="purpose" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Purpose*</label>
                      <input 
                        type="text" 
                        id='purpose'
                        name='purpose' 
                        className='border p-2.5 rounded-md text-[14px] bg-[#F4F5F7] border-[#D3D8DD]' 
                        placeholder='Enter your Purpose' 
                        required 
                        value={purpose}
                        onChange={handleChange}
                        readOnly
                        onClick={() => setShowPurposeDropdown(!showPurposeDropdown)}
                      />
                      <div 
                        className="absolute right-3 top-1/2 translate-y-2 cursor-pointer"
                        onClick={() => setShowPurposeDropdown(!showPurposeDropdown)}
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {showPurposeDropdown && (
                        <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                          {purposeOptions.map((option, index) => (
                            <div 
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[14px]"
                              onClick={() => {
                                setPurpose(option);
                                setShowPurposeDropdown(false);
                                handleChange({
                                  target: {
                                    name: "purpose",
                                    value: option.toUpperCase(),
                                  },
                                });
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                  <div className="flex flex-col gap-2 w-full relative">
                      <label htmlFor="souceOfFunds" className='text-[#181F30] dm-sans-medium text-[14px] text-left'>Source of funds*</label>
                      <input 
                        type="text" 
                        id='sourceOfFunds'
                        name='sourceOfFunds' 
                        className='border p-2.5 rounded-md text-[14px] bg-[#F4F5F7] border-[#D3D8DD]' 
                        placeholder='Enter your funds' 
                        required 
                        value={sourceOfFunds}
                        onChange={handleChange}
                        readOnly
                        onClick={() => setShowFundsDropdown(!showFundsDropdown)}
                      />
                      <div 
                        className="absolute right-3 top-1/2 translate-y-2 cursor-pointer"
                        onClick={() => setShowFundsDropdown(!showFundsDropdown)}
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {showFundsDropdown && (
                        <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                          {fundsOptions.map((option, index) => (
                            <div 
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[14px]"
                              onClick={() => {
                                setSourceOfFunds(option);
                                setShowFundsDropdown(false);
                                handleChange({
                                  target: {
                                    name: "sourceOfFunds",
                                    value: option.toUpperCase(),
                                  },
                                });
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                  <div className="flex max-sm:flex-col-reverse gap-3">
                      <NavLink to={``} className='w-full p-2.5 flex items-center justify-center border rounded-xl text-[14px] border-[#D3D8DD] font-medium text-[#6E757D]'>Cancel</NavLink>
                      <button type="submit" className='w-full p-2.5 rounded-xl text-[14px] bg-[#FFC000]'>Save</button>
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

export default SenderDetailsPage;