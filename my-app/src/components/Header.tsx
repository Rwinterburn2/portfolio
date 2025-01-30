import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5 }} // Moves the link slightly up on hover
            >
              <Link to="/">About</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5 }} // Moves the link slightly up on hover
            >
              <Link to="/projects">Projects</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5 }} // Moves the link slightly up on hover
            >
              <Link to="/contact">Contact</Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
