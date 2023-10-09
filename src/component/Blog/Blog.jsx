import React from 'react';
import Planing from '../Planing/Planing';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <div className=' text-center '>
                <Planing></Planing>
            </div>
            <div>
                <About></About>
            </div>
           
        </div>
    );
};

export default Blog;