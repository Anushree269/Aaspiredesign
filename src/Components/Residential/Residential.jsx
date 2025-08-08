import React, { useState } from 'react';
import './Residential.css';
import bgImage from '../../assets/gray-chair-living-room-with-copy-space.jpg';

// Import all residential images
import ResImg1 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 6 with logo.jpg';
import ResImg2 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 7 with logo.jpg';
import ResImg3 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 8 with logo.jpg';
import ResImg4 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 10 with logo.jpg';
import ResImg5 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 11 with logo.jpg';
import ResImg6 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 12 with logo.jpg';
import ResImg7 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 1 with logo.jpg';
import ResImg8 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 2 with logo.jpg';
import ResImg9 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 3 with logo.jpg';
import ResImg10 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 1 with logo.jpg';
import ResImg11 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 2 with logo.jpg';
import ResImg12 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 3 with logo.jpg';
import ResImg13 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/KIDS BED 4 WITH LOGO.jpg';
import ResImg14 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/KIDS BED 5 WITH LOGO.jpg';
import ResImg15 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbed view 8 with logo.jpg';
import ResImg16 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 6 with logo.jpg';
import ResImg17 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL LIVING ROOM VIEW 1 WITH LOGO.jpg';
import ResImg18 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL LIVING ROOM VIEW 2 WITH LOGO.jpg';
import ResImg19 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 1 OF KITCHEN OF 2BHK WITH LOGO.jpg';
import ResImg20 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 2 OF KITCHEN OF 2BHK WITH LOGO.jpg';
import ResImg21 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 3 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import ResImg22 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 4 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import ResImg23 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 4 OF MASTER BEDROOM 2 WITH LOGO.jpg';
import ResImg24 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import ResImg25 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 2 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import ResImg26 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO.jpg';
import ResImg27 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF BEDROOM 4 WITH LOGO.jpg';
import ResImg28 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO.jpg';
import ResImg29 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 2 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO.jpg';
import ResImg30 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 2 OF BEDROOM 4 WITH LOGO.jpg';
import ResImg31 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 3 OF BEDROOM 4 WITH LOGO.jpg';
import ResImg32 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 3 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import ResImg33 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED BEDROOM 4 VIEW 1 WITH LOGO.jpg';
import ResImg34 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED BEDROOM 4 VIEW 2 WITH LOGO.jpg';
import ResImg35 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED FINAL VIEW 3 WITH LOGO.jpg';
import ResImg36 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/TERRACE VIEW 1 WITHOUT LOGO.jpg';
import ResImg37 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/TERRACE VIEW 2 WITH LOGO.jpg';
import ResImg38 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import ResImg39 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO.jpg';``
import ResImg40 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/Final kids bedroom view 3 with logo.jpg';
import ResImg41 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/Final kids bedroom view 4 with logo.jpg';
import ResImg42 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL TERRACE VIEW 1 OF BEDROOM 1 WITH LOGO.jpg';
import ResImg43 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF KIDS BEDROOM TERRACE WITH LOGO.jpg';
import ResImg44 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import ResImg45 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import ResImg46 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER BEDROOM 2 WITH LOGO.jpg';
import ResImg47 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER TOILET 1 WITH LOGO.jpg';
import ResImg48 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF KIDS BEDROOM TERRACE WITH LOGO.jpg';
import ResImg49 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import ResImg50 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF MASTER TOILET 1 WITH LOGO.jpg';
import ResImg51 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 3 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import ResImg52 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 3 OF MASTER BEDROOM 1 WITHOUT LOGO.jpg';
import ResImg53 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 4 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import ResImg54 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 5 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import ResImg55 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 6 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import ResImg56 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 7 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import ResImg57 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 8 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import ResImg58 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 9 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import ResImg59 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF BEDROOM 1 WITHOUT LOGO.jpg';
import ResImg60 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF KIDS BEDROOM WITHOUT LOGO.jpg';
import ResImg61 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF TERRACE WITH LOGO.jpg';
import ResImg62 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 2 OF KIDS BEDROOM WITH LOGO.jpg';
import ResImg63 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 2 OF TERRACE WITHOUT LOGO.jpg';
import ResImg64 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 3 OF BEDROOM 1 WITH LOGO.jpg';
import ResImg65 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchen vw 1 with logo.jpg';
import ResImg66 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchen vw 3 with logo.jpg';
import ResImg67 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 1 WITH LOGO.jpg';
import ResImg68 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 2 WITH LOGO.jpg';
import ResImg69 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 3 WITH LOGO.jpg';
import ResImg70 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 1 with logo.jpg';
import ResImg71 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 2 with logo.jpg';
import ResImg72 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 3 with logo.jpg';
import ResImg73 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import ResImg74 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kids bedroom view 1 with logo.jpg';
import ResImg75 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kids bedroom view 3 with logo.jpg';
import ResImg76 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view 1.jpg';
import ResImg77 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view 2jpg.jpg';
import ResImg78 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view 3jpg.jpg';
import ResImg79 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view 4jpg.jpg';

const allImages = [
  ResImg1, ResImg2, ResImg3, ResImg4, ResImg5, ResImg6, ResImg7, ResImg8, ResImg9, ResImg10,
  ResImg11, ResImg12, ResImg13, ResImg14, ResImg15, ResImg16, ResImg17, ResImg18, ResImg19, ResImg20,
  ResImg21, ResImg22, ResImg23, ResImg24, ResImg25, ResImg26, ResImg27, ResImg28, ResImg29, ResImg30,
  ResImg31, ResImg32, ResImg33, ResImg34, ResImg35, ResImg36, ResImg37, ResImg38, ResImg39, ResImg40,
  ResImg41, ResImg42, ResImg43, ResImg44, ResImg45, ResImg46, ResImg47, ResImg48, ResImg49, ResImg50,
  ResImg51, ResImg52, ResImg53, ResImg54, ResImg55, ResImg56, ResImg57, ResImg58, ResImg59, ResImg60,
  ResImg61, ResImg62, ResImg63, ResImg64, ResImg65, ResImg66, ResImg67, ResImg68, ResImg69, ResImg70,
  ResImg71, ResImg72, ResImg73, ResImg74, ResImg75, ResImg76, ResImg77, ResImg78, ResImg79, 
];

// Split image groups by requirement
const imageGroups = [
  allImages.slice(0, 16),    // Tab 1
  allImages.slice(17, 23),   // Tab 2 (7)
  allImages.slice(24, 37),   // Tab 3 (19)
  allImages.slice(45, 64),   // Tab 4 (27)
  allImages.slice(65, 73),   // Tab 5 (10)
  allImages.slice(74,79),
];

const Residential = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    e.target.onerror = null; // Prevent infinite loop if placeholder also fails
  };

  const closeLightbox = (e) => {
    if (e.target === e.currentTarget || e.target.className.includes('close-btn')) {
      setLightboxImage(null);
    }
  };

  return (
    <section 
      className="residential-tabs-section" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="tabs-container">
        <h2>Residential Projects</h2>
        <div className="tab-buttons">
          {['Atul Shah', 'Bhavesh Sharma', 'Naresh Jain', 'Rakesh Jain', 'Swapnil Patil','Vijay Maccha'].map((label, i) => (
            <button
              key={i}
              className={activeTab === i ? 'active' : ''}
              onClick={() => setActiveTab(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {imageGroups[activeTab].map((img, index) => (
            <div 
              className="image-box" 
              key={`${activeTab}-${index}`} 
              onClick={() => setLightboxImage(img)}
            >
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img 
                src={lightboxImage} 
                alt="Full View" 
                onError={handleImageError}
              />
              <button 
                className="close-btn"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Residential;