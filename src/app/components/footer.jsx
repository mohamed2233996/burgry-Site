'use client'
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-black text-white">
                <aside>
                    <a className="cursor-pointer text-2xl">
                        <h1 className='text-white font-extrabold'>Bur<span className='text-primary'>gry</span></h1>
                    </a>
                    <p>Restaurant website Ltd.<br />Established since 2002</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Menu</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a href='tel:+201025402633' className="conect-item link hover:text-primary"><FaPhoneAlt className='text-primary mr-4' /> 01025402633</a>
                    <a href='mailto: medomano771@email.com' className="conect-item link hover:text-primary"><FaMessage className='text-primary mr-4' /> medomano771@gmail.com</a>
                    <a href='https://maps.app.goo.gl/JDh3Ko65vAKo7gzX9' className="conect-item link hover:text-primary"><FaLocationDot className='text-primary mr-4' /> Menofia Egypt</a>
                </nav>
                <nav>
                    <h6 className="footer-title">FOLLOW US</h6>
                    <div className='flex flex-row items-center text-white text-[18px]'>
                        <a className='mr-4 hover:text-primary' href="https://www.facebook.com/profile.php?id=100009619593004"><FaFacebookF /></a>
                        <a className='mr-4 hover:text-primary' href="www.linkedin.com/in/m7amed-gamal-1152992a4"><FaLinkedin /></a>
                        <a className='mr-4 hover:text-primary' href="https://github.com/mohamed2233996"><FaGithub /></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer items-center p-4 bg-black text-white border-t-[1px] border-primary">
                <aside className="items-center grid-flow-col">
                    <a className="cursor-pointer text-2xl">
                        <h1 className='text-white font-extrabold'>Bur<span className='text-primary'>gry</span></h1>
                    </a>
                    <p className='ml-4'>All rights reserved <span className='text-primary ml-2'>Medo ❤</span></p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className='mr-4 hover:text-primary' href="https://www.facebook.com/profile.php?id=100009619593004"><FaFacebookF /></a>
                    <a className='mr-4 hover:text-primary' href="www.linkedin.com/in/m7amed-gamal-1152992a4"><FaLinkedin /></a>
                    <a className='mr-4 hover:text-primary' href="https://github.com/mohamed2233996"><FaGithub /></a>
                </nav>
            </footer>
        </>
    );
}

export default Footer;


