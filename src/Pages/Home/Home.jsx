import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Slider from './Shared/Slider';
import Cate from './Shared/Cate';
import TopPurchase from './Shared/TopPurchase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurChefTeam from './Shared/OurChefTeam';

AOS.init();

const Home = () => {
    const [totalPrduct,setTotalProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/total-document`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setTotalProduct(result)
        })
    },[])
    return (
        <div className='font-signika'>
            <Slider />
            <Cate />
            <TopPurchase />
            <OurChefTeam></OurChefTeam>
            <div className="relative h-[20vh] w-full">
                <div className="absolute inset-0 bg-[url('/sbackground.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 backdrop-blur-md"></div>
                <div className="relative z-10 overflow-x-auto flex items-center justify-evenly gap-6 h-full text-white text-3xl font-bold">
                    <div className='text-center'>
                        <h2 className='md:text-6xl'>
                            <CountUp start={0} end={823} duration={3} />+
                        </h2>
                        <p data-aos='fade-up' data-aos-duration="2000" className='md:text-lg text-sm font-light'>POSITIVE REVIEW</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='md:text-6xl '>
                            <CountUp start={0} end={totalPrduct.totalDocument} duration={3} />
                        </h2>
                        <p data-aos='fade-up' data-aos-duration="2000" className='md:text-lg text-sm font-light'>TOTAL PRODUCT</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='md:text-6xl'>
                            <CountUp start={0} end={20} duration={3} />
                        </h2>
                        <p data-aos='fade-up' data-aos-duration="2000" className='md:text-lg text-sm font-light'>STAFF MEMBERS</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='md:text-6xl'>
                            <CountUp start={0} end={10} duration={3} />
                        </h2>
                        <p data-aos='fade-up' data-aos-duration="2000" className='md:text-lg text-sm font-light'>YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
