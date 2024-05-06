import React from 'react';
import { BsSendFill } from "react-icons/bs";

const Subscribe = () => {
    return (
        <div className='bg-primary py-20'>
            <div className="container m-auto">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className='sub-text text-center md:text-left'>
                        <h1 className='text-black text-4xl font-black'>GET EXCLUSIVE UPDATE</h1>
                        <p className='text-white mt-6'>Stay informed of our latest offers and updates</p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-center mt-3 md:mt-0'>
                        <input type="email" placeholder='Enter your email address' className='w-full px-4 py-3 rounded-lg bg-white text-gray-950' />
                        <button className='bg-black text-white px-4 py-3 rounded-lg lg:ml-4 mt-3 lg:mt-0 flex flex-row items-center w-full-av'><span className='mr-3'><BsSendFill /></span>SUBSCRIBE NOW </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
