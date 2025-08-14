import React, { useEffect, useRef, useState } from 'react';
import './Achievements.css';
import { Helmet } from 'react-helmet-async';
import AchieveBg from '../../assets/2H0A3037.jpg'; // Background image

const achievements = [
  'Innovating since 2015.',
  'Co-powered design show with Bharat 24.',
  'Featured in Mrs. India platform.',
  'Featured in Ms. Pune platform.',
  'Featured in A & I.',
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`achievement-section ${isVisible ? 'in-view' : ''}`}
    >
      {/* Background */}
      <div
        className="achievement-bg"
        style={{
          backgroundImage: `url(${AchieveBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Marquee */}
      <div className="achievement-marquee-wrapper">
        <div className="achievement-marquee">
          {[...achievements, ...achievements].map((item, index) => (
            <div className="achievement-card slide" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
