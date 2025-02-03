import React, { useState, useEffect } from 'react';
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
      author: "Sarah Williams",
      role: "Marketing Director",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      rating: 5,
      avatar: user2
    },
    {
      id: 3,
      author: "Michael Chen",
      role: "Senior Developer",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      rating: 5,
      avatar: user3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerView(4);
      else if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? testimonials.length - itemsPerView : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > testimonials.length - itemsPerView ? 0 : newIndex;
    });
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-1 bg-gray-50 rounded-2xl p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star 
            key={index} 
            className="h-5 w-5 fill-yellow-400 text-yellow-400" 
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-lg font-medium text-gray-600">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
          </span>
        </div>
        <div className="space-y-1">
          <h4 className="font-medium text-sm">{testimonial.author}</h4>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  const NavigationButton = ({ onClick, direction }) => (
    <button 
      onClick={onClick}
      className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
      aria-label={`${direction} testimonial`}
    >
      {direction === 'previous' ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-8 lg:py-16 flex flex-col items-center bg-white">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-green-700" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="font-bold">TrustPilot</span>
              <span className="text-sm text-gray-500 hidden md:inline">
                Our reviews verified by Trustpilot
              </span>
            </div>
            <span className="text-sm text-gray-500 md:hidden">
              Our reviews verified by Trustpilot
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">
              What our customers say
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <NavigationButton onClick={handlePrevious} direction="previous" />
            <NavigationButton onClick={handleNext} direction="next" />
          </div>
        </div>
        
        <div className="flex gap-6 overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + itemsPerView;
            return isVisible && (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            );
          })}
        </div>

        <div className="flex md:hidden justify-center mt-6 gap-2">
          <NavigationButton onClick={handlePrevious} direction="previous" />
          <NavigationButton onClick={handleNext} direction="next" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;