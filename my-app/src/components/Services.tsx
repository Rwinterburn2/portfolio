import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Correct import

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
      }}
    >
      <section style={{ 
  width: '30%', 
  textAlign: 'center', // Centers text and inline elements
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center' // Centers flex children horizontally
}}>
  <h1>Technologies used: </h1>
  <ul style={{ 
    listStyle: 'none', // Removes default bullets
    padding: 0,
    margin: 0
  }}>
    <li>Html</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Django</li>
    <li>AWS</li>
  </ul>
</section>

      {/* Profile Image Section */}
      <section style={{ width: '30%' }}>
        <h1>Services: </h1>
        <p style={{ fontSize: '1em', marginBottom: '20px' }}>
          Web Design <br />
          Web Development <br />
          Backend Development
        </p>
      </section>

      {/* Education Section */}
      <section style={{ width: '30%' }}>
        <h1>Education: </h1>
        <p style={{ fontSize: '1em', marginBottom: '20px' }}>
          Level 5 Diploma <br />
          Web Development <br />
          Code Institute
        </p>
      </section>
    </motion.div>
  );
};

export default Services;
