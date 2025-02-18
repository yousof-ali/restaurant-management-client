
import { button } from 'motion/react-client';
import React, { useEffect, useId, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import CommonButton from '../../Components/CommonButton';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import FoodCard from '../../Components/FoodCard';
import RelatedCard from '../../Components/RelatedCard';




const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [purchase, setpurchase] = useState(0);
    const[related,setRelated] = useState([]);
    const { user } = useAuth();
    const currentTime = new Date();
    const shortMonthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    useEffect(() => {
        fetch(`http://localhost:5000/single-food/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [id])
    const { _id, name, image, category, origin, quantity, price, rating, description, cooking_time, ingredients, chef_special, chef_name, chef_id } = data

    const handleminus = () => {
        if (purchase > 0) {
            setpurchase(purchase - 1)
        }
    }
    const handlePluse = () => {
        if (purchase < quantity) {
            setpurchase(purchase + 1)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: " You have reached the maximum available quantity!",
                showCloseButton: true
            });
        }

    };

    useEffect(() =>{
        fetch(`http://localhost:5000/foods?category=${category}`)
        .then(res => res.json())
        .then(result => {
            const filtered = result.filter(single => single._id !== _id);
            setRelated(filtered);
            // console.log(result)
        })
        .catch((err) => {
            console.log(err.message);
        })
    } ,[category,_id])

    const handlePurchase = () => {
        const product_name = name;
        const product_price = price * purchase;
        const product_ID = _id;
        const product_quantity = purchase;
        const buyer_name = user?.displayName;
        const buyer_email = user?.email;
        const date = `${currentTime.getDate()} ${shortMonthNames[currentTime.getMonth()]} ${currentTime.getFullYear()}`
        const order = { product_ID, product_name, product_price, product_quantity, buyer_name, buyer_email, date }
        console.log(order);
        console.log(quantity - purchase);
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    fetch(`http://localhost:5000/quantity/${_id}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ quantity: quantity - purchase })
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.modifiedCount > 0) {
                                setData(prevData => ({
                                    ...prevData,
                                    quantity: prevData.quantity - purchase 
                                }));
                                const modal = document.getElementById('my_modal_5');
                                modal.close();
                                Swal.fire({
                                    title: "Your Order Confirm",
                                    icon: "success",
                                    draggable: true
                                });
                            }
                        })
                }
            })
            .catch((err) => {
                console.log(err.message);
            })

    };

    return (
        <div className='font-signika'>
            <div className='md:h-[30vh] rounded-xl  h-[20vh] relative'>
                <img className='h-full rounded-xl w-full' src='/details.jpg' alt="" />
                <div className='bg-black rounded-xl opacity-40 w-full top-0 h-full absolute'>

                </div>
                <div className='absolute rounded-2xl flex justify-center items-center top-0 w-full h-full'>
                    <h2 className='md:text-4xl text-3xl font-bold  text-white  '>Food Details</h2>
                </div>
            </div>
            <div className='md:flex mx-4 lg:mx-0  md:gap-4 lg:gap-8 my-6  '>
                <div className='md:w-1/2  max-h-[500px]'>
                    <img className='w-full rounded-2xl h-full' src={image} alt="" />
                </div>
                <div className='mt-4 md:w-1/2 md:mt-0'>
                    <h2 className='md:text-4xl text-2xl font-semibold '>{name}</h2>
                    <p className='text-gray-500'>{category}</p>
                    <div className="flex text-yellow-500 text-xl">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index}>{index < Math.round(rating) ? '★' : '☆'}</span>
                        ))}
                    </div>
                    <div className='divider'></div>
                    <h2 className='text-xl  mb-2 font-bold'>Other Info</h2>
                    <div className='text-gray-700 text-xl ml-2 '>
                        <p>{description}</p>
                        <div className='flex gap-6 my-2'>
                            <p className='flex items-center gap-2'><img className='w-8' src="/origin.png" alt="" />{origin}</p>
                            <p className='flex items-center gap-2'><img className='w-8' src="/time.png" alt="" />{cooking_time}</p>
                        </div>
                        <h2 className='text-black mt-4 font-bold'>Ingredients</h2>

                        <ul className="flex flex-wrap mt-2 gap-2">
                            {ingredients?.map((item, index) => (
                                <li key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                                    {item}
                                </li>
                            ))}
                        </ul>


                        <p className=' font-bold   my-4'>Stock In : <span className='text-gray-500'>{quantity} Pices</span> </p>
                        <p className='flex text-xl  items-center'>
                            <TbCurrencyTaka />
                            <span className='text-3xl font-bold'>{price}</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-6 mt-7'>
                        <div className='flex gap-2'>
                            <button onClick={handleminus} className='btn'><FaMinus /></button>
                            <p className='p-2 px-4 rounded border-green-500 border text-center bg-base-300'>
                                {purchase}
                            </p>
                            <button onClick={handlePluse} className='btn'><FaPlus /></button>
                        </div>
                        {/* <CommonButton className={`${purchase === 0 ? 'disabled' : ''}`}  text={"Purchase Now"}></CommonButton> */}

                        <button disabled={purchase === 0} className={`btn btn-secondary ${purchase === 0 ? 'disabled' : ''}`} onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box space-y-2 ">
                                <h3 className="font-bold text-center  text-lg">Confirm Order !</h3>
                                <p>Name : <span className='text-gray-500'>{name}</span></p>
                                <p>Quantity : <span className='text-gray-500'>{purchase}</span></p>
                                <p>Price : <span className='text-gray-500'>{purchase * price}</span></p>
                                <p>Buyer Name : <span className='text-gray-500'>{user?.displayName}</span></p>
                                <p>Buyer Email : <span className='text-gray-500'>{user?.email}</span></p>
                                <p>Date of Order : <span className='text-gray-500'>{currentTime.getDate()} {shortMonthNames[currentTime.getMonth()]}</span><span className='ml-3 text-gray-500'>{currentTime.getHours()} : {currentTime.getMinutes()}</span></p>
                                <div className="modal-action">
                                    <form method="dialog flex ">

                                        <button className="btn">Close</button>
                                    </form>
                                    <CommonButton onClick={handlePurchase} text={"Confirm"}></CommonButton>
                                </div>
                            </div>
                        </dialog>


                    </div>
                </div>


            </div>
            <div className='divider'></div>
            <div className='md:flex mx-2 gap-6 md:py-6 lg:gap-6'>
                <div className='md:w-1/2'>

                    <h2 className='text-3xl font-bold mb-4 '>What Chef Says..</h2>
                    <div className='mx-4  text-gray-600'>
                        <img className='inline mb-2' src="/qutes.png" alt="" />
                        <p className='inline'>{chef_special}</p>
                        <img className='inline mt-2' src="/qutes2.png" alt="" />
                    </div>
                    <div className='flex gap-2 mr-4 justify-end mt-4 '>
                        <img className='rounded-full border' src="/" alt="chef" />
                        <div>
                            <h2 className=' font-bold'>{chef_name}</h2>
                            <p className='text-gray-500'>#{chef_id}</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 md:pt-0 pt-6'>
                    <h2 className='text-3xl font-bold mb-4'>Related Product</h2>
                    <div className='grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            related.map(single => <RelatedCard data={single} key={single._id}></RelatedCard>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;