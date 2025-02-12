import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import SignUp from "../../assets/signUp.json"
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const SignIn = () => {
    const [err, setError] = useState("");
    const [hide, setHide] = useState(true);
    const { logInUser,googleLogin,forgetPassword } = useAuth();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const emialRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
            .then(_ => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log In Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            })
            .catch((err) => {
                setError(err.message)
            })
    };

    const handlePasswordHide = () => {
        setHide(!hide)
    }

    const handleGoogleLogin = () => {
        setError('')
        googleLogin()
        .then(_ => {
              console.log(_.user)
              navigate('/')

        })
        .catch((err) => {
            setError(err.message)
        })
    };

    const handleForgetPassword = () => {
        setError('');
        setLoading(true)
        const email  = emialRef.current.value;
        if(email === ''){
            setError("Email field is empty! ")
            setLoading(false)
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            setError("Invalid email format!");
            setLoading(false)
            return;
        }
        forgetPassword(email)
        .then(_ => {
            setLoading(false)
            Swal.fire({
                title: 'Password Reset Email Sent!',
                text: 'Please check your email to reset your password.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#4CAF50', 
            });
             
        })
        .catch((err) => {
            setError(err.message)
        })
    }

    return (
        <div className="min-h-[80vh] bg-white  flex items-center justify-center py-10 px-4">
            <div className="flex flex-col md:flex-row  items-center max-w-[1400px] w-full rounded-xl overflow-hidden ">


                <div className="w-full md:w-1/2 p-6 md:p-10">
                    <h1 className="text-4xl font-bold text-center mb-2">Sign In</h1>
                    <p className='text-center text-gray-500 lg:mb-12 mb-6'>Log In your Delish Account</p>

                    <div className='flex  gap-4 justify-between'>
                        <div className='w-1/2 mb-2'>
                            <button onClick={handleGoogleLogin} className='border duration-500 hover:bg-gray-200 border-gray-300 rounded-md flex gap-2 py-3 items-center justify-center cursor-pointer bg-gray-100 text-xl w-full '><img className='w-8' src="./google.png" alt="" />Google</button>
                        </div>
                        <div className='w-1/2'>
                            <button className='border duration-500 hover:bg-gray-200 border-gray-300 rounded-md flex gap-2 py-3 items-center justify-center cursor-pointer bg-gray-100 text-xl w-full '><img className='w-8' src="./facebook.png" alt="" />Facebook</button>
                        </div>
                    </div>

                    <div className='divider divider-accent'> Or </div>

                    <form onSubmit={handleLogin} className='space-y-4'>

                        <div className='form-control '>
                            <label className="ml-2 mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                ref={emialRef}
                                name='email'
                                className="block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>
                        <div className='form-control relative  mt-4 lg:mt-0'>
                            <label className="ml-2 mb-1 text-sm font-medium">Password</label>
                            <input
                                type={hide ? 'password' : 'text'}
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

                            <div className='flex justify-end'>
                                <button type='button' onClick={handleForgetPassword} className='btn  btn-link  text-gray-500'>{loading&&<span className="loading loading-spinner loading-xs"></span>}Forget Password ?</button>
                            </div>


                        </div>

                        {err && <p className='text-sm text-red-500 '>{err}</p>}

                        <button className="w-full  bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition duration-300">Sign In</button>
                    </form>
                    <p className='mt-2 ml-2 text-gray-500'>You Have No Account? <Link to={'/sign-up'} className='btn btn-link text-red-500'>Sign Up</Link> </p>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <Lottie animationData={SignUp} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;