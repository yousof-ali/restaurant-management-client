import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import CommonButton from '../../Components/CommonButton';


const Error = () => {
    return (
        <div className='bg-amber-50'>
            <div className='max-w-[1000px]  min-h-screen hero-content flex flex-col mx-auto'>
                <div className='flex gap-10  items-center p-4 justify-center'>
                    <div className='flex-1'>
                        <motion.img src="/4.png"
                            alt="" />
                    </div>
                    <div className='flex-1'>
                        <motion.img src="/02.png"
                            animate={{ y: [0, 30, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            alt="" />
                    </div>
                    <div className='flex-1'>
                        <img src="/4.png" alt="" />
                    </div>
                </div>
                <div className='space-y-4 text-center mt-4'>
                    <h2 className='md:text-6xl text-5xl font-signika'>Page Not Found.</h2>
                    <p className='text-lg'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to={'/'}><CommonButton text={'Back to Home'}></CommonButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;