import React from 'react';
import bannerImg from '../../assets/images/hero.png'
import { SiGoogleplay } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';

const Banner = () => {
 return (
   <div className="text-center space-y-8 pt-12">
     <div className="items-center">
       <h1 className="text-5xl font-bold mb-2">
         We Build <br /> <span className="text-purple-500"> Productive </span>
         Apps
       </h1>
       <p>
         At HERO.IO, we craft innovative apps designed to make everyday life
         simpler, smarter, and more exciting. <br /> Our goal is to turn your
         ideas into digital experiences that truly make an impact.
       </p>
     </div>
     <div className="flex justify-center gap-2">
       <button className="btn">
         {' '}
         <SiGoogleplay />
         Google Play
       </button>
       <button className="btn">
         {' '}
         <AiFillAppstore />
         App Store
       </button>
     </div>
     <img src={bannerImg} alt="" className="mx-auto" />
   </div>
 );
};

export default Banner;