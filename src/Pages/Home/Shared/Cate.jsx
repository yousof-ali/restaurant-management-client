import React, { useEffect, useState } from 'react';

const Cate = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(result => {
            setData(result);
        });
    },[]);
    return (
        <div className='grid  bg-base-200 py-4 gap-4 grid-cols-3 justify-center items-center lg:grid-cols-6'>
            {
                data.map(single => <div className='grid justify-center group  items-center cursor-pointer' key={single.id}>
                  
                    <img className='w-20 group-hover:transition-transform
                    group-hover:scale-110 duration-300' src={single?.image} alt="" />
                    <p className='text-center group-hover:text-yellow-600 text-xl font-signika text-gray-600'>{single?.name}</p>
                  
                </div>)
            }
        </div>
    );
};

export default Cate;