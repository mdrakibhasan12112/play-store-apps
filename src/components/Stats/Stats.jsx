import React from 'react';

const Stats = () => {
 return (
   <div className="bg-purple-600 text-white text-center py-10">
     <h2 className="text-4xl font-bold">Trusted by Millions, Built for You</h2>
     <div className="flex justify-around mt-5 ">
       <div>
         <span>Total Downlode</span>
         <h3 className="text-4xl font-bold">29.6M</h3>
         <span>46% more than last month</span>
       </div>
       <div>
         <span>Total Reviews</span>
         <h3 className="text-4xl font-bold">906K</h3>
         <span>31 more will Launch</span>
       </div>
       <div>
         <span>Active Apps</span>
         <h3 className="text-4xl font-bold">
           132<span>+</span>
         </h3>
         <span>21% more than last month</span>
       </div>
     </div>
   </div>
 );
};

export default Stats;