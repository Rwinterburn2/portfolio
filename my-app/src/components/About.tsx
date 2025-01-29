// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
      <section id="about">
        <h2>About Me</h2>
        
        {/* Add an image here */}
        <img 
          src="/path/to/your-image.jpg" 
          alt="Rob's Profile" 
          className="about-image" 
        />
        
        <p>
          Hi, I’m Rob. I’m a passionate developer with experience in full-stack development. 
          I enjoy creating interactive and responsive websites and applications.
        </p>
      </section>
    );
  };
  

export default About;
