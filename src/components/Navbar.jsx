import React, { useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <div className="w-full fixed z-50 top-0 left-0 bg-transparent">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo with Text */}
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold text-white">Ib</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg text-white hover:text-gray-200" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md rounded-lg mx-4">
          <div className="flex flex-col space-y-4 px-5 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white text-lg hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;