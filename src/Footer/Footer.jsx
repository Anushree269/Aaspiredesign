import React from 'react';
import './Footer.css';
import { FiInstagram,FiLinkedin, FiMail, FiPhone, FiMapPin,  } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section">
          <h3 className="footer-title">Office Address</h3>
          <p><FiMapPin className="footer-icon" /> Unecha Estate, Above Bank Of Baroda, Baner, Pune</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p><FiPhone className="footer-icon" /> +91-7755924414</p>
          <p><FiMail className="footer-icon" /> <a href="mailto:aaspiredesign9@gmail.com">aaspiredesign@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <a href="https://www.instagram.com/aaspire_design?igsh=dXYzM3cwcHdxaGpl" className="footer-link"><FiInstagram className="footer-icon" /> Instagram</a>
          <a href="https://www.linkedin.com/in/dhwani-sanghavi-835a75255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-link"><FiLinkedin className="footer-icon" /> Linkedin</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p> {new Date().getFullYear()} Aaspire Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
