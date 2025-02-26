import React from 'react';
import { LuInstagram } from "react-icons/lu";
import AOS from 'aos';

AOS.init()


const Gallery = () => {
    return (
        <div className='font-signika'>
            <div className='md:h-[30vh] rounded-xl h-[20vh] relative'>
                <img className='h-full rounded-xl w-full' src='/gacover.jpg' alt="Gallery Cover" />
                <div className='bg-black rounded-xl opacity-40 w-full top-0 h-full absolute'></div>
                <div className='absolute rounded-2xl flex justify-center items-center top-0 w-full h-full'>
                    <h2 className='md:text-4xl text-3xl font-bold text-white'>Gallery</h2>
                </div>
            </div>
            <div className='mx-2 py-4  justify-between md:flex md:mx-0'>
                <div className='w-2/5'>
                    <h2 className='text-xl mt-4'>Our Photos</h2>
                    <a href='/' className='cursor-pointer flex items-center gap-2 text-xl'>
                        <img className='w-12' src='/logo.png' alt='logo' />
                        <span>Delish</span>
                    </a>
                </div>
                <div className='grid grid-cols-1 md:w-3/5 justify-center items-center md:grid-cols-3 lg:gap-8 gap-4 text-center'>
                    <div className=''>
                        <h2 className='text-3xl font-bold'>1976</h2>
                        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>50K</h2>
                        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>29+</h2>
                        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</p>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='grid   grid-cols-3 md:my-8 max-w-[1300px] mx-auto md:gap-4  gap-1 '>
                <div className='cursor-pointer '>
                    <img data-aos-duration="1000" data-aos="zoom-in" className='rounded-tl-2xl w-full h-full' src='/g1.jpg' alt='Gallery Image 1' />
                </div>
                <div className=' cursor-pointer '>
                    <img data-aos-duration="1000" data-aos="zoom-in" className='w-full h-full' src='/g2.jpg' alt='Gallery Image 2' />
                </div>
                <div className=' cursor-pointer row-span-2'>
                    <img data-aos-duration="2000" data-aos="zoom-in" className='w-full h-full object-cover rounded-r-2xl' src='/g4.jpg' alt='Gallery Image 4' />
                </div>
                <div className='col-span-2 cursor-pointer  '>
                    <img data-aos-duration="2000" data-aos="zoom-in" className='w-full h-full rounded-bl-2xl' src='/g3.jpg' alt='Gallery Image 3' />
                </div>

            </div>
            <h2 className='text-3xl text-center'>Our Instagram Post </h2>
            <div className='my-4 max-w-[1300px] gap-1 mx-auto grid grid-cols-5'>
                <div className='cursor-pointer group relative'>
                    <img data-aos-duration="1000" data-aos="fade-up"
                        className='h-full' src="/g5.jpg" alt="" />
                    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                    <div className="absolute top-0 text-white flex justify-center h-full items-center w-full  text-3xl    opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                        <LuInstagram />

                    </div>
                </div>
                <div className='cursor-pointer group relative'>
                    <img data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="200" className='h-full' src="/g6.jpg" alt="" />
                    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                    <div className="absolute top-0 text-white flex justify-center h-full items-center w-full  text-3xl    opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                        <LuInstagram />

                    </div>
                </div>
                <div className='cursor-pointer group relative'>
                    <img data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="300" className='h-full' src="/g7.jpg" alt="" />
                    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                    <div className="absolute top-0 text-white flex justify-center h-full items-center w-full  text-3xl    opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                        <LuInstagram />

                    </div>
                </div>
                <div className='cursor-pointer group relative'>
                    <img data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="400" className='h-full' src="/g8.jpg" alt="" />
                    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                    <div className="absolute top-0 text-white flex justify-center h-full items-center w-full  text-3xl    opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                        <LuInstagram />

                    </div>
                </div>
                <div className='cursor-pointer group relative'>
                    <img data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="500" className='h-full' src="/g9.jpg" alt="" />
                    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                    <div className="absolute top-0 text-white flex justify-center h-full items-center w-full  text-3xl    opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                        <LuInstagram />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
