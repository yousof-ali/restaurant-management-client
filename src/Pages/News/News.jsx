import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div>
            <div className='rounded-md  relative'>
                <img className='md:h-[30vh] h-[20vh] rounded-xl w-full' src="/newsbanner.jpg" alt="" />
                <div className='bg-black absolute rounded-xl top-0 w-full h-full opacity-50'>

                </div>
                <div className='absolute flex rounded-xl justify-center items-center top-0 w-full h-full'>
                    <h2 className='md:text-4xl text-white text-3xl'>
                        Our Latest News
                    </h2>
                </div>

            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-30 py-14'>

                <div className='lg:col-span-21'>
                    <h2 className='text-2xl my-6  ml-2 font-semibold text-gray-400'>Newest</h2>
                    <div>
                        <div className='flex flex-col mx-2 md:flex-row gap-6'>
                            <div className='flex-1 rounded-2xl overflow-hidden'>
                                <img className=' w-full  rounded-2xl max-h-[350px] cursor-pointer transition-transform duration-800  transform hover:scale-110' src="/n3.jpg" alt="" />
                            </div>
                            <div className='flex-1 md:mt-6'>
                                <p className='text-red-500 font-bold'>New</p>
                                <h2 className='text-2xl'>Special Valentine's Dinner</h2>
                                <p className='text-sm text-gray-500'>25 FEBRUARY</p>
                                <p className='my-4'>Celebrate love with an exclusive candlelit dinner featuring a special three-course meal curated by our head chef. From heart-shaped desserts to sparkling champagne, we’ve prepared a romantic evening just for you!
                                </p>
                                <Link to={'/news'}><button className='btn bg-red-500 text-white'>Read More</button></Link>
                            </div>
                        </div>
                        <div className='flex flex-col mx-2 mt-4 md:flex-row-reverse gap-6'>

                            <div className='flex-1 rounded-2xl overflow-hidden'>
                                <img className='rounded-2xl w-full max-h-[350px] cursor-pointer transition-transform duration-800  transform hover:scale-110' src="/n4.jpg" alt="" />
                            </div>
                            <div className='flex-1 md:mt-6'>
                                <p className='text-red-500 font-bold'>New</p>
                                <h2 className='text-2xl'>Chef’s Special Tasting Menu</h2>
                                <p className='text-sm text-gray-500'>17 FEBRUARY</p>
                                <p className='my-4'>Our talented chef has created a special limited-time tasting menu featuring locally sourced ingredients and exquisite flavors. This five-course experience is a must-try for food lovers!
                                </p>
                                <Link to={'/news'}><button className='btn bg-red-500 text-white'>Read More</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col mx-2 md:flex-row gap-6'>
                        <div className='flex-1 rounded-2xl overflow-hidden'>
                            <img className=' w-full  rounded-2xl max-h-[350px] cursor-pointer transition-transform duration-800  transform hover:scale-110' src="/n5.jpg" alt="" />
                        </div>
                        <div className='flex-1 md:mt-6'>
                            <p className='text-red-500 font-bold'>New</p>
                            <h2 className='text-2xl'>New Vegan Delights Added to Our Menu</h2>
                            <p className='text-sm text-gray-500'>14 FEBRUARY</p>
                            <p className='my-4'>Experience an evening of smooth jazz, handcrafted cocktails, and gourmet dishes. Our live band will set the perfect ambiance while you indulge in an unforgettable night of music and dining!
                            </p>
                            <Link to={'/news'}><button className='btn bg-red-500 text-white'>Read More</button></Link>
                        </div>
                    </div>

                </div>
                <div className='flex items-center col-span-1 my-10 lg:flex-col lg:items-center'>
                    <div className='w-full h-[1px] bg-gray-300 lg:w-[1px] lg:h-full'></div>
                    
                    
                </div>

                <div className='lg:col-span-8'>
                    <h2 className='text-2xl my-6  ml-2 font-semibold text-gray-400'>Older</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8'>
                        <div className='grid gap-2 grid-cols-3'>
                            <img className='col-span-1 rounded h-full' src="/n6.jpg" alt="" />
                            <div className='col-span-2'>
                                <p className='text-sm text-gray-500'>06 JANUARY</p>
                                <h2 className='font-semibold'>Exclusive Cooking Workshop with Our Head Chef</h2>

                                <Link to={'/news'}><button className='btn btn-link text-red-500'>Read More</button></Link>
                            </div>
                        </div>
                        <div className='grid gap-2 grid-cols-3'>
                            <img className='col-span-1 rounded h-full' src="/n7.jpg" alt="" />
                            <div className='col-span-2'>
                                <p className='text-sm text-gray-500'>16 JANUARY</p>
                                <h2 className='font-semibold'>Wine Tasting Evening – Explore Exquisite Wines</h2>


                                <Link to={'/news'}><button className='btn btn-link text-red-500'>Read More</button></Link>
                            </div>
                        </div>
                        <div className='grid gap-2 grid-cols-3'>
                            <img className='col-span-1 rounded h-full' src="/n8.jpg" alt="" />
                            <div className='col-span-2'>
                                <p className='text-sm text-gray-500'>21 JANUARY</p>
                                <h2 className='font-semibold'>Family Fun & Delicious Food</h2>

                                <Link to={'/news'}><button className='btn btn-link text-red-500'>Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;