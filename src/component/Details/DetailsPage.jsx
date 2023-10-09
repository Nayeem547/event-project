import React from 'react';

const DetailsPage = ({card}) => {
    const {name, image, price, short_description} = card || {}
    return (
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-6  lg:grid-cols-2 ' >
        <div>
            <img className=' rounded-xl h-96 ' src={image} alt="" />
        </div>
        <div className='  text-left space-y-5 justify-center flex flex-col ' >
            <h1 className=' text-4xl font-semibold '>Welcome to our Events</h1>
            <h2 className='text-3xl  italic font-semibold ' >With a full range of Event Planning Services</h2>
            <h2 className=' text-2xl text-yellow-500 font-semibold ' >{name}</h2>
            <p className=' text-lg w-auto ' >{short_description}</p>
             <p className=' font-semibold  text-yellow-600' > Price: {price}</p>
        </div>
      </div>
    );
};

export default DetailsPage;