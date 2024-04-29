import React from 'react';
import { FaPlay } from "react-icons/fa";

const Video = () => {
    return (
        <div className="bg-black">
            <div className="relative w-full h-[350px] overflow-hidden flex justify-center items-center">
                <video src='/bg-video.mp4' className='absolute w-full h-auto'
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false} />
                <div className="overblack w-full absolute h-full bg-[#000000ab]" />
                <div className="container m-auto relative">
                    <div className='flex flex-col items-center justify-center text-center mt-24'>
                        <a href="#" className='bg-primary rounded-full p-6 flex justify-center items-center mb-4'>
                            <FaPlay className='text-white text-[24px]'style={{transform:"translateX(8%)"}}/>
                        </a>
                        <h1 className='text-white font-black text-4xl headText text-center after:mt-[20px] mb-3'>WE SERVE YOU THE BEST</h1>
                        <p className='text-gray-300 mx-2'>Start watching our work from inside our kitchens and salons by simply clicking the button above.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Video;
