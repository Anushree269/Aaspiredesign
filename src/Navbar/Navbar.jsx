import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '..//assets/Aaspirepng.png';

const Navbar = () => {
  return (
    <>
      {/* Notification Slide */}
      <div className="notification-banner">
        <span className="notification-text">
          Phone Number: +91 7755924414 &nbsp;&nbsp;|&nbsp;&nbsp; 
          Email: aaspiredesign9@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; 
          Office Address: Unecha Estate, Above Bank of Baroda, Baner, Pune.
        </span>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Aaspire Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
