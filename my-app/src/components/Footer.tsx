import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: '0',
        width: '100%',
      }}
    >
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '0',
        margin: '0',
      }}>
        <li>
          <Link to="/" style={linkStyle}>About</Link>
        </li>
        <li>
          <p>This site was made with React, </p>
          <p>I know its basic but its another to the portfolio</p>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </motion.footer>
  );
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'color 0.3s ease-in-out',
};

export default Footer;
