import React from 'react';
import navlogo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="flex justify-between items-center py-2 container mx-auto">
        <div className="flex gap-2 items-center">
          <img src={navlogo} alt="" className="max-w-[50px]" />
          <h4 className="text-purple-800 font-semibold">HERO.IO</h4>
        </div>

        <ul className="flex justify-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-purple-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) => (isActive ? 'text-purple-500' : '')}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) => (isActive ? 'text-purple-500' : '')}
            >
              Installation
            </NavLink>
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
