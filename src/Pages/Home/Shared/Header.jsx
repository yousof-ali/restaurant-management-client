import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import CommonButton from '../../../Components/CommonButton';

const Header = () => {
    const links =<>
     <li>< NavLink to={'/'}>Home</NavLink></li>
     <li>< NavLink to={'/all-food'}>All Food</NavLink></li>
     <li>< NavLink to={'/gallery'}>Gallery</NavLink></li>
     <li>< NavLink to={'/sign-up'}>Sign Up</NavLink></li>
    </>
    return (
        <div className='bg-white '>
            <div className="navbar  max-w-[1600px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a href='/' className="cursor-pointer flex items-center gap-2  text-xl"><img className='w-12' src="/logo.png" alt="logo" /><span>Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to={'/sign-in'}><CommonButton text={'Sign In'}></CommonButton></Link> 
                </div>
            </div>
        </div>
    );
};

export default Header;