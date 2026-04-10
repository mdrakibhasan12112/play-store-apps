import React from 'react';
import navlogo from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
 return (
   <nav className="bg-base-100 shadow-sm">
     <div className="flex justify-between items-center py-2 container mx-auto">
       <div className="flex gap-2 items-center">
         <img src={navlogo} alt="" className="max-w-[50px]" />
         <h4 className="text-purple-600">HERO.IO</h4>
       </div>
       <ul className="flex justify-center gap-4">
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/apps">Apps</Link>
         </li>
         <li>
           <Link to="/installation">Installation</Link>
         </li>
       </ul>
       <button className="btn bg-purple-500 text-white">
         <FaGithub />
         Contribute
       </button>
     </div>
   </nav>
 );
};

export default Navbar;