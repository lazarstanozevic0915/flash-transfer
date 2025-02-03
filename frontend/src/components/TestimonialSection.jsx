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

    // Calculate items to show based on screen size
    const itemsToShow = {
      sm: 1,    // Small screens
      md: 2,    // Medium screens
      lg: 3,    // Large screens
      xl: 4     // Extra large screens
    };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>{
      const maxStartIndex = testimonials.length - 1;
      return prevIndex === 0 ? maxStartIndex : prevIndex - 1;
    } );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxStartIndex = testimonials.length - 1;
      return prevIndex === maxStartIndex ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="w-full px-20 py-16 max-md:px-8 max-md:py-8 flex flex-col dm-sans items-center bg-white">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 max-sm:gap-3">
                    <img src={trustIcon} alt="Trustpilot logo" className="h-6" />
                    <span className='font-bold'>TrustPilot</span>
                    <span className="text-sm max-sm:w-full text-gray-500 max-sm:hidden">Our reviews verified by Trustpilot</span>
                </div>
                <span className="text-sm max-sm:w-full text-gray-500 hidden max-sm:flex">Our reviews verified by Trustpilot</span>
                <h2 className="text-3xl dm-sans-medium max-sm:text-[22px]">What our customers says</h2>
                <span className="text-sm max-sm:w-full text-gray-500 hidden max-sm:flex">Send crypto to fiat globally with unmatched speed, security, and low fees.</span>
            </div>
          <div className="flex gap-2 max-sm:hidden">
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
          {testimonials.map((testimonial, index) => {

              // Show only relevant items based on screen size and current index
              const isVisible = (
                // On mobile, show only the current item
                (index === currentIndex) ||
                // On larger screens, show more items based on the breakpoint
                (window.innerWidth >= 768 && index >= currentIndex && index < currentIndex + itemsToShow.md) ||
                (window.innerWidth >= 1024 && index >= currentIndex && index < currentIndex + itemsToShow.lg) ||
                (window.innerWidth >= 1280 && index >= currentIndex && index < currentIndex + itemsToShow.xl)
              );

            return(
            <div 
              key={testimonial.id}
              className={`${ isVisible ? 'flex-1' : 'hidden'} bg-gray-50 rounded-2xl p-6 space-y-4`}
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
            </div>)
          })}
        </div>
        <div className="max-sm:flex w-full justify-center my-4 gap-2 hidden">
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
    </div>
  );
};

export default TestimonialsSection;