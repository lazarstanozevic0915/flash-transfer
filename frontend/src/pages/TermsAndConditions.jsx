import React from 'react';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'


export default function TermsAndConditions() {
  const relatedLinks = [
    { title: 'About us', href: '/about' },
    { title: 'Recipient Terms and Conditions | FastTransfer', href: '/terms' },
    { title: 'Modern Slavery Statement', href: '/slavery-statement' },
    { title: 'Prohibited business types', href: '/prohibited-business' },
    { title: 'Refer a Friend Terms and Conditions | FastTransfer', href: '/refer' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
       <nav className='flex items-center justify-between border-b border-[#D3D8DD] px-32 py-3'>
                <div className="flex space-x-8">
                    <div className="flex items-center space-x-1">
                        <img src={logo} alt="Flash Transfer logo" className='h-[34px] w-[38px]' />
                        <span className='inter-semibold text-[16px]'>Flash Transfer</span>
                    </div>
                    <div className="flex space-x-5 mt-1 items-center dm-sans-light text-[#6E757D] text-[12px]">
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Send</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Find location</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Track a transfer</NavLink>
                        <NavLink to={``} className={`hover:text-[#111] hover:dm-sans-bold`}>Help</NavLink>
                    </div>
                </div>
                <div className="flex items-center space-x-1  text-[12px] dm-sans-medium">
                    <NavLink to={``} className={`py-4 px-6 hover:scale-105`}>Login</NavLink>
                    <NavLink to={``} className={`py-3 px-6 bg-[#FFC000] rounded-xl hover:scale-105`}>Sign up</NavLink>
                </div>
            </nav>
      <main className=" mx-auto px-0 ">
        <div className="text-center mb-28 bg-gray-100  py-38 rounded-b-2xl relative ">
                <div className="absolute -bottom-10 -left-70 z-10">
                        <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
                    </div>
                <div className="absolute -bottom-10 -right-70 z-10">
                        <img src={heroBackground} alt="" className=' h-[500px] w-[820px] object-fill' />
                    </div>
                <h1 className="text-5xl font-semibold mb-6">Terms and Conditions</h1>
                  <p className="text-gray-600">
                    Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
                  </p>
                </div>

        <div className="grid grid-cols-3 gap-6 mt-1">
          <div className="col-span-2">
            <div className="mb-12 px-20">

              <div className=" p-6 mb-8">
                <h3 className="text-3xl font-semibold mb-4">1. Contract Formation and Overview</h3>
                <p className="text-gray-600 mb-4">
                <span className='mr-4'>1.1</span>   These terms and conditions ("Terms and Conditions") govern the terms under which you can use:
                </p>
                <p className="text-gray-600 mb-4">
                <span className='mr-4'>(a)</span>     our Money Transfer services;
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>(b)</span>     our Digital Money Account (including redeeming electronic money and paying the proceeds of redemption to yourself or another person); and/or
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>(c)</span>      Airtime Top Up.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.2</span>    These Terms and Conditions, together with our web page setting out the charges applicable for our services, form your agreement with us for a Digital Money Account and/or use of Airtime Top Up (the "Agreement").
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.3</span>     By accessing, registering with and using any of these services, you agree to be bound by the terms of the Agreement.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.4</span>    The language of the Agreement is English, and all services, instructions and transactions carried out in connection with it will be in English.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.5</span>     You can obtain a copy of the Agreement at any time by asking us to send you a copy via email.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.6</span>    In the Agreement, the terms "WorldRemit", "we", "us", and "our" refer to WorldRemit Ltd, together with its employees, directors, successors, and assigns. WorldRemit Ltd is a company registered number 07110878 in England and Wales, with its registered office at 2nd Floor, 62 Buckingham Gate, London, SW1E 6AJ. WorldRemit Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 and Electronic Money Regulations 2011. Registration number: 900891. Its regulated activities include providing payment services and issuing electronic money.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.7</span>    The terms "you" and "your" refer to you, the person who has registered to use some or all of the services described in the Agreement.
                </p>
                <p className='text-gray-600 mb-4'>
                <span className='mr-4'>1.8</span>     This Agreement will be treated as coming into effect on the date you register with us and will continue for an indefinite period, until terminated by you or us.                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 w-full max-w-sm h-max">
              <h3 className="text-lg font-semibold mb-3">Related</h3>
              <hr className="border-gray-300 mb-3" />

              <nav>
                {relatedLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="block text-blue-600 hover:text-blue-700 py-2"
                    >
                      {link.title}
                    </a>
                    {/* Only add a line if it's NOT the last item */}
                    {index !== relatedLinks.length - 1 && <hr className="border-gray-300" />}
                  </div>
                ))}
              </nav>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}