import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bell from "../assets/image/icons/notification.svg";
import wallet from "../assets/image/icons/wallet.svg";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-72 bg-gray-50 h-screen p-6 ml-34 mt-8 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-8">Settings</h2>
      <div className="space-y-2">
        <Link 
          to="/settings"
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