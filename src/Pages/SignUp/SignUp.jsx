import React, { useState } from 'react';
import Lottie from "lottie-react";
import signUp from '../../assets/signUp.json';
import CommonButton from '../../Components/CommonButton'
import { Link } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import useAuth from '../../Hook/useAuth';




const SignUp = () => {
    const [err, setError] = useState("");
    const [hide, setHide] = useState(true);
    const {createUser} = useAuth()

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        if (password.length < 6) {
            setError('Password must be at least 6 characters long!');
            return;
        } else if (!/^(?=.*[A-Z])/.test(password)) {
            setError('Password must include at least one uppercase letter!');
            return;
        } else if (!/^(?=.*[a-z])/.test(password)) {
            setError('Password must include at least one lowercase letter!');
            return;
        }
        createUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch((err) => {
            console.log(err.message)
        })

        // createUser(email, password)
        //     .then(result => {
        //         navigate(from);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //         setError(err.message);
        //     });
    };

    const handlePasswordHide = () => {
        setHide(!hide)
    }

    return (
        <div className="min-h-[80vh] bg-white  flex items-center justify-center py-10 px-4">
            <div className="flex flex-col md:flex-row  items-center max-w-[1400px] w-full rounded-xl overflow-hidden ">


                <div className="w-full md:w-1/2 p-6 md:p-10">
                    <h1 className="text-4xl font-bold text-center mb-2">Sign Up</h1>
                    <p className='text-center text-gray-500 lg:mb-12 mb-6'>Create your Delish Account</p>

                    <form onSubmit={handleRegister} className='space-y-4'>
                        <div className='lg:flex gap-4 '>
                            <div className='form-control lg:w-1/2'>
                                <label className="ml-2 mb-1 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    className="block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className='form-control mt-4 lg:mt-0 lg:w-1/2'>
                                <label className="ml-2 mb-1 text-sm font-medium">Photo</label>
                                <input
                                    type="url"
                                    name='photo'
                                    className="block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Photo URL"
                                />
                            </div>
                        </div>

                        <div className='lg:flex gap-4 '>
                            <div className='form-control lg:w-1/2'>
                                <label className="ml-2 mb-1 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>
                            <div className='form-control relative  mt-4 lg:mt-0 lg:w-1/2'>
                                <label className="ml-2 mb-1 text-sm font-medium">Password</label>
                                <input
                                    type={hide?'password':'text'}
                                    name='password'
                                    className="block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Password"
                                    required
                                />
                                <div className='text-2xl top-9 right-6 absolute' onClick={handlePasswordHide}>
                                    {
                                        hide ? <FaRegEye /> 

                                            : <FaRegEyeSlash />

                                    }
                                </div>
                            </div>
                        </div>

                        {err && <p className='text-sm text-red-500 '>{err}</p>}

                        <button className="w-full  bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition duration-300">Register</button>
                    </form>
                    <p className='mt-2 ml-2 text-gray-500'>Already Have Account? <Link to={'/sign-in'} className='btn btn-link text-red-500'>Sign In</Link> </p>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <Lottie animationData={signUp} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;