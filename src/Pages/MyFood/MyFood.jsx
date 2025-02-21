import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { MdOutlineEdit } from "react-icons/md";
import { Link } from 'react-router-dom';


const MyFood = () => {
    const [myfood, setMyfood] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/my-food?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyfood(result);
                console.log(result)
            })
    }, [])
    return (
        <div>

            {
                myfood.length === 0 && <div>
                    <h2>You Have no Food</h2>
                </div>
            }

            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <tr>
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
                            myfood.map((single, indx) => <tr className='hover:shadow-2xl'>
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
                                    <Link to={`/update/${single._id}`}>
                                    <button className=' text-white  btn btn-accent'>
                                    <MdOutlineEdit /> <span>Update</span>
                                    </button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default MyFood;