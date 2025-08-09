import React from "react";
import { motion } from "framer-motion";

// ✨ FIX: The path now correctly points inside the src directory
import logo from '../assets/tynr-logo.png';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="about"
      className="bg-[#18121f] min-h-screen w-full flex flex-col md:flex-row justify-center items-center py-20 font-poppins"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          @keyframes gradient-text-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-text-animation 10s ease infinite;
          }
        `}
      </style>

      {/* Logo Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] py-8">
        <motion.div
          className="border-4 border-[#7b4e4e] p-6 md:p-10 rounded-lg bg-white flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={logo}
            alt="TYNR Logo"
            style={{ maxWidth: "560px", objectFit: "contain" }}
          />
        </motion.div>
      </div>

      {/* About Text Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
        <div className="max-w-xl w-full text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-500 text-transparent bg-clip-text animate-gradient-text">
            About Me
          </h2>
          <p className="text-base text-white leading-relaxed">
            I am an enthusiastic problem-solver passionate about turning ideas into intelligent, efficient and user-centric solutions. With a strong foundation in artificial intelligence, machine learning and user experience (UX) design, I enjoy creating systems that merge technical precision with creative design. From building data-driven applications to designing intuitive interfaces, I constantly explore new tools, frameworks and algorithms to refine my expertise. My approach blends innovation, adaptability and continuous learning—aiming to craft impactful solutions that address real-world challenges while embracing the future of technology.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;