import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import heroBackground from '../assets/image/hero-background.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { helpBackImg } from '../assets/image';


const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-200 py-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={onClick}
        >
          <span className="text-gray-900 font-medium">{question}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="mt-2 text-gray-600 text-sm">
            {answer}
          </div>
        )}
      </div>
    );
};

export default function HelpPage() {

    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
      {
        question: "How can I send Money?",
        answer: "Can't find the answer you're looking for? Reach out to our customer support team."
      },
      {
        question: "How much time required to transfer money?",
        answer: "Can't find the answer you're looking for? Reach out to our customer support team."
      },
      {
        question: "Can I transfer money abroad?",
        answer: "Can't find the answer you're looking for? Reach out to our customer support team."
      },
      {
        question: "Is there any fee deducted?",
        answer: "Can't find the answer you're looking for? Reach out to our customer support team."
      }
    ];

  return (
    <div className="min-h-screen dm-sans flex flex-col">
        <Navbar />
        <div className="w-full min-h-screen relative flex flex-col items-center dm-sans">
            <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
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
            <div className="flex flex-col items-center w-full">
                <div className="w-[600px] h-[350px] space-y-6 relative z-20 pt-16 pb-40">
                    <div className="flex flex-col items-center space-y-4">
                        <h1 className="text-[44px] leading-tight dm-sans-medium">
                            Help Center
                        </h1>
                        <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.   
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full px-32 py-10 bg-white mb-20'>
                <div className="flex flex-col  space-y-4">
                    <h1 className="text-[34px] leading-tight dm-sans-medium">
                        Frequently asked questions
                    </h1>
                    <p className="text-[#6E757D] dm-sans-light text-[14px]">
                        Can’t find the answer you’re looking for? Reach out to our customer support team.   
                    </p>
                    <div className="bg-white rounded-xl mb-16">
                        {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaq === index}
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-20 justify-between bg-white rounded-xl ">
                    <div className="flex-shrink-0 ml-8">
                        <img
                            src={helpBackImg}
                            alt="People with questions"
                            className="w-[500px] h-auto"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-medium mb-4">Still Have Questions?</h2>
                        <p className="text-gray-600 mb-6 max-w-md">
                            At tincidunt sapien vehicula est euncer pellentesque rhoncus. Et magna sit morbi lobortis morbus at morbi laoreet.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                            Ask for help
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
