import React, { useState, useEffect, useRef } from 'react';
import './Residential.css';
import { Helmet } from 'react-helmet-async';

import bgImage from '../../assets/gray-chair-living-room-with-copy-space.jpg';

// Import all residential images
import ResImg1 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews6withlogo.jpg';
import ResImg2 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews7withlogo.jpg';
import ResImg3 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews8withlogo.jpg';
import ResImg4 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews10withlogo.jpg';
import ResImg5 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews11withlogo.jpg';
import ResImg6 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews12withlogo.jpg';
import ResImg7 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv1withlogo.jpg';
import ResImg8 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv2withlogo.jpg';
import ResImg9 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv3withlogo.jpg';
import ResImg10 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv1withlog.jpg';
import ResImg11 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv2withlog.jpg';
import ResImg12 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv3withlog.jpg';
import ResImg13 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/kidsbed4withlogo.jpg';
import ResImg14 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/kidsbed5withlogo.jpg';
import ResImg15 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbedview8withlogo.jpg';
import ResImg16 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbedview9withlogo.jpg';
import ResImg17 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finallivingroomview1withlogo.jpg';
import ResImg18 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finallivingroomview2withlogo.jpg';
import ResImg19 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview1ofkitchenof2bhkwithlogo.jpg';
import ResImg20 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview2ofkitchenof2bhkwithlogo.jpg';
import ResImg21 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview3ofmasterbedroom1withlogo.jpg';
import ResImg22 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview4ofmasterbedroom1withlogo.jpg';
import ResImg23 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview4ofmasterbedroom2withlogo.jpg';
import ResImg24 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalbedroom2view1oflonavalabungalowwithlogo.jpg';
import ResImg25 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalbedroom2view2oflonavalabungalowwithlogo.jpg';
import ResImg26 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1ofbedroom1oflonavalabunglowwithlogo.jpg';
import ResImg27 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1ofbedroom4withlogo.jpg';
import ResImg28 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1oflivingroomoflonavalabungalowwithlogo.jpg';
import ResImg29 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview2ofbedroom1oflonavalabunglowwithlogo.jpg';
import ResImg30 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview2ofbedroom4withlogo.jpg';
import ResImg31 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview3ofbedroom4withlogo.jpg';
import ResImg32 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview3ofmasterbedroom1withlogo.jpg';
import ResImg33 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedbedroom4view1withlogo.jpg';
import ResImg34 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedbedroom4view2withlogo.jpg';
import ResImg35 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview3withlogo.jpg';
import ResImg36 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/terraceview1withoutlogo.jpg';
import ResImg37 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/terraceview2withlogo.jpg';
import ResImg38 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview4withlogo.jpg';
import ResImg39 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview5withlogo..jpg';
import ResImg40 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalkidsbedroomview3withlogo.jpg';
import ResImg41 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalkidsbedroomview4withlogo.jpg';
import ResImg42 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalterraceview1ofbedroom1withlogo.jpg';
import ResImg43 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofkidsbedroomterracewithlogo.jpg';
import ResImg44 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofkitchenof3bhkwithlogo.jpg';
import ResImg45 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmasterbedroom1withlogo.jpg';
import ResImg46 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmasterbedroom2withlogo.jpg';
import ResImg47 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmastertoilet1withlogo.jpg';
import ResImg48 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofkidsbedroomterracewithlogo.jpg';
import ResImg49 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofkitchenof3bhkwithlogo.jpg';
import ResImg50 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofmastertoilet1withlogo.jpg';
import ResImg51 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview3ofkitchenof3bhkwithlogo.jpg';
import ResImg52 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview3ofmasterbedroom1withoutlogo.jpg';
import ResImg53 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview4ofkitchenof3bhkwithlogo.jpg';
import ResImg54 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview5oflivingroomof3bhkwithlogo.jpg';
import ResImg55 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview6oflivingroomof3bhkwithlogo.jpg';
import ResImg56 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview7oflivingroomof3bhkwithlogo.jpg';
import ResImg57 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview8oflivingroomof3bhkwithlogo.jpg';
import ResImg58 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview9oflivingroomof3bhkwithlogo.jpg';
import ResImg59 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofbedroom1withoutlogo.jpg';
import ResImg60 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofkidsbedroomwithoutlogo.jpg';
import ResImg61 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofterracewithlogo.jpg';
import ResImg62 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview2ofkidsbedroomwithlogo.jpg';
import ResImg63 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview2ofterracewithoutlogo.jpg';
import ResImg64 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview3ofbedroom1withlogo.jpg';
import ResImg65 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchenvw1withlogo.jpg';
import ResImg66 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchenvw3withlogo.jpg';
import ResImg67 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew1withlogo.jpg';
import ResImg68 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew2withlogo.jpg';
import ResImg69 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew3withlogo.jpg';
import ResImg70 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view1withlogo.jpg';
import ResImg71 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view2withlogo.jpg';
import ResImg72 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view3withlogo.jpg';
import ResImg73 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view4withlogo.jpg';
import ResImg74 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kidsbedroomview1withlogo.jpg';
import ResImg75 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kidsbedroomview3withlogo.jpg';
import ResImg76 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view1.jpg';
import ResImg77 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view2jpg.jpg';
import ResImg78 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view3jpg.jpg';
import ResImg79 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view4jpg.jpg';


// Create an array of objects with image data
const allImages = [
  { src: ResImg1, title: "Final Views 6" },
  { src: ResImg2, title: "Final Views 7" },
  { src: ResImg3, title: "Final Views 8" },
  { src: ResImg4, title: "Final Views 10" },
  { src: ResImg5, title: "Final Views 11" },
  { src: ResImg6, title: "Final Views 12" },
  { src: ResImg7, title: "First Floor View 1" },
  { src: ResImg8, title: "First Floor View 2" },
  { src: ResImg9, title: "First Floor View 3" },
  { src: ResImg10, title: "Guest Bedroom View 1" },
  { src: ResImg11, title: "Guest Bedroom View 2" },
  { src: ResImg12, title: "Guest Bedroom View 3" },
  { src: ResImg13, title: "Kids Bedroom 4" },
  { src: ResImg14, title: "Kids Bedroom 5" },
  { src: ResImg15, title: "Master Bedroom View 8" },
  { src: ResImg16, title: "Final Views 6" },
  { src: ResImg17, title: "Living Room View 1" },
  { src: ResImg18, title: "Living Room View 2" },
  { src: ResImg19, title: "Kitchen View 1" },
  { src: ResImg20, title: "Kitchen View 2" },
  { src: ResImg21, title: "Master Bedroom View 3" },
  { src: ResImg22, title: "Master Bedroom View 4" },
  { src: ResImg23, title: "Master Bedroom View 4" },
  { src: ResImg24, title: "Bungalow Bedroom View 1" },
  { src: ResImg25, title: "Bungalow Bedroom View 2" },
  { src: ResImg26, title: "Bungalow Bedroom 1 View 1" },
  { src: ResImg27, title: "Bedroom 4 View 1" },
  { src: ResImg28, title: "Bungalow Living Room" },
  { src: ResImg29, title: "Bungalow Bedroom 1 View 2" },
  { src: ResImg30, title: "Bedroom 4 View 2" },
  { src: ResImg31, title: "Bedroom 4 View 3" },
  { src: ResImg32, title: "Master Bedroom View 3" },
  { src: ResImg33, title: "Modified Bedroom 4 View 1" },
  { src: ResImg34, title: "Modified Bedroom 4 View 2" },
  { src: ResImg35, title: "Modified Final View 3" },
  { src: ResImg36, title: "Terrace View 1" },
  { src: ResImg37, title: "Terrace View 2" },
  { src: ResImg38, title: "Bungalow Bedroom View 1" },
  { src: ResImg39, title: "Bungalow Bedroom View 1" },
  { src: ResImg40, title: "Kids Bedroom View 3" },
  { src: ResImg41, title: "Kids Bedroom View 4" },
  { src: ResImg42, title: "Terrace View 1" },
  { src: ResImg43, title: "Kids Bedroom Terrace" },
  { src: ResImg44, title: "Kitchen View 1" },
  { src: ResImg45, title: "Master Bedroom View 1" },
  { src: ResImg46, title: "Master Bedroom View 1" },
  { src: ResImg47, title: "Master Toilet View 1" },
  { src: ResImg48, title: "Kids Bedroom Terrace View 2" },
  { src: ResImg49, title: "Kitchen View 2" },
  { src: ResImg50, title: "Master Toilet View 2" },
  { src: ResImg51, title: "Kitchen View 3" },
  { src: ResImg52, title: "Master Bedroom View 3" },
  { src: ResImg53, title: "Kitchen View 4" },
  { src: ResImg54, title: "Living Room View 5" },
  { src: ResImg55, title: "Living Room View 6" },
  { src: ResImg56, title: "Living Room View 7" },
  { src: ResImg57, title: "Living Room View 8" },
  { src: ResImg58, title: "Living Room View 9" },
  { src: ResImg59, title: "Modified Bedroom 1" },
  { src: ResImg60, title: "Modified Kids Bedroom" },
  { src: ResImg61, title: "Modified Terrace" },
  { src: ResImg62, title: "Modified Kids Bedroom 2" },
  { src: ResImg63, title: "Modified Terrace 2" },
  { src: ResImg64, title: "Modified Bedroom 1 View 3" },
  { src: ResImg65, title: "Kitchen View 1" },
  { src: ResImg66, title: "Kitchen View 3" },
  { src: ResImg67, title: "Master Bedroom View 1" },
  { src: ResImg68, title: "Master Bedroom View 2" },
  { src: ResImg69, title: "Master Bedroom View 3" },
  { src: ResImg70, title: "View 1" },
  { src: ResImg71, title: "View 2" },
  { src: ResImg72, title: "View 3" },
  { src: ResImg73, title: "View 4" },
  { src: ResImg74, title: "Kids Bedroom View 1" },
  { src: ResImg75, title: "Kids Bedroom View 3" },
  { src: ResImg76, title: "View 1" },
  { src: ResImg77, title: "View 2" },
  { src: ResImg78, title: "View 3" },
  { src: ResImg79, title: "View 4" }
];

// Split image groups by requirement
const imageGroups = [
  allImages.slice(0, 16),    // Tab 1 - Atul Shah
  allImages.slice(16, 23),   // Tab 2 - Bhavesh Sharma
  allImages.slice(23, 39),   // Tab 3 - Naresh Jain
  allImages.slice(39, 64),   // Tab 4 - Rakesh Jain
  allImages.slice(64, 73),   // Tab 5 - Swapnil Patil
  allImages.slice(73, 79)    // Tab 6 - Vijay Maccha
];

const Residential = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const lightboxRef = useRef(null);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    e.target.onerror = null;
  };

  const openLightbox = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? imageGroups[activeTab].length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === imageGroups[activeTab].length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (currentImageIndex !== null) {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, activeTab]);

  return (
    <section 
      className="residential-tabs-section" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Helmet>
        <title>Residential Projects | Aaspire Design</title>
        <meta name="description" content="Explore our residential interior design projects including apartments, bungalows, and villas." />
      </Helmet>

      <div className="tabs-container">
        <h2 className="section-title">Residential Projects</h2>
        <div className="tab-buttons">
          {['Atul Shah', 'Bhavesh Sharma', 'Naresh Jain', 'Rakesh Jain', 'Swapnil Patil', 'Vijay Maccha'].map((label, i) => (
            <button
              key={i}
              className={activeTab === i ? 'active' : ''}
              onClick={() => {
                setActiveTab(i);
                setCurrentImageIndex(null);
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {imageGroups[activeTab].map((imgData, index) => (
            <div 
              className="image-box" 
              key={`${activeTab}-${index}`} 
              onClick={() => openLightbox(index)}
            >
              <img 
                src={imgData.src} 
                alt={imgData.title} 
                onError={handleImageError}
                loading="lazy"
              />
              <div className="image-info">
                <h3 className="image-title">{imgData.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {currentImageIndex !== null && (
          <div 
            className="lightbox" 
            onClick={closeLightbox}
            ref={lightboxRef}
          >
            <div 
              className="lightbox-content"
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
              
              <div className="lightbox-image-container">
                <img 
                  src={imageGroups[activeTab][currentImageIndex].src} 
                  alt={imageGroups[activeTab][currentImageIndex].title}
                  onError={handleImageError}
                />
                <div className="lightbox-info">
                  <h3>{imageGroups[activeTab][currentImageIndex].title}</h3>
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
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>
              
              <div className="image-counter">
                {currentImageIndex + 1} / {imageGroups[activeTab].length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Residential;