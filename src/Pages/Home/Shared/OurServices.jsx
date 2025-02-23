import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const OurServices = () => {
    return (
        <div className='py-8'>
            <h2 className='text-center text-4xl font-bold my-6'>Our Services</h2>
            <div className='grid md:grid-cols-2 gap-4 lg:gap-2 lg:grid-cols-4'>
            <div className='flex hover:shadow-2xl p-4 rounded duration-500'>
                <img className='w-18' src="/ser5.png" alt="" />
                <div>
                <h2 className='font-semibold text-xl mb-2 text-green-400'>Dine-In Experience</h2>
                
                    <div className='font-light text-sm '>
                    <p>Cozy ambiance with comfortable seating</p>
                    <p>Family-friendly atmosphere</p>
                    </div>
                 
                </div>
                
               
            </div>
            <div className='flex hover:shadow-2xl p-4 gap-2 rounded duration-500'>
                <img className='w-18' src="/ser1.png" alt="" />
                <div>
                <h2 className='font-semibold text-xl text-green-400'>Catering Servicese</h2>
                
                    <div className='font-light text-sm '>
                    <p>Custom menu options for events</p>
                    <p>Catering for weddings, corporate meetings, and partiese</p>
                    </div>
                 
                </div>
                
               
            </div>
            <div className='flex hover:shadow-2xl p-4 gap-2 rounded duration-500'>
                <img className='w-18' src="/ser3.png" alt="" />
                <div>
                <h2 className='font-semibold text-xl mb-2 text-green-400'>Takeaway & Online Ordering</h2>
                
                    <div className='font-light text-sm '>
                    <p>Quick and easy pickup service</p>
                    <p>Order through the website/app for convenience</p>
                    </div>
                 
                </div>
                
               
            </div>
            <div className='flex gap-2 hover:shadow-2xl p-4 rounded duration-500'>
                <img className='w-18' src="/ser4.png" alt="" />
                <div>
                <h2 className='font-semibold text-xl mb-2 text-green-400'> Home Delivery</h2>
                
                    <div className='font-light text-sm '>
                    <p>Fast and fresh food delivered to your doorstep</p>
                    <p>Partnered with delivery service</p>
                    </div>
                 
                </div>
                
               
            </div>
            
            </div>
            <div className='lg:mt-12 mt-8'>
                <div  className='relative max-w-[800px]   mx-auto'>
                    <img className='w-full rounded h-[400px]' src="/servicesback.jpg
                    " alt="" />
                    <div data-aos="fade-up"  data-aos-duration="1000" className='absolute rounded w-1/2 h-1/2 bg-green-500 p-4 top-0 left-0 lg:-left-1/4'>
                    <h2 className='text-center text-xl font-bold text-white mb-4'>OPENING TIMES</h2>
                    <p className='text-white flex justify-between text-sm'><span>MON</span><span>17.00 to 23:00</span></p>
                    <p className='text-white text-sm my-2 flex justify-between'><span>WED</span><span>19.00 to 24:00</span></p>
                    <p className='text-white text-sm flex justify-between'><span>THU</span><span>14.00 to 18:00</span></p>
                    <p className='text-white text-sm flex justify-between'><span>SAT</span><span>14.00 to 18:00</span></p>

                    </div>
                    <div   data-aos="fade-up" data-aos-duration="1000" className='absolute p-4 rounded w-1/2 h-1/2 bg-red-500 bottom-0 right-0 lg:-right-1/4'>
                    <h2 className='text-center text-xl mt-4 font-bold text-white mb-4'>FIND US HERE</h2>
                    <div className='text-center'>
                    <p className='text-sm text-white'>Avenue Marina 34568 NY (U.S)</p>
                    <p className='text-sm text-white'>+1 374 474 637</p>
                    <p className='text-sm text-white'>info@restaurant.com</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OurServices;