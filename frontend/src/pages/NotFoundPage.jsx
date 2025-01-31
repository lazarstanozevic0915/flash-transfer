import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import error from "../assets/image/error.svg"


export default function NotFoundPage() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden dm-sans">
       <Navbar />
       <main className="flex-1 min-h-screen flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <img src={error} alt="404" className="mx-auto mb-6 w-[60%] object-contain" />
          <h1 className="text-3xl font-semibold mb-2">Opps! Page not found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the page you're looking for.</p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Go back home
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  );
}