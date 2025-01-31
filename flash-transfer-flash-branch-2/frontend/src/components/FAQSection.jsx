import React, { useState } from 'react';
import { ChevronDown, Minus, Plus } from 'lucide-react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-2xl h-full dm-sans p-4  border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-[15px] text-gray-900 font-medium">{title}</h3>
         {!isOpen ? <Plus /> : <Minus />}
      </button>
      
      {isOpen && (
        <div className="pb-4">
          <p className="text-[13px] text-gray-600 leading-relaxed">
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