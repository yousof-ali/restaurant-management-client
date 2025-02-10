import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-300'>
            <footer className="footer md:flex justify-between max-w-[1600px]  mx-auto text-base-content p-10">
                <aside>
                    <div className='flex items-center gap-2'>
                    <img className='w-12' src="/logo.png" alt="" />
                    <span className='text-xl font-semibold'>Restaurant</span>
                    </div>
                    <p>
                        Restaurant Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;