import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teamMember1Img, teamMember2Img, teamMember3Img, teamMember4Img } from '../assets/image';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aladdin',
      role: 'CEO & Founder',
      image: teamMember1Img
    },
    {
      id: 2,
      name: 'Aladdin',
      role: 'CEO & Founder',
      image: teamMember2Img
    },
    {
      id: 3,
      name: 'Aladdin',
      role: 'CEO & Founder',
      image: teamMember3Img
    },
    {
      id: 4,
      name: 'Aladdin',
      role: 'CEO & Founder',
      image: teamMember4Img
    },
    {
      id: 5,
      name: 'Aladdin',
      role: 'CEO & Founder',
      image: teamMember2Img
    }
  ];
  
  const [startIndex, setStartIndex] = useState(0);

  // Calculate items to show based on screen size
  const itemsToShow = {
    sm: 1,    // Small screens
    md: 2,    // Medium screens
    lg: 3,    // Large screens
    xl: 4     // Extra large screens
  };

  const handlePrevious = () => {
    setStartIndex((prev) => {
      const maxStartIndex = teamMembers.length - 1;
      return prev === 0 ? maxStartIndex : prev - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const maxStartIndex = teamMembers.length - 1;
      return prev === maxStartIndex ? 0 : prev + 1;
    });
  };

  return (
    <div className="w-full bg-gray-50 py-8 md:py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-3xl dm-sans-medium text-center md:text-left">
            The amazing team<br />behind our company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300">
          {teamMembers.map((member, index) => {
            // Show only relevant items based on screen size and current index
            const isVisible = (
              // On mobile, show only the current item
              (index === startIndex) ||
              // On larger screens, show more items based on the breakpoint
              (window.innerWidth >= 768 && index >= startIndex && index < startIndex + itemsToShow.md) ||
              (window.innerWidth >= 1024 && index >= startIndex && index < startIndex + itemsToShow.lg) ||
              (window.innerWidth >= 1280 && index >= startIndex && index < startIndex + itemsToShow.xl)
            );

            return (
              <div 
                key={member.id}
                className={`transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-3xl p-4 shadow-sm">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-contain rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-lg dm-sans-medium">{member.name}</h3>
                    <p className="text-sm text-gray-600 dm-sans-light">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="flex gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;