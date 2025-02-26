import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import CommonButton from '../../Components/CommonButton';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { user } = useAuth();
    const [category, setCategory] = useState('');
    const [origin, setOrigin] = useState('');
    const [cookinTime, setCookingTime] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const navigate=useNavigate();
    const handleCategory = (e) => {
        setCategory(e.target.value);

    };

    const handleOrigin = (e) => {
        setOrigin(e.target.value);

    };
    const handleTime = (e) => {
        setCookingTime(e.target.value);

    };
    const handleDescription = (e) => {
        setDescription(e.target.value);

    };
    const handleIngredients = (e) => {
        setIngredients(e.target.value);
    };

    useEffect(() => {
        fetch(`https://restaurant-management-server-silk.vercel.app/single-food/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setIngredients(result.ingredients ? result.ingredients.join("\n") : "");
                setCategory(result.category || "");
                setOrigin(result.origin || "");
                setCookingTime(result.cooking_time ? result.cooking_time.replace(" minutes", "") : "");
                setDescription(result.description || "");
            })
    }, [id]);


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const cooking_time = `${cookinTime} minutes`;

        const updatedData = { name, image, quantity, price, category, cooking_time, origin, description, ingredients: ingredients.split("\n").map(item => item.trim()).filter(Boolean) };

        fetch(`https://restaurant-management-server-silk.vercel.app/update-food/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-food');
                };
            })
    };

    return (
        <div>
            <div className='md:h-[30vh] rounded-xl  h-[20vh] relative'>
                <img className='h-full rounded-xl w-full' src='/updateBan.jpg' alt="" />
                <div className='bg-black rounded-xl opacity-40 w-full top-0 h-full absolute'>

                </div>
                <div className='absolute rounded-2xl flex  justify-center items-center top-0 w-full h-full'>
                    <h2 className='md:text-4xl text-3xl font-bold  text-white  '>Update Food Data</h2>

                </div>
            </div>
            <div className="card bg-base-100 max-w-[1200px] lg:my-10 mx-auto ">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className='flex flex-col gap-6 md:gap-12 md:flex-row'>
                        <div className="form-control md:w-1/2">

                            <p className="label-text font-bold">Food Name</p>

                            <input
                                type="text"
                                placeholder="Enter Food Name"
                                name='name'
                                defaultValue={data.name}
                                className="w-full border-0 bg-white border-b-2 p-2 outline-0 focus:border-green-500 "
                                required
                            />

                        </div>
                        <div className="form-control   md:w-1/2">

                            <p className="label-text font-bold">Category</p>

                            <select
                                onChange={handleCategory}
                                defaultValue={data.category}
                                className="p-2 border-0 border-b-2 w-full focus:border-green-500 outline-0"
                                required
                            >
                                <option disabled selected value="">
                                    {data.category}
                                </option>
                                <option value="Pizza">Pizza</option>
                                <option value="Sushi">Sushi</option>
                                <option value="Rice Dish">Rice Dish</option>
                                <option value="Tacos">Tacos</option>
                                <option value="Pastry">Pastry</option>
                                <option value="Burger">Burger</option>
                                <option value="Fries">Fries</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Noodles">Noodles</option>
                                <option value="Dessert">Dessert</option>
                            </select>

                        </div>
                    </div>
                    <div className='flex flex-col mt-6 gap-6 md:gap-12 md:flex-row'>
                        <div className="form-control md:w-1/2">

                            <p className="label-text font-bold">Image</p>

                            <input
                                type="url"
                                placeholder="Image URL"
                                defaultValue={data.image}
                                name='image'
                                className="w-full border-0 bg-white border-b-2 p-2 outline-0 focus:border-green-500 "
                                required
                            />

                        </div>
                        <div className="form-control flex gap-4 md:w-1/2">

                            <div className='w-1/2'>
                                <p className="label-text font-bold">Origin</p>

                                <select defaultValue={data.origin} onChange={handleOrigin} className='p-2 border-0 border-b-2 w-full focus:border-green-500 outline-0' name="" required id="">
                                    <option disabled selected value="">
                                        {data.origin}
                                    </option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="India">India </option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="France">France</option>
                                    <option value="USA">USA</option>
                                    <option value="Belgium">Belgium</option>
                                </select>
                            </div>
                            <div className='w-1/2'>
                                <p className="label-text font-bold">Cooking Time</p>

                                <select defaultValue={data.cooking_time} onChange={handleTime} className='p-2 border-0 border-b-2 w-full focus:border-green-500 outline-0' name="" required id="">
                                    <option disabled selected value="">
                                        {data.cooking_time}
                                    </option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30 </option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="60">60</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col mt-6 gap-6 md:gap-12 md:flex-row'>
                        <div className="form-control flex gap-4 md:w-1/2">

                            <div className="form-control md:w-1/2">

                                <p className="label-text font-bold">Quantity</p>

                                <input
                                    type="number"
                                    placeholder="quantity"
                                    name='quantity'
                                    defaultValue={data.quantity}
                                    className="w-full border-0 bg-white border-b-2 p-2 outline-0 focus:border-green-500 "
                                    required
                                />

                            </div>
                            <div className="form-control md:w-1/2">

                                <p className="label-text font-bold">Price</p>

                                <input
                                    type="number"
                                    placeholder="Price"
                                    name='price'
                                    defaultValue={data.price}
                                    className="w-full border-0 bg-white border-b-2 p-2 outline-0 focus:border-green-500 "
                                    required
                                />

                            </div>

                        </div>
                        <div className="form-control md:w-1/2">

                            <p className="label-text font-bold">Email</p>

                            <input
                                type="text"
                                placeholder="email"
                                defaultValue={user?.email}
                                name='email'
                                readOnly
                                className="w-full border-0 bg-white border-b-2 p-2 outline-0 focus:border-green-500 "
                                required
                            />

                        </div>

                    </div>
                    <div className='flex flex-col mt-6 gap-6 md:gap-12 md:flex-row'>


                        <div className="form-control md:w-1/2">

                            <p className="label-text font-bold">Ingredients</p>

                            <textarea defaultValue={(data.ingredients?.join("\n"))} onChange={handleIngredients} required className="textarea w-full mt-2 focus:outline-green-500 focus:border-0 border-black border-2 " placeholder="Each Ingredient in new line"></textarea>

                        </div>

                        <div className="form-control md:w-1/2">

                            <p className="label-text font-bold">Details</p>

                            <textarea defaultValue={data.description} onChange={handleDescription} required className="textarea mt-2 w-full focus:outline-green-500 focus:border-0 border-black border-2 " placeholder="Food Details"></textarea>

                        </div>

                    </div>

                    <div className="form-control flex justify-center mt-8">
                        <CommonButton text={"Update"}></CommonButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;