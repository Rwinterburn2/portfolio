import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  { title: 'Photography Website', description: 'Description of Project 1', link: '#', image: './src/assets/media/photositew.png' },
  { title: 'Javascript Quiz', description: 'Description of Project 2', link: '#', image: './src/assets/media/oscarssite.png' },
  { title: 'Django Website', description: 'Description of Project 3', link: '#', image: './src/assets/media/gigreviews.png' },
  { title: 'Royalty Free Instrumental Website', description: 'Description of Project 4', link: '#', image: './src/assets/media/beatssite.png' },
  { title: 'Actors Website', description: 'A basic website made for actors', link: 'https://github.com/Rwinterburn2/actors-website', image: './src/assets/media/actorssite.png' },
  { title: 'Music Website', description: 'Music landing page, with gallery and following concept art, (still under construction)', link: 'https://github.com/RWinterburn/Music-website', image: './src/assets/media/musicsite.png' },
];

const Projects: React.FC = () => {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '40px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Projects</h1>
      <p style={{ fontSize: '1.1em', marginBottom: '20px', textAlign: 'center' }}>
        Here are some of my projects over the years using HTML, CSS, JavaScript, Django, and React:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        width: '80%',
        maxWidth: '1000px',
        perspective: '1000px'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              onClick={() => handleFlip(index)}
              whileHover={{ rotateY: 180 }}
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: '300px',
                transformStyle: 'preserve-3d',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Front Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backfaceVisibility: 'hidden',
                padding: '20px',
              }}>
                <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9em', marginBottom: '15px' }}>{project.description}</p>
              </div>

              {/* Back Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '10px 15px',
                    backgroundColor: '#202020',
                    borderRadius: '5px',
                    display: 'inline-block',
                    marginTop: '10px',
                    transition: '0.3s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a5006e'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
