import React, { useEffect, useState } from 'react';
import CommonButton from '../../Components/CommonButton'
import PrimaryButton from '../../Components/PrimaryButton'
import { CiSearch } from "react-icons/ci";
import FoodCard from '../../Components/FoodCard';


const AllFood = () => {
    const [allfood,setAllFood] = useState([]);
    const [dataCount,setDataCount] = useState(0);
    const[currentPage,setCurrentPage] = useState(0)
    const [dataEachPage,setDataEachPage] = useState(10)
    const numberOfPage = Math.ceil(dataCount/dataEachPage);
    const [category,setCategory] = useState([])
    const[forbtn,setForbtn] = useState('all');
    
    const pageArray = [...Array(numberOfPage).keys()];
    console.log(pageArray)

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${currentPage}&size=${dataEachPage}&category=${forbtn}`)
        .then(res => res.json())
        .then(result => {
            setAllFood(result);
            console.log(result.length)
        })
        .catch((err) => {
            console.log(err.message)
        })
    },[currentPage,dataEachPage,forbtn,dataCount]);

    useEffect(() => {
        fetch(`http://localhost:5000/count?category=${forbtn}`)
        .then(res => res.json())
        .then(result => {
            setDataCount(result.count)
            setCurrentPage(0)
        })
        .catch((err) => {
            console.log(err.message)
        });
    },[forbtn]);
   

    const handlePrev = () => {
        if(currentPage>0){
            setCurrentPage(currentPage-1);
        }
    }
    const handleNext = () => {
        if(currentPage<pageArray.length-1){
            setCurrentPage(currentPage+1)
        }
    }
    
    useEffect(() => {
        fetch('/categories2.json').then(res => res.json())
        .then(result => {
            setCategory(result);
        })
    },[])
    

    return (
        <div className='font-signika'>
            <div className='rounded-md  relative'>
                <img className='md:h-[30vh] h-[20vh] rounded-xl w-full' src="/allFood.png" alt="" />
                <div className='bg-black absolute rounded-xl top-0 w-full h-full opacity-50'>
                    
                </div>
                <div className='absolute flex rounded-xl justify-center items-center top-0 w-full h-full'>
                <h2 className='md:text-4xl text-white text-3xl'>
                Discover Delicious Combos
                    </h2>
                </div>
            </div>
            <div className='md:flex mx-2 pt-8 pb-4 items-center'>
            <div className='flex-1'>
                <h2 className='text-3xl'>Our All Foods</h2>
                <p className='text-gray-500'>Explore a variety of delicious food combinations to suit every taste. Find the perfect dish and make your meal unforgettable!
                </p>
            </div>
            <div className='flex-1  mt-4 flex  justify-end '>
                <input className='rounded-l-full  outline-0 border-r-0 w-[60%] md:w-[60%]  p-2' placeholder= 
                "Enter a food name"></input>
                <CommonButton className={'rounded-r-full border border-black border-l-0'} text={'Search'}></CommonButton>
            </div>
            </div>
            <div className='divider'></div>
            <div className='flex gap-2 mb-3 flex-wrap md:px-4 lg:px-0 '>
            <button onClick={() => setForbtn('all')} className={`btn ${forbtn==='all'?'bg-green-500 text-white':""}`}>All</button>
                {
                  category.map(single => (<><button onClick={() => setForbtn(single.category) } className={`btn ${forbtn===single.category?'bg-green-500 text-white':""}`}>{single.category}</button></>))
                }
            </div>

            <div className='grid grid-cols-1  py-4 md:gap-6 gap-4 px-2 md:px-4 lg:px-0 md:grid-cols-3 lg:grid-cols-4 '>
                {
                    allfood.map(food => <FoodCard food={food} key={food.name}></FoodCard>)
                }
            </div>

            <div className='text-center my-6 '>
                <button onClick={handlePrev} className='btn btn-neutral mr-2'>Prev</button>
                {
                  pageArray.map(single => (<button onClick={() => setCurrentPage(single)} className={`${currentPage===single&&'bg-green-500 text-white'} btn mx-1`}>{single+1}</button>))
                }
                 <button className='btn btn-neutral ml-2' onClick={handleNext} >Next</button>
            </div>
        </div>
    );
};

export default AllFood;
