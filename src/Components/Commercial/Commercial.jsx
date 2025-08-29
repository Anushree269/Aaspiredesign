import React, { useState, useEffect, useRef } from 'react';
import './Commercial.css';
import { Helmet } from 'react-helmet-async';
import BgImage from '../../assets/livingroom.jpg';

// Import images with detailed descriptions
import Img1 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import Img2 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import Img3 from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import Img4 from '../../assets/commercialprojects/salonproject/finalviewofsalon4withlogo.jpg';
import Img5 from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import Img6 from '../../assets/commercialprojects/salonproject/finalviewofsalon6withlogo.jpg';
import Img7 from '../../assets/commercialprojects/salonproject/finalviewofsalon7withlogo.jpg';
import Img8 from '../../assets/commercialprojects/salonproject/rerenderview1.jpg';

const imageData = [
  { 
    src: Img1, 
    alt: 'Salon reception area with elegant decor',
  },
  { 
    src: Img2, 
    alt: 'Professional hair styling station',
  },
  { 
    src: Img3, 
    alt: 'Comfortable waiting area',
  },
  { 
    src: Img4, 
    alt: 'Hair washing station',
  },
  { 
    src: Img5, 
    alt: 'Salon treatment room',
  },
  { 
    src: Img6, 
    alt: 'Product display area',
  },
  { 
    src: Img7, 
    alt: 'Nail care area',
  },
  { 
    src: Img8, 
    alt: 'Complete salon layout',
  },
];

const Commercial = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'Escape') closeImage();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext(); // Left swipe
    else if (distance < -50) goToPrev(); // Right swipe
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const openImage = (index) => {
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setCurrentIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      className={`commercial-projects-section ${inView ? 'in-view' : ''}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Helmet>
        <title>commercialprojects | Aaspire Design</title>
        <meta name="description" content="Explore our commercial interior design projects including salons, offices, and retail spaces with detailed descriptions of each design element." />
      </Helmet>

      <h2 className="commercial-heading">Commercial Projects</h2>

      <div className="commercial-row">
        <div className="project-grid">
          {imageData.map((img, index) => (
            <div
              className="project-box fade-up"
              key={index}
              onClick={() => openImage(index)}
            >
              <div className="image-container">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                />
              </div>
              <div className="image-info">
                <h3 className="image-title">{img.title}</h3>
                <p className="image-description">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeImage}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button 
              className="nav-btn prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            
            <div className="lightbox-content">
              <img 
                src={imageData[currentIndex].src} 
                alt={imageData[currentIndex].alt}
              />
              <div className="lightbox-info">
                <h3>{imageData[currentIndex].title}</h3>
                <p>{imageData[currentIndex].description}</p>
              </div>
            </div>
            
            <button 
              className="nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
            
            <button 
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              aria-label="Close lightbox"
            >
              ×
            </button>
            
            <div className="image-counter">
              {currentIndex + 1} / {imageData.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;