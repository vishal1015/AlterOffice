// Header.jsx
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-16 bg-purple-600 text-white">
      <div className="logo text-2xl font-bold">
        <span className=" text-4xl font-bold text-black">G</span>loom.
      </div>
      <nav className="flex space-x-4 text-lg font-semibold">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md text-black"
          
        />
        
      </div>
    </header>
  );
};

export default Header;
