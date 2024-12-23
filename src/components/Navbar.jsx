import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../images/TERENCE-LOGO.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center h-16">
        <img
          src={logo}
          alt="Terence Ouma Logo"
          className="h-12 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-800 hover:text-[#E2FF7D]">
            Home
          </a>
          <a href="#skills" className="text-gray-800 hover:text-[#E2FF7D]">
            Skills
          </a>
          <a href="#projects" className="text-gray-800 hover:text-[#E2FF7D]">
            Projects
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 focus:outline-none text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 top-16 bg-white md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 border-t border-gray-200">
          <a
            href="#hero"
            className="text-gray-800 hover:text-[#E2FF7D] w-full text-center py-4 text-lg"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-800 hover:text-[#E2FF7D] w-full text-center py-4 text-lg"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-[#E2FF7D] w-full text-center py-4 text-lg"
            onClick={toggleMenu}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
