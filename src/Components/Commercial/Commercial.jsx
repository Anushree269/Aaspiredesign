import React, { useState, useEffect, useRef } from 'react';
import './Commercial.css';
import { Helmet } from 'react-helmet-async';
import BgImage from '../../assets/livingroom.jpg';

<<<<<<< HEAD
// === Salon Images ===
import Img1 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import Img2 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import Img3 from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import Img4 from '../../assets/commercialprojects/salonproject/finalviewofsalon4withlogo.jpg';
import Img5 from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import Img6 from '../../assets/commercialprojects/salonproject/finalviewofsalon6withlogo.jpg';
import Img7 from '../../assets/commercialprojects/salonproject/finalviewofsalon7withlogo.jpg';
import Img8 from '../../assets/commercialprojects/lightroom/lightroom1.jpg';
// === Lightroom ===

import Img9 from '../../assets/commercialprojects/lightroom/lightroom1.jpg';
import Img10 from '../../assets/commercialprojects/lightroom/lightroom2.jpg';
import Img11 from '../../assets/commercialprojects/lightroom/lightroom3.jpg';
import Img12 from '../../assets/commercialprojects/lightroom/lightroom4.jpg';
import Img13 from '../../assets/commercialprojects/lightroom/lightroom5.jpg';
import Img14 from '../../assets/commercialprojects/lightroom/lightroom6.jpg';"C:\Users\Anushrii Golde\Desktop\interior design website\interior-design\src\assets/commercialprojects/office/office1.jpg"

import Img15 from '../../assets/commercialprojects/office/office1.jpg';
import Img16 from '../../assets/commercialprojects/office/office2.jpg';
import Img17 from '../../assets/commercialprojects/office/office3.jpg';
import Img18 from '../../assets/commercialprojects/office/office4.jpg';
import Img19 from '../../assets/commercialprojects/office/office5.jpg';
import Img20 from '../../assets/commercialprojects/office/office6.jpg';
import Img21 from '../../assets/commercialprojects/office/office7.jpg';

// === Office & Retail placeholders ===
const salonData = [
  { src: Img1, alt: 'Salon reception area' },
  { src: Img2, alt: 'Hair styling station' },
  { src: Img3, alt: 'Waiting area' },
  { src: Img4, alt: 'Hair washing station' },
  { src: Img5, alt: 'Treatment room' },
  { src: Img6, alt: 'Product display' },
  { src: Img7, alt: 'Nail care area' },
  { src: Img8, alt: 'Complete salon layout' },
];

const lightRoom = [
  { src: Img9, alt: 'Salon reception area' },
  { src: Img10, alt: 'Hair styling station' },
  { src: Img11, alt: 'Waiting area' },
  { src: Img12, alt: 'Hair washing station' },
  { src: Img13, alt: 'Treatment room' },
  { src: Img14, alt: 'Product display' },

];
const OfficeImg = [
    { src: Img15, alt: 'Salon reception area' },
  { src: Img16, alt: 'Hair styling station' },
  { src: Img17, alt: 'Waiting area' },
  { src: Img18, alt: 'Hair washing station' },
  { src: Img19, alt: 'Treatment room' },
  { src: Img20, alt: 'Product display' },
    { src: Img21, alt: 'Product display' },

];
=======
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
import LightImg2 from '../../assets/commercialprojects/lightshowroom/lightshowroom1.jpg';
import LightImg3 from '../../assets/commercialprojects/lightshowroom/lightshowroom1.jpg';

// Import images for Office Projects
import OfficeImg1 from '../../assets/commercialprojects/officeproject/office1.jpg';
import OfficeImg2 from '../../assets/commercialprojects/officeproject/office2.jpg';
import OfficeImg3 from '../../assets/commercialprojects/officeproject/office3.jpg';

// Define image data for each category
const imageCategories = {
  salon: [
    { 
      src: SalonImg1, 
      alt: 'Salon reception area with elegant decor',
      title: 'Salon Reception',
      description: 'Elegant reception area with modern furniture and branding'
    },
    { 
      src: SalonImg2, 
      alt: 'Professional hair styling station',
      title: 'Styling Station',
      description: 'Professional hair styling station with premium equipment'
    },
    { 
      src: SalonImg3, 
      alt: 'Comfortable waiting area',
      title: 'Waiting Area',
      description: 'Comfortable waiting area with stylish seating'
    },
    { 
      src: SalonImg4, 
      alt: 'Hair washing station',
      title: 'Wash Station',
      description: 'Modern hair washing station with comfortable chairs'
    },
    { 
      src: SalonImg5, 
      alt: 'Salon treatment room',
      title: 'Treatment Room',
      description: 'Private treatment room for specialized services'
    },
    { 
      src: SalonImg6, 
      alt: 'Product display area',
      title: 'Product Display',
      description: 'Well-organized product display area'
    },
    { 
      src: SalonImg7, 
      alt: 'Nail care area',
      title: 'Nail Care Station',
      description: 'Dedicated area for nail care services'
    },
    { 
      src: SalonImg8, 
      alt: 'Complete salon layout',
      title: 'Complete Layout',
      description: 'Overview of the complete salon layout'
    }
  ],
  showroom: [
    { 
      src: LightImg1, 
      alt: 'Light showroom display area',
      title: 'Showroom Display',
      description: 'Modern light showroom with various displays'
    },
    { 
      src: LightImg2, 
      alt: 'Lighting product showcase',
      title: 'Product Showcase',
      description: 'Showcase of premium lighting products'
    },
    { 
      src: LightImg3, 
      alt: 'Light showroom interior',
      title: 'Showroom Interior',
      description: 'Interior view of the light showroom'
    }
  ],
  office: [
    { 
      src: OfficeImg1, 
      alt: 'Modern office workspace',
      title: 'Workspace Design',
      description: 'Modern office workspace with ergonomic furniture'
    },
    { 
      src: OfficeImg2, 
      alt: 'Office meeting room',
      title: 'Meeting Room',
      description: 'Professional meeting room with presentation equipment'
    },
    { 
      src: OfficeImg3, 
      alt: 'Office reception area',
      title: 'Office Reception',
      description: 'Welcoming office reception area'
    }
  ]
};
>>>>>>> tailwind

const Commercial = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("salon"); // default tab
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [activeTab, setActiveTab] = useState('salon');
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Choose active data
  const getImageData = () => {
    if (activeTab === "salon") return salonData;
    if (activeTab === "office") return lightRoom;
    if (activeTab === "retail") return OfficeImg;
    return [];
  };

  const imageData = getImageData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
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

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrev();
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
        <title>Commercial Projects | Aaspire Design</title>
        <meta name="description" content="Explore our commercial interior design projects including salons, offices, and retail spaces." />
      </Helmet>

      <h2 className="commercial-heading">Commercial Projects</h2>

<<<<<<< HEAD
      {/* === Tabs === */}
      <div className="tabs-container">
        <button className={`tab-btn ${activeTab === "salon" ? "active" : ""}`} onClick={() => setActiveTab("salon")}>Salon</button>
        <button className={`tab-btn ${activeTab === "office" ? "active" : ""}`} onClick={() => setActiveTab("office")}>Light Room</button>
        <button className={`tab-btn ${activeTab === "retail" ? "active" : ""}`} onClick={() => setActiveTab("retail")}>Office</button>
      </div>

      {/* === Image Grid === */}
=======
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
            Office Spaces
          </button>
        </div>
      </div>

>>>>>>> tailwind
      <div className="commercial-row">
        <div className="project-grid">
          {imageCategories[activeTab].map((img, index) => (
            <div
              className="project-box fade-up"
              key={index}
              onClick={() => openImage(index)}
            >
              <div className="image-container">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Lightbox === */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeImage}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="nav-btn prev-btn" onClick={(e) => {e.stopPropagation(); goToPrev();}}>‹</button>
            
            <div className="lightbox-content">
<<<<<<< HEAD
              <img src={imageData[currentIndex].src} alt={imageData[currentIndex].alt} />
              <p>{imageData[currentIndex].alt}</p>
            </div>
            
            <button className="nav-btn next-btn" onClick={(e) => {e.stopPropagation(); goToNext();}}>›</button>
            <button className="close-btn" onClick={(e) => {e.stopPropagation(); closeImage();}}>×</button>
            <div className="image-counter">{currentIndex + 1} / {imageData.length}</div>
=======
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
>>>>>>> tailwind
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;
