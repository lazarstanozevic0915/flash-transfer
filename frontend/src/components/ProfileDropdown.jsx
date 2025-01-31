import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LogOut,
  CreditCard,
  Users,
  User,
  Clock,
  Share2,
  Medal,
  ImageIcon,
  Settings
} from 'lucide-react';
import { blogUser1Img } from '../assets/image';

const ProfileDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-8 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 border border-gray-100 ">
      {/* Profile Header */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={blogUser1Img} alt="" />
          </div>
          <div>
            <h4 className="text-sm font-medium">Alex Smeth</h4>
            <div className="h-1 w-24 bg-green-500 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-1">
        <NavLink to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <User className="w-4 h-4" />
          <span>My Profile</span>
        </NavLink>
        
        <NavLink to="/transactions" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Clock className="w-4 h-4" />
          <span>My Transaction</span>
        </NavLink>
        
        <NavLink to="/recipients" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Users className="w-4 h-4" />
          <span>My Recipients</span>
        </NavLink>
        
        <NavLink to="/track" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Share2 className="w-4 h-4" />
          <span>Track a Transfer</span>
        </NavLink>
        
        <NavLink to="/nft" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <ImageIcon className="w-4 h-4" />
          <span>NFT</span>
        </NavLink>
        
        <NavLink to="/rank" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Medal className="w-4 h-4" />
          <span>My Rank</span>
        </NavLink>
        
        <NavLink to="/cards" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <CreditCard className="w-4 h-4" />
          <span>My Cards</span>
        </NavLink>
        
        <NavLink to="/refer" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Users className="w-4 h-4" />
          <span>Refer a Friend</span>
        </NavLink>
        
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Settings className="w-4 h-4" />
          <span>Setting</span>
        </NavLink>
        
        <button 
          onClick={onClose}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;