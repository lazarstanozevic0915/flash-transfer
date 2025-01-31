import React from 'react';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png'
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'


export default function PrivacyPolicy() {
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
        <h1 className="text-5xl font-semibold mb-6">Privacy Policy</h1>
          <p className="text-gray-600">
            Home is behind, the world ahead and there are many paths to tread <br /> through shadows to the edge.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-1">
          <div className="col-span-2">
            <div className="mb-12 px-20">
              <h2 className=" ml-6 text-3xl font-semibold mb-4">Privacy Policy - France</h2>
              <p className="ml-6 text-gray-600 mb-4">
                Can't find the answer you're looking for? Reach out to our <a href="/support" className="text-blue-600">customer support</a> team.
              </p>

              <div className=" p-6 mb-8">
                <h3 className="text-3xl font-semibold mb-4">Introduction</h3>
                <p className="text-gray-600 mb-4">
                  Your privacy and keeping your personal information secure are extremely important to us. At WorldRemit Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.
                </p>
                <p className="text-gray-600 mb-4">
                  This Privacy Policy ("Policy") explains among other things: what we do with your personal information; what we do to keep it secure; with whom we share your information; your rights in relation to the personal information we hold about you; and who you can contact for more information.
                </p>
                <p className='text-gray-600'>
                We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.
                </p>
              </div>

              <div className=" p-6 mb-8">
                <h3 className="text-3xl font-semibold mb-4">If you don't want to read all the details. Here are the highlights that you may really wish to know:</h3>
                <p className="text-gray-600 mb-4">
                Your privacy and keeping your personal information secure are extremely important to us. At WorldRemit Limited, we are committed to protecting and respecting Your privacy and handling Your information in an open and transparent manner.
                </p>
                <p className="text-gray-600 mb-4">
                This Privacy Policy ("Policy") explains among other things: what we do with your personal information; what we do to keep it secure;  with whom we share your information; your rights in relation to the personal information we hold about you; and who you can contact for more information. 
                 </p>
                 <p className='text-gray-600'>
                We will amend or update this Policy regularly to reflect changes in our practices with respect to the processing of personal information, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make to the terms of this Policy.
                </p>
              </div>

              <div className=" p-6 mb-8">
                <h3 className="text-3xl font-semibold mb-4">Who are we?</h3>
                <p className="text-gray-600 mb-4">
                This website is operated and provided by WorldRemit Limited ("WorldRemit", "we", "us", "our") having its registered office at 62 Buckingham Gate, London, SW1E 6AJ. 
                </p>
                <p className="text-gray-600 mb-4">
                If you reside in a country where we provide our services to you and are a user of our website https://www.worldremit.com/ (“our website”, “our site”) and/or of our mobile applications (the “Mobile App”), we are a data controller for the purpose of Data Protection Legislation (as defined below). In this Policy, references to "You" and "Your" are references to a user of our website and/or of our Mobile Apps.
                </p>
                <p className="text-gray-600 mb-4">
                WorldRemit Limited is part of the WorldRemit Group, which includes Wave Transfer Limited, Chime Inc and Sendwave SA (“Sendwave”). Click here for Sendwave Privacy Policy. For a full list of companies in the WorldRemit Group CLICK HERE 
                </p>
                <p className="text-gray-600">
                You will know us by our brands: “WorldRemit '' and “Sendwave”.
                </p>
              </div>

              <div className=" p-6 mb-8">
                <h3 className="text-3xl font-semibold mb-4">How we use your personal information</h3>
                <p className="text-gray-600 mb-4">
                Our primary purpose in collecting user information is to provide You with a safe, smooth, efficient, and customised experience and to provide the services You have requested from us. We may also use the information that You have provided to ensure that the content on our site is presented in the most effective manner for You and Your computer or device.
                </p>
                <p className="text-gray-600 mb-4">
                We use Your information for the following specific purposes:
                </p>
                <p className="text-gray-600">
                to carry out our obligations arising from any contracts entered into between You and us or from applicable law such as anti-money laundering laws, and to provide You with the Services in accordance with our terms and conditions and with this Policy;
                </p>
                <p className="text-gray-600">
                to register You with a WorldRemit account;
                </p>
                <p className="text-gray-600">
                to fulfil Your Transaction / (Airtime Top Up) Request;
                </p>
                <p className="text-gray-600">
                to send You confirmations or other notifications;
                </p>
                <p className="text-gray-600">
                to notify You about temporary or permanent changes to our services or other service-related messages;
                </p>
                <p className="text-gray-600">
                to assist you where online applications are not completed;
                </p>
                <p className="text-gray-600">
                to prevent fraud, money laundering, and any other illegal activity;
                </p>
                <p className="text-gray-600">
                to ensure that content from our site is presented in the most effective manner for You and for Your computer;
                </p>
                <p className="text-gray-600">
                to promote our business;
                </p>
                <p className="text-gray-600">
                to send You Marketing communications, where You have shown interest; or purchased Our services and in the course of doing so You provided your contact details and You have not opted out from receiving marketing communications. 
                </p>
                <p className="text-gray-600">
                to administer our site and for internal operations, including troubleshooting, data analysis, profiling and segmentation analysis, testing, research, statistical and survey purposes;
                </p>
                <p className="text-gray-600">
                as part of our efforts to keep our site, Mobile App and our services safe and secure;
                </p>
                <p className="text-gray-600">
                to measure or understand the effectiveness of advertising we serve to You and others, and to deliver relevant advertising to You;
                </p>
                <p className="text-gray-600">
                to make suggestions and recommendations to You and other users of our site about services that may interest You or them;
                </p>
                <p className="text-gray-600">
                to train, monitor and assess the effectiveness of the manner in which we provide the Services to You; 
                </p>
                <p className="text-gray-600">
                to consider and investigate any concerns or complaints you may have; and
                </p>
                <p className="text-gray-600">
                to display personal testimonials of satisfied customers on our website in addition to other endorsements, where You have agreed with a third-party review site that we may do so. If You wish to update or delete Your testimonial, contact us at dataprivacy@worldremit.com                
                </p>
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