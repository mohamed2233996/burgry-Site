"use client"
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const sliderData = [
        {
            id: 1,
            Name: "Alexandra",
            review: "Serene Nature Scene with Sunlight Streaming Through Trees",
            work: "Designation",
            url: "/review (1).jpg",
        },
        {
            id: 2,
            Name: "Amanda",
            review: "Serene Nature Scene with Sunlight Streaming Through Trees",
            work: "Designation",
            url: "/review (2).jpg",
        },
        {
            id: 4,
            Name: "Audrey",
            review: "Serene Nature Scene with Sunlight Streaming Through Trees",
            work: "Designation",
            url: "/review (4).jpg",
        },
        {
            id: 5,
            Name: "Carol",
            review: "Serene Nature Scene with Sunlight Streaming Through Trees",
            work: "Designation",
            url: "/review (5).jpg",
        },
        {
            id: 7,
            Name: "Donna",
            review: "Serene Nature Scene with Sunlight Streaming Through Trees",
            work: "Designation",
            url: "/review (7).jpg",
        },
    ];
    return (
        <div className='py-20 bg-boxColor'>
            <div className="container m-auto">
                <h1 className='text-white font-black text-4xl headText text-center after:mt-[20px]'>CUSTOMER REVIEW</h1>
                <p className='text-center mt-4 text-gray-400 text-[16px]'>In this section There are opinions of important and distinguished visitors on our website</p>
            </div>
            <div className="overflow-hidden w-full flex items-center justify-center my-8"
                ref={emblaRef}>
                <div className="flex">
                    {sliderData?.map((item) => {
                        return (
                            <div className="embla__slide bg-black rounded-lg relative h-[200px] w-full mx-4" key={item.id}>
                                <p className='text-white mt-2 text-[16px]'>{item.review}</p>
                                <div className='mt-4 flex flex-row justify-between items-center'>
                                    <div className='flex flex-row items-center'>
                                        <div className='overflow-hidden w-[100px] h-[100px] rounded-full'>
                                            <img className="" src={item.url} alt="" width={200} height={200} />
                                        </div>
                                        <div className='ml-4'>
                                            <h3 className='text-white'>{item.Name}</h3>
                                            <p className='text-gray-400'>{item.work}</p>
                                        </div>
                                        
                                    </div>
                                    <span className='text-primary text-[40px]'>
                                        <FaQuoteRight />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Review;
