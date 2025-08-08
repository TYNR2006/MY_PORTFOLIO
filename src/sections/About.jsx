import React from "react";

// Make sure your logo is at /public/images/tynr-logo.png or adjust the src

const AboutSection = () => {
  return (
    <section className="bg-[#18121f] min-h-screen w-full flex flex-col md:flex-row justify-center items-center">
      
      {/* Logo Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] py-8">
        <div className="border-4 border-[#7b4e4e] p-6 md:p-10 rounded-lg bg-white flex items-center justify-center">
          <img
            src="/images/tynr-logo.png" // Change accordingly
            alt="TYNR Logo"
            className="block"
            style={{
              width: "560px",
              height: "560px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* About Text Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
  <div className="max-w-xl w-full text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4">
    <h2 className="text-4xl font-bold text-[#bd978f]">About Me</h2>
    <p className="text-base text-white leading-relaxed">
      Hello! I'm <strong>Yoganandha Reddy Thappeta</strong>, a passionate <strong>AI/ML Engineer</strong> 
      currently pursuing Computer Science with a specialization in Artificial Intelligence and Machine Learning 
      at GITAM University, Bengaluru.  
      I build smart and practical solutions using deep learning, data science, and web technologies like 
      <strong> React.js</strong>, <strong>Python</strong>, and <strong>Tailwind CSS</strong>.  
      My work spans from crop disease detection and voice assistants to elderly health monitoring tools — 
      always aiming to transform complex challenges into impactful solutions.  
      I’m driven to innovate, learn continuously, and collaborate with teams to create the next generation 
      of intelligent, user-focused digital products.
    </p>
  </div>
</div>

    </section>
  );
};

export default AboutSection;
