// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> {/* Make sure this exists */}
    </div>
  );
};

export default App;
