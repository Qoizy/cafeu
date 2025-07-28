import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiBell } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0b0c2a] text-white px-8 shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Cafeu Logo" className=" w-[100px]" />
        </div>

        <nav className="hidden lg:flex space-x-6 left-14 text-sm relative">
          <a href="#" className="hover:text-red=400 font-semibold">
            Home
          </a>

          <div className="relative group">
            <button className="hover:text-red-400">About Us</button>
            <div className="absolute top-full hidden group-hover:block bg-white text-black rounded shadow p-2 w-40">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Our Story
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Team
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-red-400">Menu</button>
            <div className="absolute top-full hidden group-hover:block bg-white text-black rounded shadow p-2 w-40">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Specials
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Categories
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-red-400">Blogs</button>
            <div className="absolute top-full hidden group-hover:block bg-white text-black rounded shadow p-2 w-40">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Latest News
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Blog
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-red-400">Pages</button>
            <div className="absolute top-full hidden group-hover:block bg-white text-black rounded shadow p-2 w-40">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                FAQ
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Gallery
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-red-400">Contact</button>
            <div className="absolute top-full hidden group-hover:block bg-white text-black rounded shadow p-2 w-40">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Email Us
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Our Location
              </a>
            </div>
          </div>
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white hover:text-red-400">
            <FiSearch className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-red-400">
            <FiBell className="h-5 w-5" />
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-400">
            +880123456789
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 px-4 pb-4 bg-[#0b0c2a] text-sm text-white space-y-3 rounded-b-md animate-fadeIn">
          <a href="#" className="block hover:text-red-400">
            Home
          </a>
          <a href="#" className="block hover:text-red-400">
            About Us
          </a>
          <a href="#" className="block hover:text-red-400">
            Menu
          </a>
          <a href="#" className="block hover:text-red-400">
            Blogs
          </a>
          <a href="#" className="block hover:text-red-400">
            Pages
          </a>
          <a href="#" className="block hover:text-red-400">
            Contact
          </a>
          <button className="w-full bg-red-500 text-white py-2 rounded-md text-sm hover:bg-red-400">
            +880123456789
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
