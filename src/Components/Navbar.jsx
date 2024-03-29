import React, { useState } from "react";
import logo from "../assets/Rectangle.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuopen, setMenuopen] = useState(false);
  const toggle = () => {
    setMenuopen(!isMenuopen);
  };
  const navitems = [
    {
      link: "Overview",
      path: "home",
    },
    {
      link: "Feature",
      path: "feature",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ];
  return (
    <>
    <nav className="bg-white md:px-14 p-4 border-b max-w-screen-2xl mx-auto text-primary fixed left-0 right-0 top-0">
        <div className="text-gl flex justify-between container  mx-auto items-center font-medium ">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img src={logo} className="w-10 inline-block items-center" />{" "}
              <span>XYZ</span>
            </a>
            {/* showing navitem using map */}
            <ul className="md:flex space-x-12 hidden ">
              {navitems.map(({ link, path }) => 
                <a key={link} className="block hover:text-gray-300" href={path}>
                  {link}
                </a>
              )}
            </ul>
          </div>
          {/* language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>language</span>
            </a>
            <button className="bg-secondary hover:text-white hover:bg-indigo-600 rounded duration-300 py-2 px-4 transition-all ">
              Sign up
            </button>
          </div>
          {/* menu btn ony display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggle}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuopen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuopen ? "block top-0 left-0 right-0" : "hidden"
        }`}
      >
        {
        navitems.map(({ link, path }) => <a key={link} className='block
         hover:text-gray-300' href={path}>{link}</a>)
         }
      </div>
      
    </>
  );
};

export default Navbar;
