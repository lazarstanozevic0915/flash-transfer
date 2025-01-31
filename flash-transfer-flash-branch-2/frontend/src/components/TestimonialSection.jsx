import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import trustIcon from '../assets/image/icons/trustpilot.svg'
import user1 from '../assets/image/users/user1.png'
import user2 from '../assets/image/users/user2.png'
import user3 from '../assets/image/users/user3.png'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: "Bertram Jensen",
      role: "Author at Panepply Store",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      rating: 5,
      avatar: user1
    },
    {
      id: 2,
      author: "Bertram Jensen",
      role: "Author at Panepply Store",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      rating: 5,
      avatar: user2
    },
    {
      id: 3,
      author: "Bertram Jensen",
      role: "Author at Panepply Store",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      rating: 5,
      avatar: user3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full px-20 py-16 flex flex-col dm-sans items-center bg-white">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <img src={trustIcon} alt="Trustpilot logo" className="h-6" />
                    <span className='font-bold'>TrustPilot</span>
                    <span className="text-sm text-gray-500">Our reviews verified by Trustpilot</span>
                </div>
                <h2 className="text-3xl dm-sans-medium">What our customers says</h2>
            </div>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-[#FFC000] hover:bg-[#e6ac00] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-[#FFC000] hover:bg-[#e6ac00] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-1 bg-gray-50 rounded-2xl p-6 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-[#FFC000] text-[#FFC000]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className='sapce-y-2'>
                  <h4 className="font-medium text-sm">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;