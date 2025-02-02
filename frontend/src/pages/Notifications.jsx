import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import logo from '../assets/image/logo.svg';
import Footer from '../components/Footer';
import sms from "../assets/image/icons/sms.svg";
import whatsapp from "../assets/image/icons/whatsapp.svg";
import email from "../assets/image/icons/email.svg";
import Navbar from '../components/Navbar';
import { ChevronLeft } from 'lucide-react';

const Toggle = ({ enabled, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none
        ${enabled ? 'bg-green-500' : 'bg-gray-200'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
          ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );
};

const NotificationItem = ({ title, description, enabled, onChange, icon }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className='flex flex-row'>
        <div className="rounded-full p-2 items-center bg-gray-200 mr-2 max-md:h-max">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Toggle enabled={enabled} onChange={onChange} />
    </div>
  );
};

const NotificationsContent = ({ notifications, handleToggle }) => {
  return (
    <div className="bg-white rounded-lg max-md:w-full max-md:mb-22">
      <NotificationItem
        title="SMS"
        description="Stay Life Feel The Freedom Of Your Home"
        enabled={notifications.sms}
        onChange={() => handleToggle('sms')}
        icon={<img src={sms} alt="sms icon" className="object-contain" />}
      />
      
      <NotificationItem
        title="Email"
        description="A Right Media Mix Can Make The Difference"
        enabled={notifications.email}
        onChange={() => handleToggle('email')}
        icon={<img src={email} alt="email icon" className="object-contain" />}
      />
      
      <NotificationItem
        title="Whatsapp"
        description="Advertising Relationships Vs Business Decisions"
        enabled={notifications.whatsapp}
        onChange={() => handleToggle('whatsapp')}
        icon={<img src={whatsapp} alt="whatsapp icon" className="object-contain" />}
      />

      <div className="flex justify-end mt-6 space-x-4 max-md:gap-3 max-md:flex-col-reverse max-md:justify-between max-md:mt-12">
        <button className="px-20 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 max-md:w-full">
          Cancel
        </button>
        <button className="px-12 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 max-md:w-full">
          Update settings
        </button>
      </div>
    </div>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    sms: false,
    email: true,
    whatsapp: true
  });
  
  const [currentView, setCurrentView] = useState('sidebar');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {isMobile ? (
          <div className="w-full">
            {currentView === 'sidebar' ? (
              <Sidebar isMobile={true} onNavigate={setCurrentView} />
            ) : (
              <div className="p-4">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setCurrentView('sidebar')}
                    className="text-gray-600"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <h1 className="text-2xl font-semibold ml-2">Notifications</h1>
                </div>
                <NotificationsContent 
                  notifications={notifications}
                  handleToggle={handleToggle}
                />
              </div>
            )}
          </div>
        ) : (
          <>
            <Sidebar />
            <main className="flex-1 p-6 w-screen mr-28 ml-4 max-md:mx-2">
              <div className="max-w-3xl">
                <div className="flex justify-between items-center mt-4 mb-4 border-b pb-4 border-gray-200">
                  <h1 className="text-3xl font-semibold">Notifications</h1>
                </div>
                <NotificationsContent 
                  notifications={notifications}
                  handleToggle={handleToggle}
                />
              </div>
            </main>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;