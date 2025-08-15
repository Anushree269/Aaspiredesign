import React, { useEffect, useState } from 'react';
import './Project.css';

// Background slideshow images

import bg1 from '../../assets/3d-room-interior-with-classic-design-furniture1.jpg';
import bg2 from '../../assets/view-room-interior-with-furniture-copy-space2.jpg';
// Import all your image assets
import img1 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon1withlogo.jpg';
import img2 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon2withlogo.jpg';
import img3 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon3withlogo.jpg';
import img4 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon4withlogo.jpg';
import img5 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon5withlogo.jpg';
import img6 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon6withlogo.jpg';
import img7 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/finalviewofsalon7withlogo.jpg';
import img8 from '../../assets/COMMERCIALPROJECTS/SALOONPROJECT/rerenderview1.jpg';
import img11 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews6withlogo.jpg';
import img12 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews7withlogo.jpg';
import img13 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews8withlogo.jpg';
import img14 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews10withlogo.jpg';
import img15 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/finalviews11withlogo.jpg';
import img16 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv1withlogo.jpg';
import img17 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv2withlogo.jpg';
import img18 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/firstfloorbv3withlogo.jpg';
import img19 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv1withlogo.jpg';
import img20 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv2withlog.jpg';
import img21 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gbv3withlog.jpg';
import img22 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/kidsbed4withlogo.jpg';
import img23 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbedview7withlogo.jpg';
import img24 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbedview8withlogo.jpg';
import img25 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbedview9withlogo.jpg';
import img26 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finallivingroomview1withlogo.jpg';
import img27 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finallivingroomview2withlogo.jpg';
import img28 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview1ofkitchenof2bhkwithlogo.jpg';
import img29 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview2ofkitchenof2bhkwithlogo.jpg';
import img30 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview3ofmasterbedroom1withlog.jpg';
import img31 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview4ofmasterbedroom1withlogo.jpg';
import img32 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/finalview4ofmasterbedroom2withlogo.jpg';
import img33 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalbedroom2view1oflonavalabungalowwithlogo.jpg';
import img34 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalbedroom2view2oflonavalabungalowwithlogo.jpg';
import img35 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1ofbedroom1oflonavalabunglowwithlogo.jpg';
import img36 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1ofbedroom4withlogo.jpg';
import img37 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview1oflivingroomoflonavalabungalowwithlogo.jpg';
import img38 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview2ofbedroom1oflonavalabunglowwithlogo.jpg';
import img39 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview2ofbedroom4withlogo.jpg';
import img40 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview3ofbedroom4withlogo.jpg';
import img41 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/finalview3ofmasterbedroom1withlogo.jpg';
import img42 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedbedroom4view1withlogo.jpg';
import img43 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedbedroom4view2withlogo.jpg';
import img44 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview3withlogo.jpg';
import img46 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/terraceview2withlogo.jpg';
import img47 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview4withlogo.jpg';
import img48 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/modifiedfinalview5withlogo.jpg';
import img49 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/terraceview1withoutlogo.jpg';
import img51 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalkidsbedroomview3withlogo.jpg';
import img52 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalkidsbedroomview4withlogo.jpg';
import img53 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalterraceview1ofbedroom1withlogo.jpg';
import img54 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofkidsbedroomterracewithlogo.jpg';
import img55 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofkitchenof3bhkwithlogo.jpg';
import img56 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmasterbedroom1withlogo.jpg';
import img57 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmasterbedroom2withlogo.jpg';
import img58 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview1ofmastertoilet1withlogo.jpg';
import img59 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofkidsbedroomterracewithlogo.jpg';
import img60 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofkitchenof3bhkwithlogo.jpg';
import img61 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofmastertoilet1withlogo.jpg';
import img62 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview2ofmastertoilet1withlogo.jpg';
import img63 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview3ofkitchenof3bhkwithlogo.jpg';
import img64 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview3ofmasterbedroom1withoutlogo.jpg';
import img65 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview4ofkitchenof3bhkwithlogo.jpg';
import img66 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview5oflivingroomof3bhkwithlogo.jpg';
import img67 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview6oflivingroomof3bhkwithlogo.jpg';
import img68 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview7oflivingroomof3bhkwithlogo.jpg';
import img69 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview8oflivingroomof3bhkwithlogo.jpg';
import img70 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/finalview9oflivingroomof3bhkwithlogo.jpg';
import img71 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofbedroom1withoutlogo.jpg';
import img72 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofkidsbedroomwithoutlogo.jpg';
import img73 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview1ofterracewithlogo.jpg';
import img74 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview2ofkidsbedroomwithlogo.jpg';
import img75 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview3ofbedroom1withlogo.jpg';
import img76 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview4ofkidsbedroomwithoutlogo.jpg';
import img77 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/modifiedfinalview5ofkidsbedroomwithlogo.jpg';
import img78 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchenvw1withlogo.jpg';
import img79 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchenvw3withlogo.jpg';
import img80 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew1withlogo.jpg';
import img81 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew2withlogo.jpg';
import img82 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/masterbedroomiew3withlogo.jpg';
import img83 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view1withlogo.jpg';
import img84 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view2withlogo.jpg';
import img85 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view3withlogo.jpg';
import img86 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view4withlogo.jpg';
import img87 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kidsbedroomview1withlogo.jpg';
import img88 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/kidsbedroomview3withlogo.jpg';
import img89 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view1.jpg';
import img90 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view2.jpg';
import img91 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view3.jpg';
import img92 from '../../assets/RESIDENTIALPROJECTS/VIJAYMACCHA/view4.jpg';


// ------------------ Array of All Images ------------------

// Default overlay image
import defaultOverlayimg from '../../assets/white-armchair.jpg';

// Import all image assets
// (Keep your existing image imports here)

// Project categories data structure
const PROJECT_CATEGORIES = {
  commercial: {
    title: "COMMERCIALPROJECTS/SALOONPROJECT",
    description: "Professional spaces designed for business and commerce",
    projects: [
      {
        title: "Salon Project",
        images: [
          { src: img1, alt: "Salon View 1", title: "final view of salon 1 with logo" },
          { src: img2, alt: "Salon View 2", title: "final view of salon 2 with logo" },
          { src: img3, alt: "Salon View 3", title: "final view of salon 3 with logo",  },
          { src: img4, alt: "Salon View 4", title: "final view of salon 4 with logo",  },
          { src: img5, alt: "Salon View 5", title: "final view of salon 5 with logo",  },
          { src: img6, alt: "Salon View 6", title: "final view of salon 6 with logo",  },
          { src: img7, alt: "Salon View 7", title: "final view of salon 7 with logo", },
          { src: img8, alt: "Salon View 8", title: "rerender view 1",  },
          
          // Add all commercial images here
        ]
      },
      // Add more COMMERCIALPROJECTS/SALOONPROJECT as needed
    ]
  },
  residential: {
    title: "Residential Projects",
    description: "Beautiful living spaces crafted for comfort and style",
    projects: [
      {
        title: "Atul Shah Residence",
        images: [
          { src: img11, alt: "Salon View 1", title: "final views 6 with ", },
          { src: img12, alt: "Salon View 2", title: "final views 7 with ",  },
          { src: img13, alt: "Salon View 3", title: "final views 8 with ", },
          { src: img14, alt: "Salon View 4", title: "final views 10 with final views 10 ",  },
          { src: img15, alt: "Salon View 5", title: "final views 11 ",  },
          { src: img16, alt: "Salon View 6", title: "final views 12 ", },
          { src: img17, alt: "Salon View 7", title: "first floor bv 1 " },
          { src: img18, alt: "Salon View 8", title: "first floor bv 2 ", },
          { src: img19, alt: "Salon View 9", title: "first floor bv 3 ",  },
          { src: img20, alt: "Salon View 10", title: "gb v 1 ",  },
          { src: img21, alt: "Salon View 11", title: "gb v 2",  },
          { src: img22, alt: "Salon View 12", title: "gb v 3 ",  },
          { src: img23, alt: "Salon View 13", title: "KIDS BED 4 ", },
          { src: img24, alt: "Salon View 14", title: "KIDS BED 5 ",  },
          { src: img25, alt: "Salon View 15", title: "mbed view 7 ", },
          // Add all residential images here
        ]
      },
      {
        title: "Bhavesh Sharma Residence",
        images: [
          { src: img26, alt: "Living Room1", title: "FINAL LIVING ROOM VIEW 1 ", },
          { src: img27, alt: "Living Room2", title: "FINAL LIVING ROOM VIEW 2 ", },
          { src: img28, alt: "Living Room3", title: "FINAL VIEW 1 OF KITCHEN OF 2BHK ", },
          { src: img29, alt: "Living Room4", title: "FINAL VIEW 2 OF KITCHEN OF 2BHK ", },
          { src: img30, alt: "Living Room5", title: "FINAL VIEW 3 OF MASTER BEDROOM 1", },
          { src: img31, alt: "Living Room6", title: "FINAL VIEW 4 OF MASTER BEDROOM 1 ", },
          { src: img32, alt: "Living Room8", title: "FINAL VIEW 4 OF MASTER BEDROOM 2 ",  },
        // Add more images
        ]
      },
      {
        title: "Naresh Jain Residence",
        images: [
          { src: img33, alt: "Living Room9", title: "FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO", },
          { src: img34, alt: "Living Room", title: "FINAL BEDROOM 2 VIEW 2 OF LONAVALA BUNGALOW WITH LOGO",  },
          { src: img35, alt: "Living Room", title: "FINAL VIEW 1 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO", },
          { src: img36, alt: "Living Room", title: "FINAL VIEW 1 OF BEDROOM 4 WITH LOGO", },
          { src: img37, alt: "Living Room", title: "FINAL VIEW 1 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO", },
          { src: img38, alt: "Living Room", title: "FINAL VIEW 2 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO", },
          { src: img39, alt: "Living Room", title: "FINAL VIEW 2 OF BEDROOM 4 WITH LOGO",  },
          { src: img40, alt: "Living Room", title: "FINAL VIEW 2 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO",  },
          { src: img41, alt: "Living Room", title: "FINAL VIEW 3 OF BEDROOM 4 WITH LOGO",  },
          { src: img42, alt: "Living Room", title: "FINAL VIEW 3 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO",  },
          { src: img43, alt: "Living Room", title: "FINAL VIEW 3 OF MASTER BEDROOM 1 WITH LOGO",  },
          { src: img44, alt: "Living Room", title: "MODIFIED BEDROOM 4 VIEW 1 WITH LOGO",  },
          { src: img46, alt: "Living Room", title: "MODIFIED FINAL VIEW 3 WITH LOGO",  },
          { src: img47, alt: "Living Room", title: "TERRACE VIEW 1 WITHOUT LOGO",  },
          { src: img48, alt: "Living Room", title: "TERRACE VIEW 2 WITH LOGO",  },
          {src: img48, alt: "Living Room", title: "TERRACE VIEW 2 WITH LOGO",  },
         {src: img49, alt: "Living Room", title: "MODIFIED FINAL VIEW 4 WITHLOGO",  },



        // Add more images
        ]
      },
      {
        title: "Rakesh Jain Residence",
        images: [
          { src: img51, alt: "Living Room", title: "FINAL TERRACE VIEW 1 OF BEDROOM 1 WITH LOGO",  },
          { src: img52, alt: "Living Room", title: "FINAL VIEW 1 OF KIDS BEDROOM TERRACE WITH LOGO",  },
          { src: img53, alt: "Living Room", title: "FINAL VIEW 1 OF KITCHEN OF 3BHK WITH LOGO", },
          { src: img54, alt: "Living Room", title: "FINAL VIEW 1 OF MASTER BEDROOM 1 WITH LOGO", },
          { src: img55, alt: "Living Room", title: "FINAL VIEW 1 OF MASTER BEDROOM 2 WITH LOGO",  },
          { src: img56, alt: "Living Room", title: "FINAL VIEW 1 OF MASTER TOILET 1 WITH LOGO",  },
          { src: img57, alt: "Living Room", title: "FINAL VIEW 2 OF KIDS BEDROOM TERRACE WITH LOGO", },
          { src: img58, alt: "Living Room", title: "FINAL VIEW 2 OF KITCHEN OF 3BHK WITH LOGO",  },
          { src: img59, alt: "Living Room", title: "FINAL VIEW 2 OF MASTER BEDROOM 1 WITH LOGO", },
          { src: img60, alt: "Living Room", title: "FINAL VIEW 2 OF MASTER BEDROOM 2 WITH LOGO",  },
          { src: img61, alt: "Living Room", title: "FINAL VIEW 2 OF MASTER TOILET 1 WITH LOGO", },
          { src: img62, alt: "Living Room", title: "FINAL VIEW 3 OF KITCHEN OF 3BHK WITH LOGO", },
          { src: img63, alt: "Living Room", title: "FINAL VIEW 3 OF MASTER BEDROOM 1 WITHOUT LOGO",  },
          { src: img64, alt: "Living Room", title: "FINAL VIEW 4 OF KITCHEN OF 3BHK WITH LOGO",  },
          { src: img65, alt: "Living Room", title: "FINAL VIEW 5 OF LIVING ROOM OF 3 BHK WITH LOGO",  },
          { src: img66, alt: "Living Room", title: "FINAL VIEW 6 OF LIVING ROOM OF 3 BHK WITH LOGO",  },
          { src: img67, alt: "Living Room", title: "FINAL VIEW 7 OF LIVING ROOM OF 3 BHK WITH LOGO",  },
          { src: img68, alt: "Living Room", title: "FINAL VIEW 8 OF LIVING ROOM OF 3 BHK WITH LOGO",},
          { src: img69, alt: "Living Room", title: "FINAL VIEW 9 OF LIVING ROOM OF 3 BHK WITH LOGO",  },
          { src: img70, alt: "Living Room", title: "MODIFIED FINAL VIEW 1 OF BEDROOM 1 WITHOUT LOGO", },
          { src: img71, alt: "Living Room", title: "MODIFIED FINAL VIEW 1 OF KIDS BEDROOM WITHOUT LOGO",  },
           { src: img72, alt: "Living Room", title: "MODIFIED FINAL VIEW 1 OF TERRACE WITH LOGO",  },
           { src: img73, alt: "Living Room", title: "MODIFIED FINAL VIEW 2 OF KIDS BEDROOM WITH LOGO",  },
            { src: img74, alt: "Living Room", title: "MODIFIED FINAL VIEW 2 OF TERRACE WITHOUT LOGO", },
            { src: img75, alt: "Living Room", title: "MODIFIED FINAL VIEW 3 OF BEDROOM 1 WITH LOGO",  },
             { src: img76, alt: "Living Room", title: "MODIFIED FINAL VIEW 3 OF BEDROOM 1 WITH LOGO",  },
             { src: img77, alt: "Living Room", title: "MODIFIED FINAL VIEW 3 OF BEDROOM 1 WITH LOGO",  },



          {
        title: "Swapnil Patil Residence",
        images: [
          { src: img76, alt: "Living Room", title: "kitchen vw 1 with logo",  },
          { src: img77, alt: "Living Room", title: "kitchen vw 3 with logo",  },
         { src: img78, alt: "Living Room", title: "MASTER BEDROOM IEW 1 WITH LOGO",  },
          { src: img79, alt: "Living Room", title: "MASTER BEDROOM IEW 2 WITH LOGO",  },
          { src: img80, alt: "Living Room", title: "MASTER BEDROOM IEW 3 WITH LOGO", },
          { src: img81, alt: "Living Room", title: "view 1 with logo",  },
          { src: img82, alt: "Living Room", title: "view 2 with logo", },
          { src: img83, alt: "Living Room", title: "view 3 with logo",  },
          { src: img84, alt: "Living Room", title: "view 4 with logo",  },
          { src: img85, alt: "Living Room", title: "Cozy Lounge",  },
          { src: img86, alt: "Living Room", title: "Cozy Lounge",  },
          { src: img87, alt: "Living Room", title: "Cozy Lounge",  },
          { src: img88, alt: "Living Room", title: "Cozy Lounge", },
          { src: img89, alt: "Living Room", title: "Cozy Lounge", },
          { src: img90, alt: "Living Room", title: "Cozy Lounge",},
         { src: img91, alt: "Living Room", title: "View 1",},
          { src: img92, alt: "Living Room", title: "View 2",},

         

        // Add more images
        ]
      },

        // Add more images
        ]
      }, 
      // Add more residential projects
    ]
  }
};

const Project = () => {
  const bgImages = [bg1, bg2];
  const [bgIndex, setBgIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState({
    src: defaultOverlayimg,
  });
  const [expandedProject, setExpandedProject] = useState(null);

  // Background image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const handleCategoryToggle = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setExpandedProject(null);
  };

  const handleProjectToggle = (projectIndex) => {
    setExpandedProject(expandedProject === projectIndex ? null : projectIndex);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div 
      className="project-page"
      style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      aria-label="Our Projects Gallery"
    >
      <div className="project-overlay">
        <div className="project-container">
          <div className="project-header">
            <h1 className="project-title">Our Projects</h1>
            <p className="project-intro">
              At Aaspire Design, we specialize in creating sophisticated and functional interior spaces that reflect a deep attention to detail and refined luxury. Combining artistic vision with technical precision, our designs embody both elegance and purpose. Led by Dhwani Sanghavi — Director of Aaspire Design and mentor at INSD Baner, Pune — we are committed to delivering spaces that inspire, elevate, and endure.
            </p>
          </div>

          <div className="project-content">
            <div className="project-gallery">
              {Object.entries(PROJECT_CATEGORIES).map(([categoryKey, category]) => (
                <div 
                  key={categoryKey}
                  className={`category-section ${activeCategory === categoryKey ? 'active' : ''}`}
                >
                  <button
                    className="category-toggle"
                    onClick={() => handleCategoryToggle(categoryKey)}
                    aria-expanded={activeCategory === categoryKey}
                    aria-controls={`${categoryKey}-projects`}
                  >
                    {category.title}
                    <span className="toggle-icon">
                      {activeCategory === categoryKey ? '▼' : '►'}
                    </span>
                  </button>

                  {activeCategory === categoryKey && (
                    <div 
                      id={`${categoryKey}-projects`}
                      className="projects-list"
                    >
                      {category.projects.map((project, projectIndex) => (
                        <div 
                          key={projectIndex}
                          className="project-item"
                        >
                          <button
                            className="project-toggle"
                            onClick={() => handleProjectToggle(projectIndex)}
                            aria-expanded={expandedProject === projectIndex}
                          >
                            {project.title}
                            <span className="toggle-icon">
                              {expandedProject === projectIndex ? '▼' : '►'}
                            </span>
                          </button>

                          {expandedProject === projectIndex && (
                            <div className="image-grid">
                              {project.images.map((image, imageIndex) => (
                                <div 
                                  key={imageIndex}
                                  className="image-thumbnail"
                                  onClick={() => handleImageClick(image)}
                                  role="button"
                                  tabIndex="0"
                                  aria-label={`View ${image.title}`}
                                >
                                  <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    loading="lazy"
                                  />
                                  <div className="image-overlay">
                                    <span className="view-text">View</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="project-preview">
              <div className="preview-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt || selectedImage.title}
                  className="preview-image"
                />
              </div>
              <div className="preview-details">
                <h3 className="preview-title">{selectedImage.title}</h3>
                <p className="preview-description">{selectedImage.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;