import React from 'react';

const Navbar = () => {
    const navMenu = [
        <>
        <li><a>Home</a></li>
        <li><a>Category</a></li>
        <li><a>About me</a></li>
        <li><a>Search</a></li>
       
        </>
    ]
    return (
        <section style={{backgroundColor:'#0b1120'}} className=' drop-shadow-2xl border-b border-indigo-800  sticky top-0'>
            <div className="navbar  px-20 h-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                            {navMenu}
                            
                        </ul>
                    </div>
                    <a className="btn bg-transparent border-0 hover:bg-transparent normal-case lg:text-4xl text-white">PERSONAL BLOG</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-xl ">
                        
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className='btn'> Buy Me a Coffee </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;