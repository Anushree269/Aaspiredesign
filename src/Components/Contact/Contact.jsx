import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook, FiYoutube } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Aaspire Design | Interior Design Institute in Baner, Pune</title>
        <meta 
          name="description" 
          content="Get in touch with Aaspire Design for interior design courses and services in Baner, Pune. Visit our office, call, or email us for inquiries."
        />
        <meta name="keywords" content="contact interior design Pune, Aaspire Design contact, design institute Baner, interior design courses contact" />
        <meta property="og:title" content="Contact Aaspire Design | Interior Design Institute in Baner, Pune" />
        <meta property="og:description" content="Contact information for Aaspire Design in Baner, Pune. Reach out for interior design courses and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com/contact" />
      </Helmet>

      <div className="contact-left">
        <h2>CONTACT US</h2>
        <div className="line"></div>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />

          <label>Mail</label>
          <input type="email" placeholder="your@email.com" required />

          <label>Message</label>
          <textarea placeholder="Write your message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-right">
        <h3>Info</h3>
        <div className="info-item">
          <FiMapPin className="icon" />
          <div>
            <p className="title">Office Address:</p>
            <p>Unecha Estate, Above Bank Of Baroda, Baner, Pune.</p>
          </div>
        </div>

        <div className="info-item">
          <FiMail className="icon" />
          <div>
            <p className="title">Email Address:</p>
            <a href="mailto:aaspiredesign@gmail.com">aaspiredesign@gmail.com</a>
          </div>
        </div>

        <div className="info-item">
          <FiPhone className="icon" />
          <div>
            <p className="title">Phone Number:</p>
            <p>+91 - 7507857008</p>
          </div>
        </div>

        <div className="info-item">
          <FiInstagram className="icon" />
          <FiLinkedin className="icon" />
           <FiFacebook className="icon" />
           <FiYoutube className="icon" />
          <div>
            <p className="title">Follow us</p>
            <a href="https://instagram.com/aaspiredesign" target="_blank" rel="noopener noreferrer">
              @aaspiredesign
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;