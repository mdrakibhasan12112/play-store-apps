import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router';
import useAppsData from '../../customHook/useAppsData';

const Apps = () => {

 const {apps,loading} =useAppsData()
 
 
 return (
   <div className="container mx-auto py-12">
     <div className="mb-8 text-center">
       <h2 className="text-4xl font-bold mb-2">Our All Applications</h2>
       <p>
         Explore All Apps on the Market developed by us. We code for Millions
       </p>
     </div>

     {loading ? (
       <div className="flex justify-center text-center">
         <ColorRing
           visible={true}
           height="80"
           width="80"
           ariaLabel="color-ring-loading"
           wrapperStyle={{}}
           wrapperClass="color-ring-wrapper"
           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         />
       </div>
     ) : (
       <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {apps.map(app => (
             <div key={app.id}>
               <div className="card bg-base-100 shadow-sm">
                 <figure>
                   <img
                     className="h-[200px] w-auto"
                     src={app.image}
                     alt={app.title}
                   />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{app.title}</h2>

                   <div className="flex justify-between items-center gap-4">
                     <span className="text-green-400 bg-gray-200 py-1 px-2 flex gap-1 items-center rounded-md">
                       <FaDownload />
                       {app.downloads}
                     </span>
                     <span className="text-orange-400 bg-gray-200 py-1 px-2 flex gap-1 items-center rounded-md">
                       <FaStar />
                       {app.ratingAvg}
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </>
     )}
   </div>
 );
 };


export default Apps;