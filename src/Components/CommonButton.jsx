import React from 'react';

const CommonButton = ({ text, onClick, className,disabled }) => {
  return (
      <button 
          onClick={onClick} 
          disabled = {disabled}
          className={`relative px-6 py-2 bg-green-600 cursor-pointer font-semibold text-white rounded-md overflow-hidden group ${className}`}
      >
          <span className="absolute inset-0 w-full h-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
          <span className="relative">{text}</span>
      </button>
  );
};

export default CommonButton;
