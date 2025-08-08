import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons have been replaced with inline SVGs to avoid the "react-icons/fa"
// dependency error and make the code self-contained.

// SVG component for a laptop
const LaptopCodeIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
    <line x1="10" y1="18" x2="10.01" y2="18"></line>
  </svg>
);

// SVG component for a robot
const RobotIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="2"></rect>
    <line x1="12" y1="2" x2="12" y2="10"></line>
    <line x1="8" y1="14" x2="16" y2="14"></line>
  </svg>
);

// SVG component for a brain
const BrainIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 11c1.92-2.14 3-4.99 3-8a3 3 0 0 0-6 0c0 3.01 1.08 5.86 3 8z"></path>
    <path d="M21 16c0 1.25-.56 2.45-1.55 3.32C18.45 20.2 16.2 21 12 21c-4.2 0-6.45-.8-7.45-1.68C3.56 18.45 3 17.25 3 16s.56-2.45 1.55-3.32C5.55 11.75 7.8 11 12 11c4.2 0 6.45.75 7.45 1.68C20.44 13.55 21 14.75 21 16z"></path>
  </svg>
);

// SVG component for an eye
const EyeIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// SVG component for language
const LanguageIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21l1-6.5C6 11 7 10 9 10c2 0 3 1 3 3v6"></path>
    <path d="M19 21l-1-6.5c0-4-1-5-3-5s-3 1-3 3v6"></path>
    <line x1="5" y1="21" x2="19" y2="21"></line>
  </svg>
);

// SVG component for cloud upload
const CloudUploadIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a4 4 0 0 1-4-4"></path>
    <path d="M12 20a4 4 0 0 0 4-4"></path>
    <path d="M12 20v-8"></path>
    <path d="M8 12c-2.3 0-4-1.7-4-4s1.7-4 4-4c.7 0 1.4.2 2 .5C10.7 2.3 12.3 1 14 1c3.3 0 6 2.7 6 6s-2.7 6-6 6c-.7 0-1.4-.2-2-.5A4.008 4.008 0 0 1 8 12z"></path>
    <path d="M16 12v4"></path>
    <path d="M12 8a4 4 0 0 1 4 4"></path>
  </svg>
);

// The color palette has been updated to include a muted blue for the gradient.
// The primary accent color is still Dusty Rose.
// Background Left: #383030 (Dark Grayish-Brown)
// Primary Text: #f4f4f4 (Off-White)
// Secondary Text: #c9c1c1 (Warm Gray)
// Accent/Icon/Button: #d49b9c (Dusty Rose)
// Accent Hover: #e0aeb0 (Lighter Dusty Rose)
// Gradient Bottom: #4a6f8b (Muted Blue)

const roles = [
  { name: "Full Stack Development", icon: <LaptopCodeIcon size={24} color="#d49b9c" /> },
  { name: "Machine Learning", icon: <RobotIcon size={24} color="#d49b9c" /> },
  { name: "Deep Learning", icon: <BrainIcon size={24} color="#d49b9c" /> },
  { name: "Computer Vision", icon: <EyeIcon size={24} color="#d49b9c" /> },
  { name: "Natural Language Processing (NLP)", icon: <LanguageIcon size={24} color="#d49b9c" /> },
  { name: "MLOps & Model Deployment", icon: <CloudUploadIcon size={24} color="#d49b9c" /> },
  { name: "AI Engineer", icon: <BrainIcon size={24} color="#d49b9c" /> },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen flex overflow-hidden relative font-[Poppins,sans-serif]">
      {/* Left Side */}
      <motion.div
        className="w-1/2 flex items-center justify-center z-20 bg-[#383030] text-[#f4f4f4] pl-16 pr-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-lg">
          <h2 className="text-2xl mb-2 font-semibold">Hello, I'm</h2>
          <h1 className="text-5xl font-bold mb-2">Yoganandha Reddy Thappeta</h1>
          <h3 className="text-xl mb-4 text-[#c9c1c1] font-medium">AI Engineer & ML Specialist</h3>
          <p className="mb-8 text-base leading-relaxed text-[#c9c1c1]">
            Passionate about transforming data into actionable intelligence with <strong>Machine Learning</strong> and <strong>Deep Learning</strong>.<br /><br />
            Experienced in building and deploying AI-integrated solutions with <strong>Python, TensorFlow, PyTorch</strong>, and modern cloud platforms.<br /><br />
            Committed to scalable, innovative tech that bridges advanced algorithms and real-world impact.
          </p>
          <button
            className="bg-[#d49b9c] text-[#f4f4f4] py-2 px-6 rounded font-semibold shadow hover:bg-[#e0aeb0] transition focus:outline-none focus:ring-0"
          >
            Download Resume
          </button>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-1/2 h-full flex items-center justify-center relative overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          style={{
            width: "130vw",
            height: "100vh",
            // The background has been changed to a linear gradient
            background: "linear-gradient(to top, #4a6f8b, #d49b9c)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 35% 100%, 50% 50%)",
            position: "absolute",
            left: "-30vw",
            top: 0,
            zIndex: 0,
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "2px solid #e0aeb0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              position: "relative",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex].name}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="text-[#d49b9c] text-lg font-semibold tracking-wide text-center flex flex-col items-center"
              >
                {roles[roleIndex].icon}
                <span className="mt-2">{roles[roleIndex].name}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative SVG curve */}
          <svg
            width="80"
            height="340"
            viewBox="0 0 100 400"
            style={{
              position: "absolute",
              left: "50%",
              top: "10%",
              transform: "translateX(-40px)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            <path
              d="M 0 200 Q -50 200 0 400"
              fill="none"
              stroke="#d49b9c"
              strokeWidth="3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
