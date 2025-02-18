import React from 'react';

const Loader = () => {
    return (
        <div className='text-2xl font-signika font-bold'>
            <p className='flex justify-center mt-16 items-center'>
            <span>L</span> <img className='w-8 animate-spin' src='/loader.png' alt="" /> <span>ading...</span>
            </p>
        </div>
    );
};

export default Loader;