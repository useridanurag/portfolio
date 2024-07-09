import React, { useState } from 'react';
import { RiMenuFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed z-10 w-full">
      <div className="max-w-8xl mx-auto px-10 sm:px-16 lg:px-20">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bggreen-500/10 focus:outline-none focus:bg-green-500/10 focus:text-white transition duration-150 ease-in-out"
            >
              <span className={`${isOpen ? 'hidden' : 'block'}`}>
                <RiMenuFill className='text-2xl' />
              </span>
              <span
                className={`${isOpen ? 'block' : 'hidden'}`}>
                <CgClose className='text-2xl' />
              </span>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <span className="hidden lg:block h-8 w-auto font-bold text-xl cursor-pointer"><Link to="home" smooth={true} duration={500}>Anurag's Portfolio</Link></span>
              
              <span className="block lg:hidden h-8 w-auto font-bold text-xl pl-8 sm:pl-0 cursor-pointer"><Link to="home" smooth={true} duration={500}>Anurag's Portfolio</Link></span>
            </div>
            <div className="w-full hidden sm:block sm:ml-6">
              <div className="flex justify-end">
                <p className="cursor-pointer px-3 py-2 rounded-md text-base font-medium text-white bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="home" smooth={true} duration={500}>Home</Link></p>
                <p className="cursor-pointer ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="about" smooth={true} duration={500}>About</Link></p>
                <p className="cursor-pointer ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="skills" smooth={true} duration={500}>Skills</Link></p>
                <p className="cursor-pointer ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="projects" smooth={true} duration={500}>Projects</Link></p>
                <p className="cursor-pointer ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="contact" smooth={true} duration={500}>Contact</Link></p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <p className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-white bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="home" smooth={true} duration={500}>Home</Link></p>
          <p className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="about" smooth={true} duration={500}>About</Link></p>
          <p className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="skills" smooth={true} duration={500}>Skills</Link></p>
          <p className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="projects" smooth={true} duration={500}>Projects</Link></p>
          <p className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="contact" smooth={true} duration={500}>Contact</Link></p>
          <p className="cursor-pointer mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-500/10 focus:outline-none focus:text-white focus:bg-green-500/10 transition duration-150 ease-in-out"><Link to="footer" smooth={true} duration={500}>Resume</Link></p>
        </div>
      </div>
      <div className="px-auto border-b border-zinc-600 max-w-8xl mx-10 sm:mx-16 lg:mx-20 " ></div>

    </nav>
  );
};

export default Navbar;
