import Image from 'next/image';
import React from 'react';
import { FaTruck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";


const App = () => {
    return (
        <div className='py-20 bg-black'>
            <div className="container m-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='m-auto mb-2 lg:mb-0'>
                        <Image
                            src='/app-phone.jpg'
                            alt='burger'
                            width={350}
                            height={400} />
                    </div>
                    <div className='app-text'>
                        <h1 className='headText text-white font-black my-3 text-4xl after:mx-0'>DON&apos;T WORRY ! YOU CAN ORDER YOUR FOOD JUST BY PHONE</h1>
                        <p className='text-gray-300 text-[17px]'>You can now request an order through our new application with constant support for the application and you will receive the order as quickly as possible</p>
                        <div className='flex flex-col'>
                            <div className='flex flex-row bg-boxColor rounded-lg overflow-hidden px-3 py-2 mt-8'>
                                <div className='bg-primary p-4 rounded-lg mr-4 my-2'>
                                    <FaTruck className='text-3xl text-white' />
                                </div>
                                <div className='my-2'>
                                    <h3 className='text-white text-xl font-black'>Fast Delivery</h3>
                                    <p className='text-gray-400 text-[16px]'>We have the fastest delivery service</p>
                                </div>
                            </div>
                            <div className='flex flex-row bg-boxColor rounded-lg overflow-hidden px-3 py-2 mt-4'>
                                <div className='bg-primary p-4 rounded-lg mr-4 my-2'>
                                    <FaCoins className='text-3xl text-white' />
                                </div>
                                <div className='my-2'>
                                    <h3 className='text-white text-xl font-black'>SPECIAL PROMO</h3>
                                    <p className='text-gray-400 text-[16px]'>Order now and get your first offer</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-4 items-center'>
                            <a href="#" className='p-2 sm:mr-3'>
                                <Image width={150} height={150} src="/app-store.png" alt="" />
                            </a>
                            <a href="#" className='p-2'>
                                <Image width={150} height={150} src="/google-play.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
