import React from 'react';
import Slider from './Shared/Slider';
import Cate from './Shared/Cate';
import TopPurchase from './Shared/TopPurchase';

const Home = () => {
    return (
        <div className='font-signika'>
            <Slider></Slider>
            <Cate></Cate>
            <TopPurchase></TopPurchase>
        </div>
    );
};

export default Home;