import React from 'react';
import { HiOutlineChevronDown } from "react-icons/hi"

const Arrow = () => {
    return (
        <section>
            <div className='mt-52 flex justify-center pb-16'>
               <div>
               <HiOutlineChevronDown className='text-5xl text-white text-center items-center'/>
               </div>
                <div></div>
            </div>
        </section>
    );
};

export default Arrow;