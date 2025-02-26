import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';
import CommonButton from '../../Components/CommonButton';
import UpdateButton from '../../Components/UpdateButton'
import { GoEye } from "react-icons/go";
import Loader from '../../Components/Loader';
import axios from 'axios';



const MyFood = () => {
    const [myfood, setMyfood] = useState([])
    const [loader,setLoader] = useState(false);
    const { user } = useAuth()
    useEffect(() => {
        setLoader(true);
        axios.get(`http://localhost:5000/my-food?email=${user?.email}`,{withCredentials:true})
            .then(result => {
                setMyfood(result.data);
                setLoader(false)
            })
    }, [user.email])
    return (
        <div className='font-signika'>

           

            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead className='bg-gray-800'>
                        <tr className='text-white'>
                            <th>No</th>
                            <th>image</th>
                            <th>Food Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            myfood?.map((single, indx) => <tr key={indx} className='hover:shadow-2xl'>
                                <td>
                                    {indx + 1}
                                </td>

                                <td>
                                    
                                    <img className='rounded-xl w-12'
                                        src={single.image}
                                        alt="food " />

                                </td>
                                <td>

                                    <p className='font-semibold'>{single.name}</p>
                                </td>
                                <td>{single.category}</td>
                                <th>
                                    {single.price}
                                </th>
                                <th>
                                    <Link  className='mr-3' to={`/details/${single._id}`}>
                                    <CommonButton text={"View"} icon={<GoEye />} className=''>
                                    </CommonButton></Link>
                                    <Link to={`/update/${single._id}`}>
                                    <UpdateButton></UpdateButton>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    
                </table>

            </div>
            {

                myfood.length===0&& !loader&&<div className='flex items-center space-y-2 md:mt-24 mt-12 flex-col'>
                    <h2 className='text-center text-xl font-bold'>You have no Food.</h2>
                    <p className='text-gray-500'>Do you want to add food?</p>
                    <span>
                    <Link to={'/add-food'}><CommonButton  text={'Add Now'}></CommonButton></Link>
                    </span>
                </div>
            }

            {
                loader&&<Loader></Loader>
            }

        </div>
    );
};

export default MyFood;