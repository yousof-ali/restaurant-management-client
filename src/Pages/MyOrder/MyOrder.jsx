import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';
import CommonButton from '../../Components/CommonButton';
import { MdOutlineEdit } from "react-icons/md";
import { GoEye } from "react-icons/go";
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOrder, setMyOrder] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/my-orders?email=${user.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setMyOrder(result)
                setLoading(false)
            })
    }, [user.email])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this order?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-order/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your order has been deleted.",
                                icon: "success"
                            });

                            const filter = myOrder.filter(single => single._id !== id);
                            setMyOrder(filter);
                            console.log(filter)
                        }
                    })


            }
        });
    }
    return (
        <div className='font-signika'>



            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead className='bg-gray-800'>
                        <tr className='text-white'>
                            <th>No</th>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Buyer Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date of Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrder.map((single, indx) => <tr key={indx} className='hover:shadow-2xl'>
                                <td>
                                    {indx + 1}
                                </td>

                                <td>

                                    <img className='rounded-xl w-12'
                                        src={single?.image}
                                        alt="food " />

                                </td>
                                <td>

                                    <p className='font-semibold'>{single?.product_name}</p>
                                </td>
                                <th>
                                    {single?.buyer_name}
                                </th>
                                <th>
                                    {single?.product_quantity}
                                </th>
                                <th>
                                    {single?.product_price}
                                </th>
                                <th>
                                    {single?.date}
                                </th>


                                <th>
                                    <Link className='mr-3' to={`/details/${single?.product_ID}`}>
                                        <button className=' text-white  btn btn-accent'>
                                            <GoEye />
                                            <span>View</span>
                                        </button></Link>
                                    <Link to={``}>
                                        <button onClick={() => handleDelete(single?._id)} className=' text-white  btn btn-error'>
                                            <MdOutlineEdit /> <span>Delete</span>
                                        </button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>

            </div>
            {

                myOrder.length === 0 && !loading && <div className='flex items-center space-y-2 md:mt-24 mt-12 flex-col'>
                    <h2 className='text-center text-xl font-bold'>You have no Food.</h2>
                    <p className='text-gray-500'>Do you want to add food?</p>
                    <span>
                        <Link to={'/all-food'}><CommonButton text={'Order Now'}></CommonButton></Link>
                    </span>
                </div>
            }
            {
                loading&&<Loader></Loader>
            }

        </div>
    );
};

export default MyOrder;