import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-green-500 via-blue-600 to-red-600 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-white text-2xl font-bold">
          Yoganandha Reddy Thappeta
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-white font-medium text-lg">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Certifications
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
