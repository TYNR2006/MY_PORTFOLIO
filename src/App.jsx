import React from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default App;
