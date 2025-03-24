import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { blogUser1Img, icons } from "../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useAuth } from "../auth/AuthProvider";

const ProfileDropdown = ({ isOpen }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const { user } = useSelector(
      (state) => state.auth
  );
  // const { logout } = useAuth();

  return (
    <div className="absolute right-0 max-sm:right-12 max-sm:top-22 max-sm:scale-120 top-4 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 border border-gray-100 ">
      {/* Profile Header */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={blogUser1Img} alt="" />
          </div> */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
              </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#181F30]">{user.firstName} {user.lastName}</h4>
            <div className="h-1 w-24 bg-green-500 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-1">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          {/* <User className="w-4 h-4" /> */}
          <img src={icons.user} alt="" className="w-4 h-4" />
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/history"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          {/* <Clock className="w-4 h-4" /> */}
          <img
            src={icons.transaction2Icon}
            alt=""
            className="w-5 h-5 object-fill"
          />
          <span>My Transaction</span>
        </NavLink>

        <NavLink
          to="/recipients"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.swap2Icon} alt="" className="w-5 h-5 object-fill" />
          <span>My Recipients</span>
        </NavLink>

        <NavLink
          to="/track-order"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.targetIcon} alt="" className="w-5 h-5 object-fill" />
          <span>Track a Transfer</span>
        </NavLink>

        <NavLink
          to="/nft"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.nftIcon} alt="" className="w-5 h-5 object-fill" />
          <span>NFT</span>
        </NavLink>

        <NavLink
          to="/rank"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.rankIcon} alt="" className="w-5 h-5 object-fill" />
          <span>My Rank</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img
            src={icons.cardCreditIcon}
            alt=""
            className="w-5 h-5 object-fill"
          />
          <span>My Cards</span>
        </NavLink>

        <NavLink
          to="/refer"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.usersIcon} alt="" className="w-5 h-5 object-fill" />
          <span>Refer a Friend</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img
            src={icons.setting2Icon}
            alt=""
            className="w-5 h-5 object-fill"
          />
          <span>Setting</span>
        </NavLink>

        <button
          onClick={() => {
            localStorage.clear();
            dispatch(logout());
          }}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          <img src={icons.logout2Icon} alt="" className="w-5 h-5 object-fill" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
