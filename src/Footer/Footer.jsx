import React from 'react';
import './Footer.css';
import { FiInstagram,FiFacebook,FiLinkedin, FiMail, FiPhone, FiMapPin, FiYoutube } from 'react-icons/fi';

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
          <p><FiPhone className="footer-icon" /> +91 - 7507857008</p>
          <p><FiMail className="footer-icon" /> <a href="mailto:aaspiredesign@gmail.com">aaspiredesign@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <a href="#" className="footer-link"><FiInstagram className="footer-icon" /> Instagram</a>
          <a href="#" className="footer-link"><FiLinkedin className="footer-icon" /> Linkedin</a>
          <a href="#" className="footer-link"><FiYoutube className="footer-icon" /> Youtube</a>


        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aaspire Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
