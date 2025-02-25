import React from 'react';
import { MdOutlineEdit } from "react-icons/md";

const UpdateButton = ({ onClick, className,disabled }) => {
  return (
      <button 
          onClick={onClick} 
          disabled = {disabled}
          className={`relative px-6 py-2 bg-cyan-600 cursor-pointer font-semibold text-white rounded-md overflow-hidden group ${className}`}
      >
          <span className="absolute inset-0 w-full h-full bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
          <span className="relative flex gap-2 items-center"><MdOutlineEdit />UPDATE</span>
      </button>
  );
};

export default UpdateButton;
