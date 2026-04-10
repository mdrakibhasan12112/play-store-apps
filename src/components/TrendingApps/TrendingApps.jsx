import React, { useEffect } from 'react';

const TrendingApps = () => {

 useEffect(() => {
  const fetchData = async () => {
   const res = await fetch('/data.json');
   const data = await res.json();
   console.log(data);
 }
fetchData()
 }, []);




 return (
   <div>
     <div className='mb-8 text-center'>
       <h2 className="text-4xl font-bold mb-2">Trending Apps</h2>
       <p>Explore All Trending Apps on the Market developed by us</p>
     </div>
   </div>
 );
};

export default TrendingApps;