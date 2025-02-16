import React, { useEffect, useState } from 'react';
import CommonButton from '../../Components/CommonButton'
import { CiSearch } from "react-icons/ci";
import FoodCard from '../../Components/FoodCard';


const AllFood = () => {
    const [allfood,setAllFood] = useState([]);
    useEffect(() => {
        fetch('/food.json')
        .then(res => res.json())
        .then(result => {
            setAllFood(result)
        })
    },[])
    return (
        <div className='font-signika'>
            <div className='rounded-md  relative'>
                <img className='h-[30vh] w-full' src="/allFood.png" alt="" />
                <div className='bg-black absolute top-0 w-full h-full opacity-50'>
                    
                </div>
                <div className='absolute md:top-20 md:left-[25%] top-18 left-5 lg:top-[45%] lg:left-[30%] text-white font-bold font-signika '>
                <h2 className='md:text-4xl text-3xl'>
                Discover Delicious Combos
                    </h2>
                </div>
            </div>
            <div className='md:flex mx-2 pt-8 pb-4 items-center'>
            <div className='flex-1'>
                <h2 className='text-3xl'>Our All Foods</h2>
                <p className='text-gray-500'>Explore a variety of delicious food combinations to suit every taste. Find the perfect dish and make your meal unforgettable!
                </p>
            </div>
            <div className='flex-1  mt-4 flex  justify-end '>
                <input className='rounded-l-full  outline-0 border-r-0 w-[60%] md:w-[60%]  p-2' placeholder= 
                "Enter a food name"></input>
                <CommonButton className={'rounded-r-full border border-black border-l-0'} text={'Search'}></CommonButton>
            </div>
            </div>
            <div className='divider'></div>

            <div className='grid grid-cols-1 py-4 md:gap-6 gap-4 px-2 md:px-4 md:grid-cols-3 lg:grid-cols-4 '>
                {
                    allfood.map(food => <FoodCard food={food} key={food.name}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;
