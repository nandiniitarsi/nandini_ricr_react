import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import img1 from '../assets/img4.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { Banner } from '../components/banner';

export const Home = () => {
   return (
           <>
           <Banner Text={"Home"}/>    
           <div className="container imageposter">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
           </div>
           </>
);
}
