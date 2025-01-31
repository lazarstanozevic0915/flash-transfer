import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-[#F6F6F6] rounded-t-[50px] border-gray-200">
      <div className="container mx-auto px-20 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Flash Transfer logo" className="h-[34px] w-[38px]" />
              <span className="inter-semibold text-base">Flash Transfer</span>
            </div>
            <p className="text-sm text-gray-600 dm-sans-light">
              Easily send, buy, and sell crypto worldwide with Flash Transfer.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700">
                <span className="sr-only">YouTube</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800">
                <span className="sr-only">Pinterest</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-4.373 23.178c-.01-.937-.004-2.062.236-3.08l1.733-7.33s-.419-.837-.419-2.073c0-1.941 1.124-3.392 2.526-3.392 1.19 0 1.765.893 1.765 1.965 0 1.198-.763 2.988-1.156 4.643-.33 1.386.697 2.52 2.066 2.52 2.48 0 4.146-3.185 4.146-6.957 0-2.87-1.93-5.015-5.436-5.015-3.964 0-6.43 2.956-6.43 6.26 0 1.14.335 1.943.858 2.565.24.287.274.4.186.73l-.277 1.079c-.09.342-.366.464-.674.337-1.883-.77-2.76-2.83-2.76-5.14C4 5.5 7.34 1 12.86 1c4.54 0 7.52 3.28 7.52 6.81 0 4.665-2.592 8.146-6.415 8.146-1.283 0-2.49-.694-2.9-1.482l-.79 3.134c-.285 1.035-1.063 2.332-1.585 3.122A12 12 0 1012 0"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600 dm-sans-light">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/countries">Countries</NavLink></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-medium mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600 dm-sans-light">
              <li><NavLink to="/download">Download App</NavLink></li>
              <li><NavLink to="/currency">All currency</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
              <li><NavLink to="/status">Status</NavLink></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-medium mb-4">Stay Up to Date</h3>
            <p className="text-sm text-gray-600 dm-sans-light mb-4">
              Subscribe to our weekly newsletter for updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border border-gray-300 rounded-l outline-none text-sm"
              />
              <button className="px-4 py-2 bg-[#FFC000] rounded-r text-sm font-medium hover:bg-[#e6ac00]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12">
        <div className="container mx-auto px-20 py-6">
          <p className="text-sm text-center text-gray-600 dm-sans-light">
            Copyright 2022 © Flash Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;