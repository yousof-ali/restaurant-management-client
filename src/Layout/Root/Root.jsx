import React from 'react';
import Header from '../../Pages/Home/Shared/Header';
import Footer from '../../Pages/Home/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
            <Header></Header>
            <div className='max-w-[1600px] min-h-[60vh] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;