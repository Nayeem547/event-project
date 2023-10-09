import React from 'react';
import birthday from "./birthday.jpg";
import cake from "./cake.jpg";
import pic from "./pic.jpg"
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className=' mt-14 ' >
            <div>
                <div className=' text-center space-y-4 ' >
                    <h2 className=' text-xl md:text-2xl lg:text-5xl font-semibold text-yellow-400  ' >We Create Events That Lasts</h2>
                    <p className=' italic text-xl ' >From Wedding Functions to Birthday Parties or Corporate  Events to Musical Functions,<br /> We offer full range of Events Management Services that scale to your needs & budget.</p>
                </div>
                <div className='mt-14 mx-auto items-center text-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >

                    <div className=' space-y-3 text-2xl font-semibold  mx-auto '>
                        <div>
                            <img className='rounded-lg' src={birthday} alt="" />
                        </div>
                        <h2>Our Vision</h2>
                    </div>
                    <div className=' space-y-3 text-2xl font-semibold  mx-auto '>
                        <div className=' mx-auto '>
                            <img className='rounded-lg' src={cake}alt="" />
                        </div>
                        <h2>Our Approach</h2>
                    </div>
                    <div className=' space-y-3 text-2xl font-semibold  mx-auto '>
                        <div>
                            <img className='rounded-lg' src={pic} alt="" />
                        </div>
                        <h2>Our Goals</h2>
                    </div>
                   

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;