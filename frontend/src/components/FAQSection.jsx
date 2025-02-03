import React, { useState } from 'react';
import { ChevronDown, Minus, Plus } from 'lucide-react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-2xl h-full dm-sans p-4  border-[#D3D8DD]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center max-sm:gap-6 justify-between text-left"
      >
        <h3 className="text-[15px] max-sm:text-[20px] text-[#181F30] font-semibold">{title}</h3>
         {!isOpen ? <Plus size={28} /> : <Minus size={28} />}
      </button>
      
      {isOpen && (
        <div className="pb-4 max-sm:mt-3">
          <p className="text-[13px] text-[#6E757D] max-sm:text-[15px] pr-8 leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ title, content }) => {
  return (
    <Accordion title={title}>
        {content}
    </Accordion>
  );
};

export default FAQSection;