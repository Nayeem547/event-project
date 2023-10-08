import {useEffect, useState } from "react";
import BannerSlider from '../BannerSlider/BannerSlider';
import CardRow from '../CardSection/CardRow';
import { useLoaderData } from "react-router-dom";
import Cardmap from "../CardSection/Cardmap";

const Home = () => {
    const getCarded = useLoaderData();
    const [carded, setCarded] = useState([]);
  useEffect(() => {
    setCarded(getCarded);
  }, []);
    return (
        <div>
            <div>
            <BannerSlider></BannerSlider>
            </div>
           <div>
            <Cardmap carded={carded} ></Cardmap>
           </div>
        </div>
    );
};

export default Home;