import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '..//assets/Aaspirepng.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* === Notification Banner === */}
      <div className="notification-banner">
        <span className="notification-text">
          Phone Number: +91 7755924414 &nbsp;&nbsp;|&nbsp;&nbsp; 
          Email: aaspiredesign9@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; 
          Office Address: Unecha Estate, Above Bank of Baroda, Baner, Pune.
        </span>
      </div>

      {/* === Navigation Bar === */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Aaspire Logo" />
        </div>
<<<<<<< HEAD
        <ul className="nav-links">
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
=======

        {/* === Hamburger Button === */}
        <div 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? "✖" : "☰"}
        </div>

        {/* === Nav Links === */}
        <ul 
          className={`nav-links ${isOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <li><Link to="/" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>Contact</Link></li>
>>>>>>> tailwind
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
