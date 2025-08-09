import React from "react";
import { motion } from "framer-motion";

// Icons from your previous Contact info
const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7
      a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7
      a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5
      c3-4 4-4.5 4-6.5a5.5 5.5 0 0 0-1.5-3.8
      4.2 4.2 0 0 0-.2-3.8s-1.5-.4-5 1.5
      a12.6 12.6 0 0 0-5 0
      c-3.5-1.9-5-1.5-5-1.5
      a4.2 4.2 0 0 0-.2 3.8
      A5.5 5.5 0 0 0 4 12
      c0 2 1 2.5 4 6.5
      A4.8 4.8 0 0 0 7 18v4" />
    <path d="M9 18c-3 0-5 1.5-5 1.5" />
  </svg>
);

// Contact Form component included inline
const ContactForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1b1320] py-12 px-2">
    <div className="relative w-full max-w-4xl flex flex-col items-center">

      {/* Decorative gradient bar */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="w-28 h-3 rounded-full bg-gradient-to-r from-[#d49b9c] via-[#f7b5bc] to-[#a594bf] shadow-lg" />
      </div>

      {/* Contact Form Card */}
      <form className="w-full bg-[#120d17] border-2 border-[#d49b9c] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#fadadd] mb-1 ml-1" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 outline-none"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#fadadd] mb-1 ml-1" htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 outline-none"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#fadadd] mb-1 ml-1" htmlFor="phone">Phone Number</label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 outline-none"
              type="tel"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm text-[#fadadd] mb-1 ml-1" htmlFor="subject">Subject</label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 outline-none"
              type="text"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-[#fadadd] mb-1 ml-1" htmlFor="message">Your Message</label>
          <textarea
            className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 outline-none min-h-[120px]"
            id="message"
            placeholder="Type your message here..."
            rows={6}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#d49b9c] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#c08f91] focus:outline-none transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="bg-gray-900 min-h-screen py-20 px-4 sm:px-8 font-sans text-rose-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif text-rose-400 mb-6 tracking-wide">
          Get in Touch
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Feel free to reach out to me for any collaborations, job opportunities,
          or just to say hi!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <a
            href="mailto:yoganandhareddythappeta@gmail.com"
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-lg border-2 border-rose-400 transform transition-transform duration-300 hover:scale-105"
          >
            <MailIcon className="h-6 w-6 text-rose-300" />
            <span className="text-lg">yoganandhareddythappeta@gmail.com</span>
          </a>
          <a
            href="tel:+918106655065"
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-lg border-2 border-rose-400 transform transition-transform duration-300 hover:scale-105"
          >
            <PhoneIcon className="h-6 w-6 text-rose-300" />
            <span className="text-lg">+91-81066 55065</span>
          </a>
        </div>
        <div className="flex justify-center items-center gap-8 mb-12">
          <a
            href="https://www.linkedin.com/in/yoganandhareddythappeta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full shadow-lg border-2 border-rose-400 transform transition-transform duration-300 hover:scale-110"
          >
            <LinkedinIcon className="h-8 w-8 text-rose-300" />
          </a>
          <a
            href="https://github.com/yoganandhareddythappeta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full shadow-lg border-2 border-rose-400 transform transition-transform duration-300 hover:scale-110"
          >
            <GithubIcon className="h-8 w-8 text-rose-300" />
          </a>
        </div>

      </div>

      {/* Contact Form below */}
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
