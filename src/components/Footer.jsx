import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left mb-6 md:mb-0">
            <a href="#hero" className="text-gray-600 hover:text-[#E2FF7D]">
              Home
            </a>
            <a href="#skills" className="text-gray-600 hover:text-[#E2FF7D]">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-[#E2FF7D]">
              Projects
            </a>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-600 hover:text-[#E2FF7D] transition-colors"
          >
            <span>Back to Top</span>
            <IoIosArrowUp className="text-xl" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Copyright and LinkedIn */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Terence Ouma. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/terenceouma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-[#E2FF7D] transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;