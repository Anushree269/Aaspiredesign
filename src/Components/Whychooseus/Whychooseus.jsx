import React, { useEffect, useRef, useState } from 'react';
import './Whychooseus.css';
import { FaCouch, FaLightbulb, FaUsers } from 'react-icons/fa';

// ✅ Import background images
import bg1 from '../../assets/livingroom.jpg';
import bg2 from '../../assets/3droom.jpg';
import bg3 from '../../assets/livingroom.jpg';

// ✅ Card content
const cardData = [
  {
    icon: <FaCouch />,
    title: 'CUSTOMISED',
    description: 'We offer customized interiors with stunning designs, super quality & finish.',
  },
  {
    icon: <FaLightbulb />,
    title: 'THEME & CONCEPTS',
    description: 'We work with you, understand your taste and preferences, and then design the space accordingly.',
  },
  {
    icon: <FaUsers />,
    title: 'COMMITMENT',
    description: 'We create interiors that are custom-designed to make sure everything fits perfectly & feels truly special to your space.',
  },
];

const bgImages = [bg1, bg2, bg3];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // ✅ Scroll animation for elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animate', entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.why-heading, .why-card');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
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
      <h2 className="why-heading">Top Reasons to Choose Aaspire Designs</h2>

      <div className="why-cards">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`why-card ${index === 1 ? 'center-card' : ''}`}
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
