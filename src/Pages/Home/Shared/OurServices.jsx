import React from 'react';

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
            
        </div>
    );
};

export default OurServices;