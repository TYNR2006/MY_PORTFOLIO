import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
// Add other sections here like Skills, Projects, etc.

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* Add other sections below */}
    </div>
  );
}

export default App;
