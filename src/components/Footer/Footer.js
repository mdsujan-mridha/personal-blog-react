import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='mt-52'>
            <div className='flex flex-col-reverse md:flex-row justify-evenly pb-20 border-b-2 px-12'>
                <div>
                    <h1 className='text-4xl text-white font-bold pb-4'> Dasteen <span style={{ color: '#6246ea' }} className='text-lg'>.blog</span> </h1>
                    <p className='text-lg font-bold pb-5'>Digitaldastin by Dastin Darmawan</p>
                    <div className="flex justify-between pt-5">
                        <BsFacebook className='text-3xl text-white' />
                        <AiFillTwitterCircle className='text-3xl text-white' />
                        <AiOutlineInstagram className='text-3xl text-white' />
                        <AiFillLinkedin className='text-3xl text-white' />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-white font-bold pb-5'> Category </h1>
                    <li className='list-none font-bold text-lg cursor-pointer'> CSS </li>
                    <li className='list-none font-bold text-lg cursor-pointer'> JavaScript </li>
                    <li className='list-none font-bold text-lg cursor-pointer'> React Js </li>
                    <li className='list-none font-bold text-lg cursor-pointer'> Tailwind </li>
                    <li className='list-none font-bold text-lg cursor-pointer'> Node Js </li>
                </div>
                <div>
                    <h1 className='text-2xl text-white font-bold pb-5'> About Me </h1>
                    <li className='list-none font-bold text-lg cursor-pointer'>About Me</li>
                    <li className='list-none font-bold text-lg cursor-pointer'>Projects</li>
                    <li className='list-none font-bold text-lg cursor-pointer'>Achievement</li>
                </div>
                <div>
                    <h1 className='text-2xl text-white font-bold pb-5'> Get in touch </h1>
                    <p className='list-none font-bold text-lg cursor-pointer'>+880123456789</p>
                    <p className='list-none font-bold text-lg cursor-pointer'>example@gmail.com</p>
                </div>
                <div>
                    <h1 className='text-2xl text-white font-bold pb-5'>Follow Us</h1>
                    <li className='list-none font-bold text-lg cursor-pointer'>Medium</li>
                    <li className='list-none font-bold text-lg cursor-pointer'>Instagram</li>
                    <li className='list-none font-bold text-lg cursor-pointer'>Twitter</li>
                    <li className='list-none font-bold text-lg cursor-pointer'>Facebook</li>
                </div>
            </div>
            <div className='flex justify-between px-24 pt-5 pb-5 flex-wrap gap-5'>
                <div>
                 <p> © 2022 Digitaldastin </p>
                </div>
                <div>
                    <h2> Made With ❤️ Tamanna Sheme </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;