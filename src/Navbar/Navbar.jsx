import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "..//assets/Aaspirepng.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Notification Slide */}
      <div className="notification-banner">
        <span className="notification-text">
          Phone Number: +91 7755924414 &nbsp;&nbsp;|&nbsp;&nbsp; Email:
          aaspiredesign9@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; Office Address:
          Unecha Estate, Above Bank of Baroda, Baner, Pune.
        </span>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Aaspire Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
