import React from 'react';
import { Link } from 'react-router-dom';

const OurNews = () => {
    return (
        <div className='max-w-[1400px] mx-auto
        my-10'>
            <h2 className='text-4xl text-center font-bold mb-4'>Our Latest News</h2>
            <div className='flex flex-col mx-2 md:flex-row gap-6'>
               <div className='flex-1 overflow-hidden'>
                <img className=' w-full max-h-[350px] cursor-pointer transition-transform duration-800  transform hover:scale-110' src="/n1.jpg" alt="" />
               </div>
               <div className='flex-1 md:mt-6'>
                  <p className='text-red-500 font-bold'>News</p>
                  <h2 className='text-2xl'>New Appetizers</h2>
                  <p className='text-sm text-gray-500'>10 JANUARY</p>
                  <p className='my-4'>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                  Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                  </p>
                  <Link to={'/blog'}><button className='btn bg-red-500 text-white'>Read More</button></Link>
               </div>
            </div>
            <div className='flex flex-col mx-2 mt-4 md:flex-row-reverse gap-6'>
            
               <div className='flex-1 overflow-hidden'>
                <img className='w-full max-h-[350px] cursor-pointer transition-transform duration-800  transform hover:scale-110' src="/n2.jpg" alt="" />
               </div>
               <div className='flex-1 md:mt-6'>
                  <p className='text-red-500 font-bold'>News</p>
                  <h2 className='text-2xl'>Inauguration</h2>
                  <p className='text-sm text-gray-500'>06 JANUARY</p>
                  <p className='my-4'>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                  Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                  </p>
                  <Link to={'/blog'}><button className='btn bg-red-500 text-white'>Read More</button></Link>
               </div>
               
            </div>
            <div>

            </div>
        </div>
    );
};

export default OurNews;