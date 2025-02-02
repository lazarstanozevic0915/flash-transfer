import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bell from "../assets/image/icons/notification.svg";
import wallet from "../assets/image/icons/wallet.svg";

const Sidebar = ({ isMobile, onNavigate }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={`${
      isMobile ? 'w-full' : 'w-72'
    } bg-gray-50 p-6 rounded-lg h-screen`}>
      <h2 className="text-2xl font-semibold mb-8">Settings</h2>
      <div className="space-y-2">
        <Link 
          to="/settings"
          onClick={() => onNavigate && onNavigate('cards')}
          className={`w-full flex items-center font-normal gap-1 p-3 rounded-lg ${
            currentPath === '/settings' 
              ? 'bg-blue-500 text-white' 
              : 'hover:bg-gray-100'
          }`}
        >
          <img src={wallet} alt="wallet icon" className={`object-contain ${
            currentPath === '/settings' ? 'bg-white text-white py-1 px-2 rounded-lg' : 'text-white p-2' }`} />
          Manage my card
        </Link>
        <Link 
          to="/notifications"
          onClick={() => onNavigate && onNavigate('notifications')}
          className={`w-full flex items-center font-normal gap-1 p-3 rounded-lg ${
            currentPath === '/notifications' 
              ? 'bg-blue-500 text-white' 
              : 'hover:bg-gray-100'
          }`}
        >
          <img src={bell} alt="notification icon" className={`object-contain ${
            currentPath === '/notifications' ? 'bg-white text-white py-1 px-2 rounded-lg' : 'text-white p-2'  }`} />
          Notifications
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;