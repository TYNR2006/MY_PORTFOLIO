import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

// Certification Card Component with enhanced hover effects
const CertificationCard = ({ title, issuer, date, verificationLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, y: -5, backgroundColor: "#2f4f4f", transition: { duration: 0.3 } }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-[#2c2727] p-6 rounded-lg shadow-lg cursor-pointer border-2 border-transparent"
  >
    <h3 className="text-xl font-bold mb-2 text-[#f4f4f4]">{title}</h3>
    <p className="text-sm text-[#c9c1c1] mb-2">{issuer}</p>
    <p className="text-xs text-[#c9c1c1] mb-4">Completed: {date}</p>
    {verificationLink && (
      <a
        href={verificationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3498db] text-sm hover:underline"
      >
        Verify Credential
      </a>
    )}
  </motion.div>
);

// Certification Data
const certifications = [
  {
    title: "AI-ML Virtual Internship",
    issuer: "AICTE EduSkills & Google for Developers",
    date: "April - June 2025",
    verificationLink: "https://www.linkedin.com/in/yoganandhareddythappeta/"
  },
  {
    title: "Developer and Technology Job Simulation",
    issuer: "Accenture & Forage",
    date: "March 20th, 2025",
    verificationLink: "https://www.theforage.com/certificates/NgvTX7r5KBcbudDoP"
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI & Coursera",
    date: "Dec 13, 2024",
    verificationLink: "https://coursera.org/verify/Z6YJX3J8XTFH"
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn & Google Cloud",
    date: "July 21st, 2025",
    verificationLink: null
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud & Coursera",
    date: "Mar 21, 2025",
    verificationLink: "https://coursera.org/verify/N7PQX53OQZKZ"
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud & Coursera",
    date: "Mar 23, 2025",
    verificationLink: "https://coursera.org/verify/T72QNFAPC2U9"
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM & Coursera",
    date: "Mar 23, 2025",
    verificationLink: "https://coursera.org/verify/KWEYHWZZHSLF"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud & Coursera",
    date: "Mar 23, 2025",
    verificationLink: "https://coursera.org/verify/RM6R03IGNEBK"
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud & Coursera",
    date: "Mar 23, 2025",
    verificationLink: "https://coursera.org/verify/JW9ZCBQX9OSH"
  },
];

const App = () => {
  return (
    <section
      id="certifications"
      className="w-full min-h-screen flex flex-col items-center bg-[#2c2727] text-[#f4f4f4] p-10 font-sans"
    >
      <style>
        {`
          @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient-animation 15s ease infinite;
          }
        `}
      </style>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
        My Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default App;
