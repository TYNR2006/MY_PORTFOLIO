import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "SDE Intern",
    company: "Google AI/ML Virtual Internship",
    duration: "Jan 2025 - Mar 2025",
    description: [
      "Completed Google's AI/ML virtual internship, gaining hands-on experience with machine learning models, data preprocessing, and ethical AI practices.",
    ],
  },
  {
    role: "Intern",
    company: "UDRCrafts",
    duration: "Jul 2025 - Present",
    description: [
      "Worked on system design, debugging, and agile documentation through a virtual simulation, improving problem-solving and collaboration skills.",
    ],
  },
  {
    role: "DTE Intern",
    company: "JP Morgan and Chase Bank Co. Software Engineering Virtual Internship",
    duration: "Mar 2025 - Jul 2025",
    description: [
      "Built REST APIs, integrated Kafka and H2, and worked on backend project setup, gaining practical experience in real-world software development workflows.",
    ],
  },
];

const itemVariants = {
  normal: { scale: 1 },
  zoomed: {
    scale: 1.05,
    transition: { duration: 2, ease: "easeOut" }, // slow smooth zoom
  },
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [zoomedOnce, setZoomedOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !zoomedOnce) {
          setZoomedOnce(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [zoomedOnce]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-gray-900 min-h-screen py-20 px-4 sm:px-8 font-sans text-rose-200"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-serif text-center text-rose-400 mb-16 tracking-wide">
          My Experience
        </h1>
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border-4 border-rose-400"
              variants={itemVariants}
              initial="normal"
              animate={zoomedOnce ? "zoomed" : "normal"}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-rose-400">{job.role}</h2>
                  <h3 className="text-xl font-light text-rose-300">{job.company}</h3>
                </div>
                <p className="text-lg font-light mt-2 sm:mt-0">{job.duration}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-rose-200 pl-4">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
