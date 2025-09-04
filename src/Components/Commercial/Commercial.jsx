import React, { useState, useEffect, useRef } from 'react';
import './Commercial.css';
import { Helmet } from 'react-helmet-async';
import BgImage from '../../assets/livingroom.jpg';

// Import images
import Img1 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import Img2 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import Img3 from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import Img4 from '../../assets/commercialprojects/salonproject/finalviewofsalon4withlogo.jpg';
import Img5 from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import Img6 from '../../assets/commercialprojects/salonproject/finalviewofsalon6withlogo.jpg';
import Img7 from '../../assets/commercialprojects/salonproject/finalviewofsalon7withlogo.jpg';
import Img8 from '../../assets/commercialprojects/salonproject/rerenderview1.jpg';
import Img9 from '../../assets/commercialprojects/farmyardofficedesign/officelogo1.jpg';
import Img10 from '../../assets/commercialprojects/farmyardofficedesign/officelogo2.jpg';
import Img11 from '../../assets/commercialprojects/farmyardofficedesign/officelogo3.jpg';
import Img12 from '../../assets/commercialprojects/farmyardofficedesign/officelogo4.jpg';
import Img13 from '../../assets/commercialprojects/farmyardofficedesign/officelogo5.jpg';
import Img14 from '../../assets/commercialprojects/farmyardofficedesign/officelogo6.jpg';
import Img15 from '../../assets/commercialprojects/farmyardofficedesign/officelogo7.jpg';
import Img16 from '../../assets/commercialprojects/lightshowroom/lightshowroom1.jpg';
import Img17 from '../../assets/commercialprojects/lightshowroom/lightshowroom2.jpg';
import Img18 from '../../assets/commercialprojects/lightshowroom/lightshowroom3.jpg';
import Img19 from '../../assets/commercialprojects/lightshowroom/lightshowroom4.jpg';
import Img20 from '../../assets/commercialprojects/lightshowroom/lightshowroom5.jpg';
import Img21 from '../../assets/commercialprojects/lightshowroom/lightshowroom6.jpg';

// Group images into tabs
const tabData = {
  "Salon": [
    { src: Img1, alt: "Salon reception area" },
    { src: Img2, alt: "Hair styling station" },
    { src: Img3, alt: "Salon waiting area" },
    { src: Img4, alt: "Hair washing station" },
    { src: Img5, alt: "Treatment room" },
    { src: Img6, alt: "Product display shelves" },
    { src: Img7, alt: "Nail care section" },
    { src: Img8, alt: "Complete salon layout view" },
  ],
  "Office": [
    { src: Img9, alt: "Farmyard office exterior view" },
    { src: Img10, alt: "Office lobby design" },
    { src: Img11, alt: "Workstation layout" },
    { src: Img12, alt: "Meeting room interior" },
    { src: Img13, alt: "Office breakout area" },
    { src: Img14, alt: "Workspace design with logo" },
    { src: Img15, alt: "Conference room setup" },
  ],
  "Lightshowroom": [
    { src: Img16, alt: "Light showroom display section 1" },
    { src: Img17, alt: "Light showroom display section 2" },
    { src: Img18, alt: "Lighting product showcase 1" },
    { src: Img19, alt: "Lighting product showcase 2" },
    { src: Img20, alt: "Modern lighting designs" },
    { src: Img21, alt: "Luxury lights collection" },
  ],
};

const Commercial = () => {
  const [activeTab, setActiveTab] = useState("Salon");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const images = tabData[activeTab];

  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") closeImage();
    }
  };

  // Touch gestures for mobile
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      if (distance > 50) goToNext();
      else if (distance < -50) goToPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const openImage = (index) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };
  const closeImage = () => {
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      className={`commercial-projects-section ${inView ? "in-view" : ""}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Helmet>
        <title>Commercial Projects | Aaspire Design</title>
        <meta 
          name="description" 
          content="Explore our commercial interior design projects organized into categories like Salon, Office, and Lightshowroom." 
        />
      </Helmet>

      <h2 className="commercial-heading">Commercial Projects</h2>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(tabData).map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => { setActiveTab(tab); setCurrentIndex(null); }}
            aria-label={`View ${tab} projects`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="commercial-row">
        <div className="project-grid">
          {images.map((img, index) => (
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

      {/* Lightbox modal */}
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
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="lightbox-content">
              <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            </div>
            <button 
              className="nav-btn next-btn" 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next image"
            >
              ›
            </button>
            <button 
              className="close-btn" 
              onClick={(e) => { e.stopPropagation(); closeImage(); }}
              aria-label="Close gallery"
            >
              ×
            </button>
            <div className="image-counter">{currentIndex + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;
