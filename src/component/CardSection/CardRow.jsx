import React from 'react';
import { Link } from 'react-router-dom';


const CardRow = ({card}) => {
    const {id,name, image, price, short_description} = card || {}
    
    return (
        <div data-aos="zoom-in-down" >
            <div className="card   w-64 md:80 lg:w-96 h-[500px] bg-base-100 shadow-xl">
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body  items-center text-center">
    <h2 className="card-title text-2xl font-bold text-[#701e43] ">{name}</h2>
    <p className=' font-midium italic text-[#701e43] ' >{short_description}</p>
    <p className=' text-xl italic font-semibold ' > Price : {price}</p>
    <div className="card-actions ">
    <Link to={`/detail/${id}`} >
      <button  className="btn bg-[#701e43] rounded-tl-3xl rounded-br-3xl border-none text-white btn-primary">Book Now</button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardRow;