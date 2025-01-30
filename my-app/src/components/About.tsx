import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundColor: '#333', 
        color: '#fff', 
        padding: '40px', 
        borderRadius: '10px',
        display: 'flex', 
        justifyContent: 'space-evenly',
        minHeight: '100vh'
      }}
    >
      {/* About Section */}
      <section style={{ width: '40%' }}>
        <h1>Full Stack Web Developer</h1>
        <p style={{ fontSize: '1em', marginBottom: '20px' }}>
          I’m a passionate developer with experience in full-stack development. 
          I enjoy creating interactive and responsive websites and applications.
        </p>
        <p style={{ fontSize: '0.8em' }}>
          My mission is to build intuitive, beautiful, and functional websites that users love to use.
        </p>
      </section>

      {/* Profile Image Section */}
      <section style={{ width: '40%' }}>
        <img 
          src="/src/assets/media/jackcarr.jpg" 
          alt="Rob's Profile" 
          style={{
            width: '100%',
            borderRadius: '5px', 
            boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.1)'
          }} 
        />
      </section>
    </motion.div>
  );
};

export default About;

