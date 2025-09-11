import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Features.css';
import { FaEye, FaBuilding, FaTools, FaUserCheck } from "react-icons/fa";

// Background images
import bg1 from '../../assets/viewroomimage.jpg';
import bg2 from '../../assets/livingroom.jpg';
import bg3 from '../../assets/3droom.jpg';

// Features and Expertise Data
const features = [
  {
    title: 'OUR VISION',
    description: 'Creating designs in an innovative way, focusing on details and functionality.',
  },
  {
    title: 'MISSION STATEMENT',
    description: 'AASPIRE DESIGN Studio is committed to providing professional service with excellence, delivering the BEST.',
  },
  {
    title: 'OUR VALUE',
    description: 'Passion for creative experience, customer-centric approach, and exquisite designs.',
  },
];

const expertise = [
  {
    title: 'CREATIVE EYE',
    description: 'Attention to detail and trend identification plays a crucial role at AASPIRE DESIGN.',
    icon: <FaEye />
  },
  {
    title: 'SPACES',
    description: 'From living spaces to commercial spaces, our multidisciplinary approach ensures exceptional results.',
    icon: <FaBuilding />
  },
  {
    title: 'DESIGN & EXECUTION',
    description: 'Interior design, product design, space planning, and project execution with excellence.',
    icon: <FaTools />
  },
  {
    title: 'FULFILLING CLIENTS NEEDS',
    description: 'Functionality, elegance, cost control, and creative thinking guide our unique interior solutions.',
    icon: <FaUserCheck />
  }
];

const bgImages = [bg1, bg2, bg3];

const Features = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const sectionRef = useRef(null);
  const [bgIndex, setBgIndex] = useState(0);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting) element.classList.add('animate');
          else element.classList.remove('animate');
        });
      },
      { threshold: 0.3 }
    );

    const targets = sectionRef.current.querySelectorAll(
      '.features-heading, .feature-item, .feature-circle, .feature-rectangle, .expertise-box'
    );
    targets.forEach(el => observer.observe(el));
    return () => targets.forEach(el => observer.unobserve(el));
  }, [activeTab]);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-section"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        transition: 'background-image 1.2s ease-in-out',
      }}
    >
      {/* SEO Meta */}
      <Helmet>
        <title>Features & Expertise | Aaspire Design</title>
        <meta
          name="description"
          content="Discover Aaspire Design's expertise and features, including creative interior design, space planning, turnkey execution, and client-focused solutions."
        />
        <link rel="canonical" href="https://www.aaspiredesign.com/features" />
      </Helmet>

      {/* Tab Buttons */}
      <div className="feature-tabs-column">
        <button
          className={`tab-button ${activeTab === 'expertise' ? 'active' : ''}`}
          onClick={() => setActiveTab('expertise')}
        >
          ➕ Expertise
        </button>
        <button
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          ➕ Features
        </button>
      </div>

      <div className="feature-content">
        <h2 className="features-heading">
          {activeTab === 'expertise' ? 'OUR EXPERTISE' : 'FEATURES'}
        </h2>

        {activeTab === 'expertise' ? (
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div className="expertise-box" key={index}>
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="feature-container">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-circle">{item.title}</div>
                <div className="feature-rectangle">{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
