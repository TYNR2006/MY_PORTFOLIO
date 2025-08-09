import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaPaintBrush, FaUsers } from 'react-icons/fa';

const skillsData = {
  'Core Technologies': {
    icon: <FaPython className="inline text-rose-400 mr-2" />,
    skills: [
      'Python (AI, Machine Learning, Deep Learning)',
      'JavaScript (ES6+)',
      'Java',
      'HTML5 & CSS3',
      'C',
      'Bootstrap & Tailwind CSS',
    ],
  },
  'AI/ML & Data Science': {
    icon: <FaBrain className="inline text-rose-400 mr-2" />,
    skills: [
      'Scikit-learn, TensorFlow, PyTorch',
      'Natural Language Processing (NLP)',
      'Computer Vision (OpenCV, CNNs)',
      'Recommendation Systems',
      'Data Analysis & Visualization (Pandas, Matplotlib)',
    ],
  },
  'UX/UI & Product Design': {
    icon: <FaPaintBrush className="inline text-rose-400 mr-2" />,
    skills: [
      'Figma & Canva',
      'User Experience (UX) Research',
      'Wireframing & Prototyping',
      'UI Design Principles',
      'Responsive Web Design',
    ],
  },
  'Professional Attributes': {
    icon: <FaUsers className="inline text-rose-400 mr-2" />,
    skills: [
      'Problem-Solving & Critical Thinking',
      'Leadership & Collaboration',
      'Effective Communication',
      'Time Management',
      'Adaptability & Continuous Learning',
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-900 min-h-screen py-20 px-4 sm:px-8 font-sans text-rose-200"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-serif text-center text-rose-400 mb-16 tracking-wide">
          My Skills
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center">
          {Object.entries(skillsData).map(([category, data], index) => (
            <motion.div
              key={category}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="flex-1 min-w-[280px] p-8 rounded-2xl shadow-lg bg-gray-800 border-4 border-rose-400 cursor-pointer"
            >
              <h2 className="text-2xl sm:text-3xl font-serif text-center text-rose-400 mb-6 border-b-2 border-rose-400 pb-2">
                {data.icon}
                {category}
              </h2>
              <ul className="list-none space-y-3 text-center">
                {data.skills.map((skill, i) => (
                  <li key={i} className="text-lg sm:text-xl tracking-wider">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
