import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Register scroll events
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });
    Events.scrollEvent.register("end", (to) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Navbar background style: transparent on home, dim gradient for other sections
  const navbarBg =
    activeSection === "home"
      ? "bg-transparent"
      : "bg-gradient-to-r from-[#181d2a] via-[#33294b] to-[#181d2a] bg-opacity-95 backdrop-blur-md"; 
  // ^ You can tweak colors for your desired dim look

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-500 ${navbarBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold cursor-pointer select-none">
          Yoganandha Reddy Thappeta
        </div>
        <ul className="flex space-x-6 text-white font-medium text-lg">
          {[
            "home",
            "about",
            "projects",
            "certifications",
            "skills",
            "experience",
            "contact",
          ].map((section) => {
            const isActive = activeSection === section;
            return (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className={`cursor-pointer hover:text-gray-300 ${
                    isActive
                      ? "text-yellow-300 font-bold border-b-2 border-yellow-300"
                      : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
