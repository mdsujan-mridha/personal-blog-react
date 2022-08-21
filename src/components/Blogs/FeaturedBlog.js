import React from 'react';
import { AiOutlineLine } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import articeImg from "../img/articalImg-1.png";
import articeImg1 from "../img/Article_Image-2.png";
import articeImg2 from "../img/Article_Image.png";
import articeImg3 from "../img/Article_Image-3.png";

const FeaturedBlog = () => {
    return (
        <section className='pb-28  mt-24 '>
            <div className='flex flex-col md:flex-row justify-between px-28 md:px-80 flex-wrap'>
                <h1 className='flex  gap-2 text-xl text-white my-5 items-end'>Featured Article <AiOutlineLine className='text-2xl font-bold' /></h1>
                <h1 className='flex  gap-2 text-lg text-white my-5 items-end'> See all category  <IoIosArrowForward className='text-2xl font-bold' /></h1>
            </div>
            <div className='mt-16 flex flex-wrap justify-items-center gap-14 justify-center'>

                <div data-aos="zoom-in" data-aos-duration="3000" className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 border border-opacity-25'>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-xl px-2'> Fundamental of javascript </h1>
                    <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae pariatur iusto in et magni!</p>
                    <div className='flex justify-center gap-7 justify-items-center'>
                        <div className="avater">
                            <div class="avatar online">
                                <div class="w-20 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center justify-items-center">
                            <h1 className='text-xl'> Dasteen <br /> </h1>
                            <p className='font-bold opacity-7'>Jan 10, 2022</p>
                            <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 border border-opacity-25'>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg1} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-xl px-2'> Grid CSS make your life easier </h1>
                    <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae pariatur iusto in et magni!</p>
                    <div className='flex justify-center gap-7 justify-items-center'>
                        <div className="avater">
                            <div class="avatar online">
                                <div class="w-20 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center justify-items-center">
                            <h1 className='text-xl'> Dasteen <br /> </h1>
                            <p className='font-bold opacity-7'>Jan 10, 2022</p>
                            <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000" className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 border border-opacity-25'>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg2} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-xl px-2'> Make animated light mode and dark mode toggle with CSS </h1>
                    <p className='px-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae pariatur iusto in et magni!</p>
                    <div className='flex justify-center gap-7 justify-items-center'>
                        <div className="avater">
                            <div class="avatar online">
                                <div class="w-20 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center justify-items-center">
                            <h1 className='text-xl'> Dasteen <br /> </h1>
                            <p className='font-bold opacity-7'>Jan 10, 2022</p>
                            <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="2000" className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 border border-opacity-25'>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg3} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-xl px-2'> Make tic tac toe games with react JS </h1>
                    <p className='px-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae pariatur iusto in et magni!</p>
                    <div className='flex justify-center gap-7 justify-items-center'>
                        <div className="avater">
                            <div class="avatar online">
                                <div class="w-20 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center justify-items-center">
                            <h1 className='text-xl'> Dasteen <br /> </h1>
                            <p className='font-bold opacity-7'>Jan 10, 2022</p>
                            <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedBlog;