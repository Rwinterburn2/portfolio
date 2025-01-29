// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>  {/* Link to the About page */}
          <li><Link to="/projects">Projects</Link></li>  {/* Link to the Projects page */}
          <li><Link to="/contact">Contact</Link></li>  {/* Link to the Contact page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
