import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

AOS.init();

const slidesData = [
    {
        title: "Taste the Tradition, Feel the Passion",
        description: "Handcrafted Dishes Made with Love. Join Us for an Unforgettable Dining Experience.",
        image: "/s1.png",
        cta: "Explore Our Menu",
        discound:'/f1.png',
        words: ['Delicious', 'Fresh', 'Authentic', 'Irresistible'],
        bgColor: 'bg-gradient-to-r from-red-800 via-red-600 to-red-700'
    },
    {
        title: "Flash Sale Chicken Burger Take ",
        description: "Our dishes are crafted with the finest ingredients to bring you authentic flavors.",
        off:'20% off',
        discound:'/f2.png',
        image: "/s2.png",
        cta: "Discover More",
        words: ['Organic', 'Savory', 'Tasty', 'Wholesome'],
        bgColor: 'bg-gradient-to-r from-green-800 via-green-600 to-green-700'
    },
    {
        title: "Experience Premium Pizza Like Never Before",
        description: "Join us for a culinary journey where taste meets elegance.Handcrafted Dishes Made .",
        image: "/s4.png",
        discound:'/f3.png',
        cta: "Book a Table",
        words: ['Elegant', 'Exquisite', 'Luxurious', 'Flavorful'],
        bgColor: 'bg-gradient-to-r from-teal-800 via-teal-600 to-teal-700'
    }
];

const Slider = () => {
    return (
        <div className='border bg- font-signika'>
            <Swiper
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`${slide.bgColor} h-[50vh] text-white flex flex-col md:flex-row px-4 py-8 md:px-12 lg:px-32 items-center justify-between gap-6`}>
                            <div className='max-w-3xl space-y-4 text-center md:text-left'>
                                <p className='text-xl lg:text-3xl'>The Food We Have <span className='text-yellow-400'>
                                    <Typewriter 
                                        words={slide.words} 
                                        loop={0} // Infinite loop
                                        cursor
                                        cursorStyle='|' 
                                        typeSpeed={80} 
                                        deleteSpeed={50} 
                                        delaySpeed={1500} 
                                    />
                                </span></p>

                                <h2 
                                    data-aos='fade-up' 
                                    data-aos-duration="1000" 
                                    className='text-4xl lg:text-6xl font-bold leading-tight'
                                >
                                    {slide.title}
                                    <span className='text-orange-400'>{slide?.off}</span></h2>

                                <p 
                                    data-aos='fade-up' 
                                    data-aos-duration="2000" 
                                    data-aos-delay="500" 
                                    className='font-light text-lg lg:text-xl text-gray-300'
                                >
                                    {slide.description}
                                </p>

                                <Link to="/all-food">
                                    <button className='mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105'>
                                        {slide.cta}
                                    </button>
                                </Link>
                            </div>

                            <div className='hidden md:flex relative justify-end w-full'>
                                <motion.img 
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }} 
                                    data-aos='zoom-in' 
                                    data-aos-duration="1000" 
                                    className='w-[80%] max-w-md ' 
                                    src={slide.image} 
                                    alt="Delicious Food" 
                                />
                                <div className='absolute top-8 right-10 '>
                                    <motion.img 
                                    animate={{ y: [0, 10, 0] }}
                                    className='w-14 bg-white rounded-full'
                                    transition={{ duration: 5, repeat: Infinity }} 
                                    src={slide?.discound} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
