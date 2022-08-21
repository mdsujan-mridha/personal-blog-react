import React from 'react';
import headerImg from "../img/header.png";
import dotBackground from "../img/Dot.png";


const Header = () => {
    return (
        <section
             className='px-20 pb-6'>
            <div className="hero  flex flex-col-reverse gap-5 md:flex-row justify-evenly pt-20">
                <div  className="left-container " data-aos="fade-right" data-aos-duration="1500">
                    <h1 className='text-white text-5xl font-bold leading-tight'>Hi, <span>im</span> Dasteen <br />
                        Front end dev</h1>
                    <p className='py-10 font-semibold'>
                        On this blog I share tips and tricks, frameworks, projects, tutorials, etc<br/>
                        Make sure you subscribe to get the latest updates
                    </p>
                    <div className='flex flex-col gap-5 md:flex-row gap-5'>
                        <input type="text" name="text" id="1" placeholder='Enter your email here....' className='h-12 w-96  border rounded-md p-4'/>
                        <input style={{backgroundColor:'#1e293b'}} type="submit" value="Subscribe" className='w-40 h-12 text-xl text-white cursor-pointer rounded-md'/>
                    </div>
                </div>
                <div  className="right-container" data-aos="fade-left" data-aos-duration="2000">
                    <img src={headerImg} alt="" className="headerImg" />
                </div>
            </div>
            
        </section>
    );
};

export default Header;