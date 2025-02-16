
import { button } from 'motion/react-client';
import React, { useEffect, useId, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import CommonButton from '../../Components/CommonButton';


const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/single-food/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [id])
    const { name, image, category, origin, quantity, price, rating, description, cooking_time, ingredients, chef_special, chef_name, chef_id } = data
    return (
        <div className='font-signika'>
            <div className='md:h-[30vh] h-[20vh] relative'>
                <img className='h-full w-full' src='/details.jpg' alt="" />
                <div className='bg-black opacity-40 w-full top-0 h-full absolute'>

                </div>
                <div className='absolute flex justify-center items-center top-0 w-full h-full'>
                    <h2 className='md:text-4xl text-3xl font-bold  text-white  '>Food Details</h2>
                </div>
            </div>
            <div className='md:flex mx-4  md:gap-4 lg:gap-8 my-6  '>
                <div className='md:w-1/2  max-h-[500px]'>
                    <img className='w-full rounded-2xl h-full' src={image} alt="" />
                </div>
                <div className='mt-4 md:w-1/2 md:mt-0'>
                    <h2 className='md:text-4xl text-2xl font-semibold '>{name}</h2>
                    <p className='text-gray-500'>{category}</p>
                    <div className="flex text-yellow-500 text-xl">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index}>{index < Math.round(rating) ? '★' : '☆'}</span>
                        ))}
                    </div>
                    <div className='divider'></div>
                    <h2 className='text-xl  mb-2 font-bold'>Other Info</h2>
                    <div className='text-gray-700 text-xl ml-2 '>
                        <p>{description}</p>
                        <div className='flex gap-6 my-2'>
                            <p className='flex items-center gap-2'><img className='w-8' src="/origin.png" alt="" />{origin}</p>
                            <p className='flex items-center gap-2'><img className='w-8' src="/time.png" alt="" />{cooking_time}</p>
                        </div>
                        <h2 className='text-black mt-4 font-bold'>Ingredients</h2>

                        <ul className="flex flex-wrap mt-2 gap-2">
                            {ingredients?.map((item, index) => (
                                <li key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                                    {item}
                                </li>
                            ))}
                        </ul>


                        <p className=' font-bold   my-4'>Stock In : <span className='text-gray-500'>{quantity} Pices</span> </p>
                        <p className='flex text-xl  items-center'>
                            <TbCurrencyTaka />
                            <span className='text-3xl font-bold'>{price}</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-4 mt-7'>
                        <CommonButton className={''} text={"Purchse Now"}></CommonButton>
                        <button className='btn btn-secondary'>Add to Card</button>
                    </div>
                </div>


            </div>
            <div className='divider'></div>
            <div className='md:flex mx-2 gap-4 py-8 lg:gap-6'>
                <div className='md:w-1/2'>
                  
                    <h2 className='text-3xl font-bold mb-4 '>What Chef Says..</h2>
                    <div className='mx-4  text-gray-600'>
                    <img className='inline mb-2' src="/qutes.png" alt="" />
                    <p className='inline'>{chef_special}</p>
                    <img className='inline mt-2' src="/qutes2.png" alt="" />
                    </div>
                    <div className='flex gap-2 justify-end mt-4 '>
                        <img className='rounded-full border' src="/" alt="chef" />
                        <div>
                        <h2 className='text-xl font-bold'>{chef_name}</h2>
                        <p className='text-gray-500'>#{chef_id}</p>
                        </div>
                    </div>
                </div>
                <div className='md:ml-6'>
                    <h2 className='text-3xl font-bold mb-4'>Related Product</h2>
                </div>
            </div>

        </div>
    );
};

export default Details;