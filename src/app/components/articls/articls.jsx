"use client"
import React from 'react';
import { articls } from "./data.js"
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image.js';

const Articls = () => {
    return (
        <div className='py-20 bg-black'>
            <div className="container m-auto">
                <h1 className='text-white font-black text-4xl headText text-center after:mt-[20px]'>OUR NEWS & ARTICLE</h1>
                <p className='text-center mt-4 text-gray-400 text-[16px]'>This section contains a group of articles that will interest you</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    {articls.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col mb-6 lg:mb-0 rounded-lg overflow-hidden'>
                                <a href='' className='hover:brightness-125 article-img h-[220px] overflow-hidden relative'>
                                    <Image src={item.image} alt={"article"} fill/>
                                    <span className=' absolute bg-primary bottom-0 left-0 rounded-tr-sm px-2 pb-1 font-bold'>{item.category}</span>
                                </a>
                                <div className='article-content mt-4'>
                                    <h3 className='text-white text-xl font-black'>{item.title}</h3>
                                    <p className='text-gray-400 text-[16px]'>{item.description}</p>
                                </div>
                                <button className='mt-4 text-primary flex flex-row items-center'>Read More <span className='ml-4'><FaArrowRight /></span></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Articls;
