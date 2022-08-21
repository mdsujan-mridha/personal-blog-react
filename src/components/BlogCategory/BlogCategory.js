import React from 'react';
import { AiOutlineLine } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import cssIcon from "../img/icon/css.png"
import reactIcon from "../img/icon/react.png"
import javaScriptIcon from "../img/icon/js.png"
import nodeJsIcon from "../img/icon/node.png"
import tailWindIcon from "../img/icon/tailwind.png"



const BlogCategory = () => {
    return (
        <section className='pb-5  mt-24 '>
            <div className='flex flex-col md:flex-row justify-between px-2 md:px-80 flex-wrap'>
                <h1 className='flex  gap-2 text-lg text-white my-5 items-end'>Browse the category <AiOutlineLine className='text-2xl font-bold' /></h1>
                <h1 className='flex  gap-2 text-lg text-white my-5 items-end'> See all category  <IoIosArrowForward className='text-2xl font-bold' /></h1>
            </div>
            <div className='mt-16 flex flex-wrap justify-items-center gap-14 justify-center'>
                <div style={{ backgroundColor: '#1e293b' }} className='flex flex-col items-center gap-10 w-52 h-72 rounded-md pb-10' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div className="categoryIcon gap-5 pt-20">
                        <img src={cssIcon} alt="" className='w-10' />
                    </div>
                    <h1 className='text-white text-2xl'> CSS </h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="2000" style={{ backgroundColor: '#1e293b' }} className='flex flex-col items-center gap-10 w-52 h-72 rounded-md pb-10'>
                    <div className="categoryIcon gap-5 pt-20">
                        <img src={reactIcon} alt="" className='w-10' />
                    </div>
                    <h1 className='text-white text-2xl'> React Js </h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" style={{ backgroundColor: '#6246ea' }} className='flex flex-col items-center gap-10 w-52 h-72 rounded-md pb-10'>
                    <div className="categoryIcon gap-5 pt-20">
                        <img src={javaScriptIcon} alt="" className='w-10' />
                    </div>
                    <h1 className='text-white text-2xl'> JavaScript </h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="2000" style={{ backgroundColor: '#1e293b' }} className='flex flex-col items-center gap-10 w-52 h-72 rounded-md'>
                    <div className="categoryIcon gap-5 pt-20">
                        <img src={nodeJsIcon} alt="" className='w-10' />
                    </div>
                    <h1 className='text-white text-2xl'> Node JS </h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-center" data-aos-duration="2000" style={{ backgroundColor: '#1e293b' }} className='flex flex-col items-center gap-10 w-52 h-72 rounded-md pb-10'>
                    <div className="categoryIcon gap-5 pt-20">
                        <img src={tailWindIcon} alt="" className='w-10' />
                    </div>
                    <h1 className='text-white text-2xl'> Tailwind </h1>
                </div>
            </div>
        </section>
    );
};

export default BlogCategory;