import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_6l4qxt4";
    const templateId = "template_2ma4v7f";
    const publicKey = "rcahUZlNH_RnuMycm";

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Aaspire Design - Interior Designers in Pune</title>
        <meta 
          name="description" 
          content="Get in touch with Aaspire Design - Interior Designers Studio in Pune. Reach us for residential & commercial projects. Contact via email, phone, or visit our Baner office." 
        />
        <link rel="canonical" href="https://www.aaspiredesign.com/contact" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Aaspire Design - Interior Designers in Pune" />
        <meta 
          property="og:description" 
          content="Aaspire Design is an interior design studio in Pune. Contact us for innovative and elegant design solutions." 
        />
        <meta property="og:image" content="https://www.aaspiredesign.com/Newlogo.jpg" />
        <meta property="og:url" content="https://www.aaspiredesign.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aaspire Design - Interior Designers in Pune" />
        <meta 
          name="twitter:description" 
          content="Reach out to Aaspire Design in Pune for residential and commercial interior projects. Let's design your dream space together." 
        />
        <meta name="twitter:image" content="https://www.aaspiredesign.com/Newlogo.jpg" />
      </Helmet>

      {/* ✅ Left Side - Contact Form */}
      <div className="contact-left">
        <h2>CONTACT US</h2>
        <div className="line"></div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="user_name" 
              placeholder="Your Name" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input 
              type="email" 
              id="email"
              name="user_email" 
              placeholder="your@email.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="property-type">Property Type</label>
            <select 
              id="property-type"
              name="property_type" 
              required
            >
              <option value="">Select Property Type</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Above">Above</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message" 
              placeholder="Write your message" 
              required
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {submitStatus === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>

      {/* ✅ Right Side - Info */}
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
            <a href="mailto:aaspiredesign9@gmail.com">aaspiredesign9@gmail.com</a>
          </div>
        </div>

        <div className="info-item">
          <FiPhone className="icon" />
          <div>
            <p className="title">Phone Number:</p>
            <a href="tel:+91-7755924414">+91-7755924414</a>
          </div>
        </div>

        <div className="info-item social-section">
          <p className="title">Follow us</p>
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/aaspire_design?igsh=dXYzM3cwcHdxaGpl" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FiInstagram className="icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhwani-sanghavi-835a75255" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <FiLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
