import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const OurChefTeam = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('/ourChef.json')
      .then(res => res.json())
      .then(result => {
        setChefs(result);
      });
  }, []);

  return (
    <div className="my-10 md:my-14 rounded-xl overflow-hidden">
      <div className="relative w-full min-h-[60vh] flex max-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chefbanner.jpg')] bg-cover bg-center"></div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative w-full flex items-center justify-center md:justify-start px-4 md:px-10 z-10">
          <div className="w-full my-4 md:w-1/2 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg max-h-[85vh] overflow-y-auto">
            <h2 className="text-center text-white text-2xl font-semibold mb-4">Meet Our Chefs</h2>

            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              className="w-full"
            >
              {chefs.map((single, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center text-white">
                  <div className="bg-white/20  mx-auto max-w-[500px] p-4 rounded-lg shadow-md">
                    <img className="w-full max-h-[300px] rounded-lg object-cover shadow-md" src={single.chef_image} alt={single.name} />
                    <div className="p-4">
                      <p className="text-sm text-gray-300">#{single.chef_id}</p>
                      <h3 className="text-xl font-semibold">{single.name}</h3>

                      <div className="flex justify-between items-center mt-2">
                        <span className="flex gap-2 items-center">
                          <img src="/chef.png" className="w-8" alt="Specialty Icon" />
                          <span className="text-sm">{single.specialty}</span>
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm">{single.experience} years of experience</p>

                      <div className="flex items-center gap-2 mt-4">
                        <img src="/resurent.png" className="w-6" alt="Restaurant Icon" />
                        <p className="text-sm">{single.restaurant}</p>
                      </div>
                      <p className="text-xs  ml-10">{single.chef_country}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='text-white hidden md:flex flex-col w-1/2 justify-center    mx-auto'>
          <h2 className='md:text-4xl mb-6 text-center font-bold'>What Makes Our Chefs Unique?</h2>
          <div className='ml-12 space-y-2'>
            <p className='flex items-center'><img className='w-10' src="/awar.png" alt="" /><p>
            <span className='text-lg font-bold text-green-500'> Award-Winning Talent </span> – Our chefs are globally recognized for their innovative cuisine.</p></p>
            
            <p className='flex items-center'><img className='w-10' src="/inge.png" alt="" /><p>
            <span className='text-lg font-bold text-green-500'> Fresh & High-Quality Ingredients </span> – Sourced locally and globally for an authentic taste.</p></p>
            <p className='flex items-center'><img className='w-10' src="/expert.png" alt="" /><p>
            <span className='text-lg font-bold text-green-500'>  Expertise & Passion  </span> – From traditional recipes to modern gastronomy, they create magic on every plate.</p></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChefTeam;
