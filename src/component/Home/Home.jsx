import {useEffect, useState } from "react";
import BannerSlider from '../BannerSlider/BannerSlider';
import CardRow from '../CardSection/CardRow';
import { useLoaderData } from "react-router-dom";
import Cardmap from "../CardSection/Cardmap";
import Planing from "../Planing/Planing";
import Footer from "../Footer/Footer";

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
           <div>
            <Planing></Planing>
           </div>
           <footer>
           <Footer></Footer>
           </footer>
        </div>
    );
};

export default Home;