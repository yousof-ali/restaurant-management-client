import React from 'react';
import { Link } from 'react-router-dom';

const RelatedCard = ({data}) => {
    const {_id, name, image, quantity, price, description } = data
    return (
        <Link to={`/details/${_id}`}>
        <div className='duration-500 shadow hover:shadow-2xl mb-4 border-gray-500 rounded-2xl'>
            <div>
                <img className='rounded-t-2xl ' src={image} alt="" />
            </div>
            <div className='my-1 p-2'>
                <h2 className='text-lg font-bold'>{name}</h2>
            </div>
        </div>
        </Link>
    );
};

export default RelatedCard;