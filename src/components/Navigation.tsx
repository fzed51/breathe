import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Breathe
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
