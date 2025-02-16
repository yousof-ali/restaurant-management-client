import React from 'react';
import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';
import { CiHeart } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";



const FoodCard = ({ food }) => {
    const {_id, name, image, quantity, price, description } = food
    return (
        <div className="group border border-gray-400 bg-[#f2f6ff] hover:bg-white hover:shadow-xl hover:border-green-500 rounded-xl   duration-500 transition-transform hover:-translate-y-0.5">
            <div className='max-w-[372px] rounded-t-xl relative overflow-hidden max-h-[310px] '>
                <img
                    className="w-full h-full rounded-t-xl transition-transform duration-800 transform group-hover:scale-110"
                    src={image}
                    alt="Food" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                <div className="absolute text-2xl top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                    <button className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-200">
                    <CiHeart />
 
                    </button>
                    <button className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-200">
                    <IoIosLink />
 
                    </button>
                </div>
            </div>
            <div className="p-4 lg:p-6">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm text-gray-500'>{description.length > 70 ? `${description.slice(0, 70)}...` : description}</p>
                <p className='text-gray-700 text-sm my-2'>In Stock : <span className='text-black'>{quantity}</span> Pices</p>
                <p className='text-gray-700 mt-4'><span className='text-black'>{price}</span> Taka</p>

                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}> 
                    <CommonButton text={"Details"}></CommonButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;