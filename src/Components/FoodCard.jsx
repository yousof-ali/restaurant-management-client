import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import useAuth from '../Hook/useAuth';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../utilites/localStorage';



const FoodCard = ({ food, search }) => {
    const { _id, name, image, quantity, price, description } = food;
    const { user, loader } = useAuth();

    const [favorite, setFavorite] = useState("");



    useEffect(() => {
        const fetchFavorites = async () => {
            if (!user) {
                const localFavs = getLocalStorage();
                const filter = localFavs.find(single => single ==_id);
                setFavorite(filter);
                
            } else {
                try {
                    const response = await fetch(`https://restaurant-management-server-silk.vercel.app/get-favorite?email=${user?.email}`);
                    const result = await response.json();
                    const filter = result.find(single => single.food_id == _id);
                    setFavorite(filter)
                    
                } catch (error) {
                    console.error("Error fetching favorites:", error);
                }
            }
        };

        fetchFavorites();

    }, [user]);


    const handleFavoite = (id) => {
        if (!user) {
            setLocalStorage(id);
            setFavorite(id);
            return;
        }

        fetch(`https://restaurant-management-server-silk.vercel.app/set-favorite/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ food_id: id, email: user.email })
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setFavorite(id);
                };
            });


    };
    const handlefavremove = (id) => {
        if (!user) {
            removeLocalStorage(id);
            setFavorite('');
            return;
        };

        fetch(`https://restaurant-management-server-silk.vercel.app/delete-fav/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount>0){
                setFavorite('');
            };
            
        });

    };

    return (
        <div className="group border border-gray-400 bg-[#f2f6ff] hover:bg-white hover:shadow-xl hover:border-green-500 rounded-xl   duration-500 transition-transform hover:-translate-y-0.5">
            <div className=' rounded-t-xl relative overflow-hidden max-h-[310px] '>
                <img
                    className="w-full h-full rounded-t-xl transition-transform duration-800 transform group-hover:scale-110"
                    src={image}
                    alt="Food" />
                <div className="absolute  inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-800"></div>
                <div className="absolute  text-2xl top-3 right-3   opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                    {
                        favorite ? <button onClick={() => handlefavremove(_id)} className="bg-white p-2 cursor-pointer rounded-full shadow-md text-red-400 hover:bg-gray-200">
                            <IoIosHeart />

                        </button> : <button onClick={() => handleFavoite(_id)} className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-200">
                            <CiHeart />

                        </button>
                    }

                </div>
            </div>
            <div className="p-4 lg:p-6">
                <h2 className={`card-title ${search && 'text-green-500'}`}>{name}</h2>
                <p className='text-sm text-gray-500'>{description.length > 70 ? `${description.slice(0, 70)}...` : description}</p>
                {
                    quantity > 0 ? <p className='text-gray-700 text-sm my-2'>In Stock : <span className='text-black'>{quantity}</span> Pices</p> : <p className='text-sm mt-4 text-red-500 font-bold'>Stock Out</p>
                }

                <p className='text-gray-700 mt-4'><span className='text-black'>{price}</span> Taka</p>

                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <CommonButton text={"Details"}></CommonButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;