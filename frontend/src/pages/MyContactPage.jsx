import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBeneficiaries } from '../Services/beneficiary';

import { setRecipient } from '../store/paymentSlice';

import heroBackground from '../assets/image/hero-background.png';
import { useDispatch, useSelector } from 'react-redux';

const MyContactPage = () => {
  const dispatch = useDispatch();
  const { paymentMethod, recipient } = useSelector((state) => state.payment);
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(recipient || null);
  const [countryFlags, setCountryFlags] = useState({});
  const navigate = useNavigate();


  // Update Redux when local state changes
  useEffect(() => {
    dispatch(setRecipient(selectedContact));
  }, [selectedContact, dispatch]);
  
  useEffect(() => {
    // Fetch country flags
    const fetchCountryFlags = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        // Create a map of country name to flag URL
        const flagsMap = {};
        data.forEach(country => {
          // Use common name as key and flag PNG as value
          // Also add alternative names for better matching
          if (country.name.common) {
            flagsMap[country.name.common.toLowerCase()] = country.flags.png;
          }
          if (country.name.official) {
            flagsMap[country.name.official.toLowerCase()] = country.flags.png;
          }
          // Add alternative names if available
          if (country.altSpellings) {
            country.altSpellings.forEach(alt => {
              flagsMap[alt.toLowerCase()] = country.flags.png;
            });
          }
        });
        
        setCountryFlags(flagsMap);
      } catch (err) {
        console.error('Failed to fetch country flags:', err);
      }
    };

    fetchCountryFlags();
  }, []);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await getBeneficiaries();        
        
        if (response.data.success && response.data.data && response.data.data.data) {
          // Get unique contacts by name, purpose, and sourceOfFunds
          const uniqueContacts = [];
          const contactKeys = new Set();
          
          response.data.data.data.forEach(contact => {
            // Create a unique key based on the combination of all three fields
            const uniqueKey = `${contact.name}-${contact.purpose}-${contact.sourceOfFunds}`;
            
            if (!contactKeys.has(uniqueKey)) {
              contactKeys.add(uniqueKey);
              uniqueContacts.push(contact);
            }
          });
          
          setContacts(uniqueContacts);
        } else {
          setError('Failed to fetch contacts');
        }
      } catch (err) {
        setError('Failed to fetch contacts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchContacts();
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedContact && paymentMethod === 'card') {
      navigate('/send/receiver-method/card', { state: { contact: selectedContact } });
    } else {
      navigate('/send/receiver-info', { state: { contact: selectedContact } });
    }
  };

  const handleAddNew = () => {
    navigate('/send/new-contact');
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  // Find the correct flag based on country name
  const getCountryFlag = (countryName) => {
    if (!countryName) return null;
    
    // Try to match the country name in our flags map
    const countryLower = countryName.toLowerCase();
    
    // Return the flag URL if found, otherwise return a default flag
    return countryFlags[countryLower] || 
           // Try to match with partial name
           Object.keys(countryFlags).find(key => key.includes(countryLower) || countryLower.includes(key))
             ? countryFlags[Object.keys(countryFlags).find(key => key === countryLower)]
             : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/120px-No_flag.svg.png';
  };

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[100vh] max-sm:px-4 relative flex justify-center dm-sans">
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
        
        <div className={`w-[700px] min-h-screen py-20 space-y-6 relative z-20 flex flex-col items-center justify-center`}>
          <span className="text-[44px]/12 dm-sans-medium max-sm:text-[36px] max-sm:mb-2">
            My Contacts
          </span>
          <p className="text-[#6E757D] dm-sans-light text-[14px] text-center max-sm:text-[15.5px]">
            Home is behind, the world ahead and there are many paths to tread<br className='max-sm:hidden' /> through shadows to the edge.
          </p>
          <div className="w-full rounded-4xl bg-white shadow-md p-6">
              <div className="w-full h-full flex flex-col space-y-2 justify-between rounded-2xl">
                <form className="h-full w-full flex flex-col gap-6 justify-between" onSubmit={handleSubmit}>
                    {loading ? (
                      <div className="py-8 flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#2475FF]"></div>
                      </div>
                    ) : contacts.length > 0 ? (
                      <div className="flex flex-col gap-2 w-full max-h-80 overflow-y-auto">
                        {contacts.map((contact) => (
                          <div 
                            key={contact.id} 
                            className={`p-2 flex justify-between items-center border ${selectedContact && selectedContact.id === contact.id ? 'border-[#2475FF] bg-[#EBF3FF]' : 'border-[#D3D8DD] bg-[#EFF0F1]'} rounded-lg cursor-pointer`}
                            onClick={() => handleSelectContact(contact)}
                          >
                              <div className="flex gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className='flex flex-col py-1.5 justify-between'>
                                    <h4 className='text-[#181F30] dm-sans-semibold text-[13px] text-left'>{contact.name || `${contact.firstName} ${contact.lastName}`}</h4>
                                    <div className="flex gap-2">
                                      {contact.country && (
                                        <img 
                                          src={getCountryFlag(contact.country)} 
                                          alt={contact.country} 
                                          className='w-4 h-4 object-fit rounded-sm' 
                                        />
                                      )}
                                      <h4 className='text-[#6E757D] dm-sans-light text-[13px] text-left'>{contact.country}</h4>
                                    </div>
                                  </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {selectedContact && selectedContact.id === contact.id && (
                                  <div className="w-5 h-5 rounded-full bg-[#2475FF] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  </div>
                                )}
                                <button 
                                  type="button" 
                                  className='text-white px-4 py-2 bg-[#2475FF] text-[14px] rounded-md'
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Add your share functionality here
                                  }}
                                >Share</button>
                              </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-10 flex flex-col items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <p className="text-center text-[#6E757D] dm-sans-light text-[15px]">
                          You don't yet have any beneficiaries
                        </p>
                      </div>
                    )}
                    
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    
                    {contacts.length === 0 ? (
                      <button 
                        type="button"
                        className='rounded-lg p-2.5 text-[14px] bg-[#FFC000]'
                        onClick={handleAddNew}
                      >
                        Add New
                      </button>
                    ) : (
                      <button 
                        type="submit"
                        className={`rounded-lg p-2.5 text-[14px] ${selectedContact ? 'bg-[#FFC000]' : 'bg-[#FFC00080] cursor-not-allowed'}`}
                        disabled={!selectedContact}
                      >
                        Continue
                      </button>
                    )}
                </form>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyContactPage;