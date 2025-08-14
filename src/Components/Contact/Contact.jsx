import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook, FiYoutube } from 'react-icons/fi';

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
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
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
            <a href="tel:+917507857008">+91 - 7507857008</a>
          </div>
        </div>

        <div className="info-item social-section">
          <div>
            <p className="title">Follow us</p>
            <a href="https://instagram.com/aaspiredesign" target="_blank" rel="noopener noreferrer">
              @aaspiredesign
            </a>
          </div>
          <div className="social-icons">
            <a href="https://instagram.com/aaspiredesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram className="icon" />
            </a>
            <a href="https://linkedin.com/company/aaspiredesign" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="icon" />
            </a>
            <a href="https://facebook.com/aaspiredesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook className="icon" />
            </a>
            <a href="https://youtube.com/aaspiredesign" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FiYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;