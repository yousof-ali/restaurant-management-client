import React from 'react';

const BlueButton = ({ text, onClick, icon, className, disabled }) => {
    return (
        <button 
            onClick={onClick} 
            disabled = {disabled}
            className={`relative px-6 py-2 bg-orange-500 cursor-pointer font-semibold text-white rounded-md overflow-hidden group ${className}`}
        >
            <span className="absolute inset-0 w-full h-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            <span className="relative justify-center flex items-center gap-2">{text}{icon}</span>
        </button>
    );
  };

export default BlueButton;
