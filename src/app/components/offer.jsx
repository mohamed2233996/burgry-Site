import React from 'react';

const Offer = () => {
    return (
        <div className='py-24 bg-offerbg bg-center bg-no-repeat bg-cover relative'>
            <div className='overblack w-full absolute h-full bg-[#000000ab] top-0'></div>
            <div className="container m-auto relative">
                <div className='md:w-2/3 lg:w-1/2'>
                    <h1 className='text-white font-black text-3xl headText after:m-0 after:mt-[20px]'>GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION</h1>
                    <p className='text-gray-300 mt-4'>You can now get a great offer for your special events and you can make advance reservations for the event</p>
                    <button className='primaryBtn mt-6 font-extrabold'>Book a Reservation</button>
                </div>
            </div>
        </div>
    );
}

export default Offer;
