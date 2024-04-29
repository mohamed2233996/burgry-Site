import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";

const Intro2 = () => {
    return (
        <div className='py-20 bg-black'>
            <div className="container m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='py-1 pr-2 flex flex-row justify-start items-center rounded-lg bg-primary'>
                        <div className='bg-burger-intro w-[70px] h-[70px] bg-no-repeat bg-cover bg-right-bottom mr-6 my-3'></div>
                        <div className=' ml-2 text-white'>
                            <h3 className='font-bold text-xl'>Burger</h3>
                            <p className='text-[16px]'>The best types of burgers</p>
                            <button className='text-black'>Buy Online</button>
                        </div>
                    </div>
                    <div className='py-1 pr-2 flex flex-row justify-start items-center rounded-lg bg-green-700'>
                        <div className='bg-snack-intro w-[70px] h-[70px] bg-no-repeat bg-cover bg-right-bottom mr-6 my-3'></div>
                        <div className=' ml-2 text-white'>
                            <h3 className='font-bold text-xl'>Snack</h3>
                            <p className='text-[16px]'>The best types of Snacks</p>
                            <button className='text-primary'>Buy Online</button>
                        </div>
                    </div>
                    <div className='py-1 pr-2 flex flex-row justify-start items-center rounded-lg bg-red-700'>
                        <div className='bg-drink-intro w-[70px] h-[70px] bg-no-repeat bg-cover bg-right-bottom mr-6 my-3'></div>
                        <div className=' ml-2 text-white'>
                            <h3 className='font-bold text-xl'>Drinks</h3>
                            <p className='text-[16px]'>The best types of Drinks</p>
                            <button className='text-primary'>Buy Online</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-boxColor rounded-lg p-4">
                        <div className='mr-4'>
                            <h2 className='text-white font-black text-2xl'>GET A 10% DISCOUNT ON YOUR FIRST ORDER</h2>
                            <p className='text-[16px] text-gray-500 mt-5'>Place your first order to get the discount immediately</p>
                            <button className='text-primary mt-2 hover:font-black'>Buy Online</button>
                        </div>
                        <Image
                            src='/intro burger.png'
                            alt='burger'
                            width={200}
                            className='order-[-1] sm:order-1 mb-3 sm:mb-0'
                            height={200} />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-boxColor rounded-lg p-4">
                        <div className='mr-4'>
                            <h2 className='text-white font-black text-2xl'>GET A 10% DISCOUNT ON YOUR FIRST ORDER</h2>
                            <p className='text-[16px] text-gray-500 mt-5'>Place your first order to get the discount immediately</p>
                            <button className='text-primary mt-2 hover:font-black'>Buy Online</button>
                        </div>
                        <Image
                            src='/intro cola.png'
                            alt='cola'
                            width={200}
                            className='order-[-1] sm:order-1 mb-3 sm:mb-0'
                            height={200} />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-20">
                    <div className='overflow-hidden rounded-lg relative'>
                        <Image
                            src='/intro last.jpg'
                            alt='burger'
                            width={780}
                            height={700} />
                    </div>
                    <div>
                        <h1 className='headText after:mx-0 text-white text-[30px] font-black'>FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</h1>
                        <p className='text-[18px] text-gray-300 mt-5'>Discover with us the distinctive and delicious taste and the best Eastern and Western dishes</p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 mt-4'>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Price</li>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Quality</li>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Taste</li>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Delivery</li>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Service</li>
                            <li className='text-white flex flex-row items-center mt-2'><span className='mr-2 text-primary'><FaStar /></span>Best Experience</li>
                        </ul>
                        <button className='primaryBtn w-fit font-bold mt-8'>About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro2;
