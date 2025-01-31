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

  const handlePrevious = () => {
    setStartIndex((prev) => (prev === 0 ? teamMembers.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === teamMembers.length - 4 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl dm-sans-medium">The amazing team<br />behind our company</h2>
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

        <div className="flex gap-6 transition-all duration-300">
          {teamMembers.slice(startIndex, startIndex + 4).map((member) => (
            <div 
              key={member.id}
              className="flex-1"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;