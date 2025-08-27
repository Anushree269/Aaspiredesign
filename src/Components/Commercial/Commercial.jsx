import React, { useState, useEffect, useRef } from 'react';
import './Commercial.css';
import { Helmet } from 'react-helmet-async';
import BgImage from '../../assets/livingroom.jpg';

// Import images for Salon Projects
import SalonImg1 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import SalonImg2 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import SalonImg3 from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import SalonImg4 from '../../assets/commercialprojects/salonproject/finalviewofsalon4withlogo.jpg';
import SalonImg5 from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import SalonImg6 from '../../assets/commercialprojects/salonproject/finalviewofsalon6withlogo.jpg';
import SalonImg7 from '../../assets/commercialprojects/salonproject/finalviewofsalon7withlogo.jpg';
import SalonImg8 from '../../assets/commercialprojects/salonproject/rerenderview1.jpg';

// Import images for Light Showroom Projects
import LightImg1 from '../../assets/commercialprojects/lightshowroom/lightshowroom1.jpg';
import LightImg2 from '../../assets/commercialprojects/lightshowroom/lightshowroom2.jpg';
import LightImg3 from '../../assets/commercialprojects/lightshowroom/lightshowroom3.jpg';
import LightImg4 from '../../assets/commercialprojects/lightshowroom/lightshowroom4.jpg';
import LightImg5 from '../../assets/commercialprojects/lightshowroom/lightshowroom5.jpg';
import LightImg6 from '../../assets/commercialprojects/lightshowroom/lightshowroom6.jpg';
// Import images for Light Showroom Projects

import OfficeImg1 from '../../assets/commercialprojects/farmyardofficedesign/officelogo1.jpg';
import OfficeImg2 from '../../assets/commercialprojects/farmyardofficedesign/officelogo2.jpg';
import OfficeImg3 from '../../assets/commercialprojects/farmyardofficedesign/officelogo3.jpg';
import OfficeImg4 from '../../assets/commercialprojects/farmyardofficedesign/officelogo4.jpg';
import OfficeImg5 from '../../assets/commercialprojects/farmyardofficedesign/officelogo5.jpg';
import OfficeImg6 from '../../assets/commercialprojects/farmyardofficedesign/officelogo6.jpg';
import OfficeImg7 from '../../assets/commercialprojects/farmyardofficedesign/officelogo7.jpg';






// Define image data for each category
const imageCategories = {
  salon: [
    { 
      src: SalonImg1, 
      alt: 'Salon reception area with elegant decor',
      title: 'Salon Reception',
    },
    { 
      src: SalonImg2, 
      alt: 'Professional hair styling station',
    },
    { 
      src: SalonImg3, 
      alt: 'Comfortable waiting area',
    },
    { 
      src: SalonImg4, 
      alt: 'Hair washing station',
    },
    { 
      src: SalonImg5, 
      alt: 'Salon treatment room',
    },
    { 
      src: SalonImg6, 
      alt: 'Product display area',
    },
    { 
      src: SalonImg7, 
      alt: 'Nail care area',
    },
    { 
      src: SalonImg8, 
      alt: 'Complete salon layout',
    }
  ],
  showroom: [
    { 
      src: LightImg1, 
      alt: 'Light showroom display area',    },
    { 
      src: LightImg2, 
      alt: 'Lighting product showcase',
    },
    { 
      src: LightImg3, 
      alt: 'Light showroom interior',
    },
    {
      src: LightImg4, 
      alt: 'Light showroom interior',
    },
    {
      src: LightImg5, 
      alt: 'Light showroom interior',
    },
    {
      src: LightImg6, 
      alt: 'Light showroom interior',
    }
  ],
  office: [
    { 
      src: OfficeImg1, 
      alt: 'Farm yard office display area'
    },
    { 
      src: OfficeImg2, 
      alt: 'Farm yard office workspace'
    },
    { 
      src: OfficeImg3, 
      alt: 'Farm yard office interior'
    },
    {
      src: OfficeImg4, 
      alt: 'Farm yard office layout'
    },
    {
      src: OfficeImg5, 
      alt: 'Farm yard office design'
    },
    {
      src: OfficeImg6, 
      alt: 'Farm yard office complete view'
    },
    {
      src: OfficeImg7, 
      alt: 'Farm yard office complete view'
    }
  ]
};

const Commercial = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [activeTab, setActiveTab] = useState('salon');
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
    setCurrentIndex(prev => (prev === 0 ? imageCategories[activeTab].length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === imageCategories[activeTab].length - 1 ? 0 : prev + 1));
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

      {/* Tabs Navigation */}
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'salon' ? 'active' : ''}`}
            onClick={() => setActiveTab('salon')}
          >
            Salon Projects
          </button>
          <button 
            className={`tab ${activeTab === 'showroom' ? 'active' : ''}`}
            onClick={() => setActiveTab('showroom')}
          >
            Light Showrooms
          </button>
          <button 
            className={`tab ${activeTab === 'office' ? 'active' : ''}`}
            onClick={() => setActiveTab('office')}
          >
             Farm Yard Office
          </button>
        </div>
      </div>

      <div className="commercial-row">
        <div className="project-grid">
          {imageCategories[activeTab].map((img, index) => (
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
                src={imageCategories[activeTab][currentIndex].src} 
                alt={imageCategories[activeTab][currentIndex].alt}
              />
              <div className="lightbox-info">
                <h3>{imageCategories[activeTab][currentIndex].title}</h3>
                <p>{imageCategories[activeTab][currentIndex].description}</p>
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
              {currentIndex + 1} / {imageCategories[activeTab].length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;