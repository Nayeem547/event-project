
import Slider from "react-slick";
import imageOne from "../BannerSlider/bg-one.jpg";
import imageTwo from '../BannerSlider/bg-two.jpg';
import './BannerSlider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {

  
    
        const settings = {
            dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
        };
  return (
    <div className="banner-slider w-[270px] md:w-[700px] lg:w-[1400px] justify-center items-center text-center mx-auto ">
      <Slider {...settings}>
        <div className="slide relative">
          <img
            src={imageOne} />
            <div className= " space-y-4 text-center flex flex-col justify-center text-white items-center heading  " >
                <p  data-aos="zoom-in-down" className=" text-lg md:text-xl lg:text-2xl font-light italic  " >We are the Event Management Specialists</p>
                <h1 data-aos="zoom-in-down" className=" md:text-2xl text-xl lg:text-5xl font-sans font-medium " >WE PERSONALIZE YOUR WEDDING EVENTS </h1>
            </div>
        </div>
        <div className="slide" >
          <img
            src={imageTwo} />
            <div className= " space-y-4 text-center flex flex-col justify-center text-white items-center heading  " >
                <p  data-aos="zoom-in-down" className=" text-lg md:text-xl lg:text-2xl font-light italic  " >Birthday Event Management Specialists</p>
                <h1 data-aos="zoom-in-down" className="md:text-2xl text-xl lg:text-5xl font-sans font-medium " >CELEBRATE YOUR EVENTSTHAT LASTS LONGER </h1>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
