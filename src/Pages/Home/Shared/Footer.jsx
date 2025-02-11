import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div className="bg-[url('/bg-foot.png')] font-signika  bg-[#003246]">
            <footer className="footer  md:flex justify-between max-w-[1600px]  mx-auto text-white p-10">
                <nav className='flex-1'>
                    <h6 className="footer-title text-2xl">Contact</h6>
                    <a className="link text-[16px] flex items-center gap-2 link-hover"><span><FaLocationDot />
                    </span>New Elephant Road, Dhaka-1205</a>
                    <a className="link text-[16px] flex items-center gap-2 link-hover"><span><IoCall />
                    </span>+8801 987 654321</a>
                    <a className="link text-[16px] flex items-center gap-2 link-hover"><span><IoMail />
                    </span>info@delish.com</a>
                </nav>
                <aside className='flex-1'>
                    <div className='flex  items-center w-full justify-center  gap-2'>
                        <img className='w-16 cursor-pointer h-16 p-2 bg-white rounded-full' src="/logo.png" alt="" />
                        <span className='text-2xl font-semibold font-signika'>Delish</span>
                    </div>
                    <p className='text-center w-full '>
                        Restaurant Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <div className='flex w-full items-center justify-center mt-2 gap-4'>
                        <Link to={'https://facebook.com'}>
                            <img  className='w-8 bg-white rounded-xl' src="/fb.png" alt="facebook" />
                        </Link>
                        <Link to={'https://www.instagram.com'}>
                            <img className='w-8 rounded-xl bg-white' src="/insta.png" alt="instagram" />
                        </Link>
                        <Link to={'https://x.com'}>
                            <img className='w-8 rounded-xl bg-white' src="/x.png" alt="x" />
                        </Link>
                    </div>
                </aside>
                <nav className='flex-1 md:flex flex-col items-end' >
                    <h6 className="footer-title text-2xl">Services</h6>
                    <a className="link text-[16px] link-hover">Open At : 8AM - 12PM</a>
                    <a className="link text-[16px] link-hover">Branding</a>
                    <a className="link text-[16px] link-hover">About</a>

                </nav>
             


            </footer>
            <div className="divider max-w-[1600px] mx-auto m-0 divider-accent"></div>

            <p className='text-white py-4 text-sm text-center'>&copy; 2025 Delish. All Rights Reserved.</p>
          
        </div>
    );
};

export default Footer;