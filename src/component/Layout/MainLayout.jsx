import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {

   useEffect(()=>{
    Aos.init({
        duration : 2000 ,
        offset: 100, 
      easing: 'ease-in-out',
    });
   }, []);
       return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;