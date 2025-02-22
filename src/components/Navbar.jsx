import React from 'react';
import { NavLink } from 'react-router-dom';
import { Anchor, Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Anchor className="h-8 w-8" />
              <span className="font-bold text-xl">L&T Sustainable Ports</span>
            </NavLink>
          </div>
          <div className="flex space-x-6">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `hover:text-teal-200 transition-colors ${isActive ? 'text-teal-200' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/solutions"
              className={({ isActive }) => 
                `hover:text-teal-200 transition-colors ${isActive ? 'text-teal-200' : ''}`
              }
            >
              Solutions
            </NavLink>
            <NavLink 
              to="/sustainability"
              className={({ isActive }) => 
                `hover:text-teal-200 transition-colors ${isActive ? 'text-teal-200' : ''}`
              }
            >
              Sustainability
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `hover:text-teal-200 transition-colors ${isActive ? 'text-teal-200' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;