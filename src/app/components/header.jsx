import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-opacityColor">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-warning lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-black shadow rounded-box w-52">
                    <li className='text-white'><Link href="/">Home</Link></li>
                    <li className='text-white'><Link href="/about">About Us</Link></li>
                    <li className='text-white'><Link href="/menu">Menu</Link></li>
                    <li className='text-white'><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <a className="cursor-pointer pl-3 text-2xl">
                    <h1 className='text-white font-extrabold'>Bur<span className='text-primary'>gry</span></h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-white'><Link href="/">Home</Link></li>
                    <li className='text-white'><Link href="/about">About Us</Link></li>
                    <li className='text-white'><Link href="/menu">Menu</Link></li>
                    <li className='text-white'><Link href="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="primaryBtn">Shop Naw</a>
            </div>
        </div>
    );
}

export default Header;
