import React from 'react';
import useAuth from '../../Hook/useAuth';

const MyFood = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div>
            myFood
        </div>
    );
};

export default MyFood;