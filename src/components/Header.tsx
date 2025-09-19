import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <i className="fas fa-dice"></i>
          <span>LuckyWin</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
        </nav>

        <div className="header-actions">
          <a href="https://drive.google.com/file/d/1S2OTvGExMUEQXpLeFE5CSXM0P6aKb3wX/view?usp=drive_link" className="btn-primary" target="_blank" rel="noopener noreferrer">Download App</a>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
