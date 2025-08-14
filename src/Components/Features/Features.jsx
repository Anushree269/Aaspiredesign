import React, { useEffect, useRef, useState } from 'react';
import './Features.css';
import { FaEye, FaBuilding, FaTools, FaUserCheck } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

// Import images for background slideshow
import bg1 from '../../assets/view-room-interior-with-furniture-copy-space2.jpg';
import bg2 from '../../assets/gray-chair-living-room-with-copy-space.jpg';
import bg3 from '../../assets/3d-room-interior-with-classic-design-furniture1.jpg';

const features = [
  {
    title: 'OUR VISION',
    description: 'Creating Designs in an innovative way , & getting into detail',
  },
  {
    title: 'MISSION STATEMENT',
    description: 'AASPIRE DESIGN Studio is committed to provide proffesional service to its client with service excellence & delivering the BEST',
  },
  {
    title: 'OUR VALUE',
    description: 'Best of both : Passion for creative experirnce Customer centric approch . Exquisite Designs.',
  },
];

const expertise = [
  {
    title: 'CREATIVE EYE',
    description: 'Our Creative eye and attention to details will be first and foremost , Trend identification plays a very important role at AASPIRE DESIGN',
    icon: <FaEye />
  },
  {
    title: 'SPACES',
    description: 'From work spaces and learning spaces to living spaces and retail and commercial spaces ,our multidisciplinary approach and long standing expertise in large scale',
    icon: <FaBuilding />
  },
  {
    title: 'DESIGN & EXECUTION',
    description: 'Creating sources & design development Interior design product design services & space planning project execution',
    icon: <FaTools />
  },
  {
    title: 'FULFILLING CLIENTS NEED',
    description: 'Functionality, Elegance ,Cost control , and lateral thinking are the main guidelines through which we aim to develop unique interior spaces',
    icon: <FaUserCheck />
  }
];

const bgImages = [bg1, bg2, bg3];

const Features = () => {
  const [activeTab, setActiveTab] = useState('features');
  const sectionRef = useRef(null);
  const [bgIndex, setBgIndex] = useState(0);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting) {
            element.classList.add('animate');
          } else {
            element.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    const targets = sectionRef.current.querySelectorAll(
      '.features-heading, .feature-item, .feature-circle, .feature-rectangle, .expertise-box'
    );
    targets.forEach((el) => observer.observe(el));
    return () => targets.forEach((el) => observer.unobserve(el));
  }, [activeTab]);

  // Background slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change every 5 seconds
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
      <div className="feature-tabs-column">
        <button
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          <span className="plus-icon">➕</span> Features
        </button>
        <button
          className={`tab-button ${activeTab === 'expertise' ? 'active' : ''}`}
          onClick={() => setActiveTab('expertise')}
        >
          <span className="plus-icon">➕</span> Expertise
        </button>
      </div>

      <div className="feature-content">
        <h2 className="features-heading">
          {activeTab === 'features' ? 'FEATURES' : 'OUR EXPERTISE'}
        </h2>

        {activeTab === 'features' ? (
          <div className="feature-container">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-circle">{item.title}</div>
                <div className="feature-rectangle">{item.description}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div className="expertise-box" key={index}>
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
