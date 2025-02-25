import React from 'react';
import { MdDelete } from "react-icons/md";


const UpdateButton = ({ onClick, className,disabled }) => {
  return (
      <button 
          onClick={onClick} 
          disabled = {disabled}
          className={`relative px-6 py-2 bg-rose-400 cursor-pointer font-semibold text-white rounded-md overflow-hidden group ${className}`}
      >
          <span className="absolute inset-0 w-full h-full bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
          <span className="relative flex gap-2 justify-center items-center"><MdDelete />Delete</span>
      </button>
  );
};

export default UpdateButton;
