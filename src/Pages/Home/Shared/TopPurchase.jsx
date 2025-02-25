import React, { useEffect, useState } from 'react';
import FoodCard from '../../../Components/FoodCard';
import CommonButton from '../../../Components/CommonButton';
import PrimaryButton from "../../../Components/PrimaryButton"
import { Link } from 'react-router-dom';
import Loader from '../../../Components/Loader';
import { FiArrowUpRight } from "react-icons/fi";



const TopPurchase = () => {
    const [topPurchase,setTopPurchase] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/top-purchase')
        .then(res => res.json()
        )
        .then(result => {
            setTopPurchase(result)
        })
    },[])
    return (
        <div className='md:my-10 '>
            <div>
                <h2 className='text-3xl md:ml-2 py-6 font-bold'>Our Top Selling Food</h2>
            </div>
          
            {
                topPurchase.length==0&& <div className='py-24'><Loader></Loader></div>
            }
           
            <div className='grid grid-cols-1 py-4 md:gap-8 gap-4 px-2 md:px-4 lg:px-0 md:grid-cols-4 lg:grid-cols-5 '>
                {
                    topPurchase.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className='flex justify-center my-8'>
            <Link to={'/all-food'}><PrimaryButton icon={<FiArrowUpRight />} text={"All Food"}></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default TopPurchase;