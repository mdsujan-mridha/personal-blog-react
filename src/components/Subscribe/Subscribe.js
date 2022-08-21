import React from 'react';
import subscribeImg from "../img/Icon.png";

const Subscribe = () => {
    return (
        <section data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000" style={{ backgroundColor: "#141b3b" }} className='pt-10 pb-20 mb-5'>
            <div className='mt-16 flex flex-col  h-auto justify-items-center gap-14 justify-center pt-10'>
                <div style={{ margin: '0 auto' }} className='items-center'>
                    <img src={subscribeImg} alt="" className='items-center' />
                </div>
                <div className="subscribe-container">
                    <h1 className='text-5xl text-center text-white font-bold'> Subscribe For the lastest updates </h1>
                    <p className='text-center text-white-100 my-7 text-xl font-semibold opacity-75'> Subscribe to newsletter and never miss the new post every week.</p>
                </div>
                <div className="flex justify-center gap-5">
                    <input type="text" name="text" id="1" placeholder='Enter your email here....' className='h-12 w-96  border rounded-md p-4' />
                    <input style={{ backgroundColor: '#1e293b' }} type="submit" value="Subscribe" className='w-40 h-12 text-xl text-white cursor-pointer rounded-md' />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;