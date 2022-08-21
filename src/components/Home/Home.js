import React from 'react';
import BlogCategory from '../BlogCategory/BlogCategory';
import CssBlog from '../Blogs/CssBlog';
import FeaturedBlog from '../Blogs/FeaturedBlog';
import JavaScriptPost from '../Blogs/JavaScriptPost';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Arrow from './Arrow';


const Home = () => {
    return (
        <section>
            <Header/>
            <Arrow/>
            <BlogCategory/>
            <FeaturedBlog/>
            <CssBlog/>
            <JavaScriptPost/>
            <Subscribe/>
        </section>
    );
};

export default Home;