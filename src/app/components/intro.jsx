import Image from 'next/image';
import React from 'react';
import { CiForkAndKnife } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";

const Intro = () => {
    return (
        <div className='bg-gradient-to-b from-opacityColorLinearStart to-opacityColorLinearEnd py-52'>
            <div className='container m-auto'>
                <div className="flex md:flex-row flex-col items-center">
                    <div className='mb-6 md:m-0 w-1/2 flex justify-center'><Image
                        src='/INTRO.png'
                        alt='burger'
                        width={350}
                        height={400} />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start w-1/2">
                        <h1 className='headText text-white text-center md:text-start font-black my-3 text-5xl md:after:mx-0'>ENJOY BURGRY MAKE YOUR TUMMY HAPPY</h1>
                        <h2 className='text-white text-center md:text-start text-xl mt-5'>We have all kinds of delicious and exciting burgers. Discover all types and taste with us the most delicious dishes.</h2>
                        <div className="pt-2 mt-8 grid grid-cols-1 md:grid-cols-3 md:ml-4">
                            <div className="flex flex-col items-center md:items-start">
                                <CiForkAndKnife className='text-4xl text-primary' />
                                <h3 className='text-white text-center text-xl mt-5'>Delicious</h3>
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <MdOutlineWaterDrop className='text-4xl text-primary' />
                                <h3 className='text-white text-center text-xl mt-5'>Fresh</h3>
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <PiPlantLight className='text-4xl text-primary' />
                                <h3 className='text-white text-center text-xl mt-5'>Healthy</h3>
                            </div>
                        </div>
                        <button className='primaryBtn w-fit font-bold mt-12'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
