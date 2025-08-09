import React from "react";
import { motion } from "framer-motion";

// SVG component for a Github icon
const GithubIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// SVG component for an external link icon
const ExternalLinkIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <path d="M15 3h6v6"></path>
    <path d="M10 14L21 3"></path>
  </svg>
);

// Projects data
const projects = [
  {
    title: "Crop Disease Detection AI",
    description: "AI model that detects plant diseases from leaf images and recommends treatment.",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    image: "https://placehold.co/400x300/2c2727/c9c1c1?text=Project+Image+1",
    github: "https://github.com/TYNR2006/crop-disease-ai",
    demo: "#",
  },
  {
    title: "Voice Assistant - Kasi",
    description: "Custom Python voice assistant capable of performing multiple daily tasks.",
    tech: ["Python", "SpeechRecognition", "Pyttsx3"],
    image: "https://placehold.co/400x300/2c2727/c9c1c1?text=Project+Image+2",
    github: "https://github.com/TYNR2006/kasi-voice-assistant",
    demo: "#",
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI chatbot using NLP models to answer queries in real-time.",
    tech: ["Python", "HuggingFace", "Flask"],
    image: "https://placehold.co/400x300/2c2727/c9c1c1?text=Project+Image+3",
    github: "https://github.com/TYNR2006/ai-chatbot",
    demo: "#",
  },
  {
    title: "Movie Recommendation System",
    description: "Content-based and collaborative filtering recommendation system for movies.",
    tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
    image: "https://placehold.co/400x300/2c2727/c9c1c1?text=Project+Image+4",
    github: "https://github.com/TYNR2006/movie-recommendation",
    demo: "#",
  },
  {
    title: "AI Resume Analyzer & Job Matcher",
    description: "Uses NLP to analyze resumes and match candidates to the best job roles automatically.",
    tech: ["Python", "Spacy", "Transformers", "Flask"],
    image: "https://placehold.co/400x300/2c2727/c9c1c1?text=Project+Image+5",
    github: "https://github.com/TYNR2006/resume-analyzer",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-[#7b4e4e]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #7b4e4e88" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {project.tech.join(" • ")}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7b4e4e] hover:bg-[#a77c6d] text-white px-4 py-2 rounded flex items-center gap-2 transition"
                  >
                    <ExternalLinkIcon size={16} color="white" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7b4e4e] hover:bg-[#a77c6d] text-white px-4 py-2 rounded flex items-center gap-2 transition"
                  >
                    <GithubIcon size={18} color="white" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
