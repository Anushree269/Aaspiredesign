import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';
import { FaCouch, FaLightbulb, FaUsers } from 'react-icons/fa';

// ✅ Import background images
import bg1 from '../../assets/gray-chair-living-room-with-copy-space.jpg';
import bg2 from '../../assets/3d-room-interior-with-classic-design-furniture1.jpg';
import bg3 from '../../assets/gray-chair-living-room-with-copy-space.jpg';

// ✅ Card content
const cardData = [
  {
    icon: <FaCouch />,
    title: 'CUSTOMISED',
    description: 'We offer customized interiors with stunning designs, super quality & finis',
  },
  {
    icon: <FaLightbulb />,
    title: 'THEME & CONCEPTS',
    description: 'We Work with you , understands your taste and preferences & than design the space accordingly',
  },
  {
    icon: <FaUsers />,
    title: 'COMMITTING',
    description: 'We create Interior that is customdesigned to make sure everything fits perfectly & truly special to your spac',
  },
];

const bgImages = [bg1, bg2, bg3];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // ✅ Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animate', entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current.querySelectorAll('.why-heading, .why-card');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // ✅ Background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000); // Change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="why-section"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${bgImages[currentBgIndex]})`,
        transition: 'background-image 1s ease-in-out',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="why-heading" data-index="-1">Top Reasons to Choose Aaspire Designs</h2>

      <div className="why-cards">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`why-card ${index === 1 ? 'center-card' : ''}`}
            data-index={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="icon-circle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
