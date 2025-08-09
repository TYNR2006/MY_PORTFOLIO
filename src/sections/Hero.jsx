import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPenNib } from "react-icons/fa";  // <-- Import PenNib icon

// Icon components (unchanged)
const LaptopCodeIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
    <line x1="10" y1="18" x2="10.01" y2="18"></line>
  </svg>
);

const RobotIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="2"></rect>
    <line x1="12" y1="2" x2="12" y2="10"></line>
    <line x1="8" y1="14" x2="16" y2="14"></line>
  </svg>
);

const BrainIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 11c1.92-2.14 3-4.99 3-8a3 3 0 0 0-6 0c0 3.01 1.08 5.86 3 8z"></path>
    <path d="M21 16c0 1.25-.56 2.45-1.55 3.32C18.45 20.2 16.2 21 12 21c-4.2 0-6.45-.8-7.45-1.68C3.56 18.45 3 17.25 3 16s.56-2.45 1.55-3.32C5.55 11.75 7.8 11 12 11c4.2 0 6.45.75 7.45 1.68C20.44 13.55 21 14.75 21 16z"></path>
  </svg>
);

const EyeIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const roleColors = ["#d49b9c", "#6c9bcf", "#8fbc8f", "#db7e7e", "#f59e0b"]; // Added a 5th color

const roles = [
  { name: "Full Stack Development", Icon: LaptopCodeIcon },
  { name: "Machine Learning", Icon: RobotIcon },
  { name: "Deep Learning", Icon: BrainIcon },
  { name: "Computer Vision", Icon: EyeIcon },
  { name: "UI/UX Designer", Icon: FaPenNib }, // <-- Use imported icon here
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentColor = roleColors[roleIndex];
  const CurrentIcon = roles[roleIndex].Icon;

  return (
    <section
      id="home"
      className="w-full h-screen flex overflow-hidden relative font-[Poppins,sans-serif]"
      style={{ background: "#151a25" }}
    >
      {/* Pink Stripe on the right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "8px",
          height: "100%",
          background: "#f7b5bc",
          borderRadius: "4px 0 0 4px",
          zIndex: 30,
        }}
      ></div>

      {/* Left Side */}
      <motion.div
        className="w-1/2 flex items-center justify-center z-20 bg-[#151a25] text-[#f4f4f4] pl-16 pr-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-lg">
          <h2 className="text-2xl mb-2 font-semibold">Hello, I'm</h2>
          <h1 className="text-5xl font-bold mb-2">Yoganandha Reddy Thappeta</h1>
          <h3 className="text-xl mb-4 text-[#c9c1c1] font-medium">
            AI Engineer & ML Specialist
          </h3>
          <p className="mb-8 text-base leading-relaxed text-[#c9c1c1]">
            Passionate about transforming data into actionable intelligence with{" "}
            <strong>Machine Learning</strong> and <strong>Deep Learning</strong>.
            <br />
            <br />
            Experienced in building and deploying AI-integrated solutions with{" "}
            <strong>Python, TensorFlow, PyTorch</strong>, and modern cloud platforms.
            <br />
            <br />
            Committed to scalable, innovative tech that bridges advanced algorithms and real-world impact.
          </p>
          <button
            className="bg-[#d49b9c] text-[#f4f4f4] py-2 px-6 rounded font-semibold shadow hover:bg-[#e0aeb0] transition focus:outline-none focus:ring-0"
            onClick={() => {
              // Your resume download logic here
            }}
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
        {/* Gradient Background */}
        <div
          className="w-[130vw] h-screen absolute left-[-30vw] top-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, #181d2a 0%, #33294b 70%, #f7b5bc 100%)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 35% 100%, 50% 50%)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div
            className="absolute rounded-full flex flex-col items-center justify-center"
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
                className="text-lg font-semibold tracking-wide text-center flex flex-col items-center"
                style={{ color: currentColor }}
              >
                <CurrentIcon size={36} color={currentColor} />
                <span className="mt-2">{roles[roleIndex].name}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
