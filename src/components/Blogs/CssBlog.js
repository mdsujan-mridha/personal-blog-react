import React from 'react';
import { AiOutlineLine } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import articeImg from "../img/cssImg-1.png";
import articeImg1 from "../img/cssImg-2.png";
import articeImg2 from "../img/CssImg.png";
import articeImg3 from "../img/Article_Image-3.png";

const CssBlog = () => {
    return (
        <section className='pb-28  mt-12 '>
            <div className='flex flex-col md:flex-row justify-between px-28 md:px-80 flex-wrap'>
                <h1 className='flex  gap-2 text-xl text-white my-5 items-end'>CSS <AiOutlineLine className='text-2xl font-bold' /></h1>
                <h1 className='flex  gap-2 text-lg text-white my-5 items-end'> See all category  <IoIosArrowForward className='text-2xl font-bold' /></h1>
            </div>
            <div className='mt-16 flex flex-wrap justify-items-center gap-14 justify-center'>
                
            <div data-aos="fade-right" data-aos-duration="3000" style={{backgroundColor:'#141b3b'}} className='flex flex-col  items-center gap-10 w-72 h-auto rounded-md pb-10'>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-2xl '> Flexbox cSS : Everything you need to know </h1>
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
                             <h1 className='text-xl'> Dasteen <br/> </h1>
                              <p className='font-bold opacity-7'>Jan 10, 2022</p>
                              <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:'#141b3b'}} className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 '>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg1} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-2xl '> Grid CSS make your life easier </h1>
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
                             <h1 className='text-xl'> Dasteen <br/> </h1>
                              <p className='font-bold opacity-7'>Jan 10, 2022</p>
                              <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-down" data-aos-duration="3000" style={{backgroundColor:'#141b3b'}} className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 '>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg2} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-2xl '> Make animated light mode and dark mode toggle with CSS </h1>
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
                             <h1 className='text-xl'> Dasteen <br/> </h1>
                              <p className='font-bold opacity-7'>Jan 10, 2022</p>
                              <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" style={{backgroundColor:'#141b3b'}} className='flex flex-col items-center gap-10 w-72 h-auto rounded-md pb-10 '>
                    <div className="categoryIcon gap-5 pt-1 px-1">
                        <img src={articeImg3} alt="" className='w-full' />
                    </div>
                    <h1 className='text-white text-2xl '> 3 easy way to make div center </h1>
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
                             <h1 className='text-xl'> Dasteen <br/> </h1>
                              <p className='font-bold opacity-7'>Jan 10, 2022</p>
                              <p className='text-sm font-semibold'> 3 min read</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CssBlog;