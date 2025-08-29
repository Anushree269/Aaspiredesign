import React, { useEffect, useState } from 'react';
import './Project.css';

// Background slideshow images

import bg1 from '../../assets/3d-room-interior.jpg';
import bg2 from '../../assets/viewroomimage.jpg';
// Import all your image assets
import img1 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import img2 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import img3 from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import img4 from '../../assets/commercialprojects/salonproject/finalviewofsalon4withlogo.jpg';
import img5 from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import img6 from '../../assets/commercialprojects/salonproject/finalviewofsalon6withlogo.jpg';
import img7 from '../../assets/commercialprojects/salonproject/finalviewofsalon7withlogo.jpg';
import img8 from '../../assets/commercialprojects/salonproject/rerenderview1.jpg';
import img11 from '../../assets/residentialprojects/atulshah/finalviews6withlogo.jpg';
import img12 from '../../assets/residentialprojects/atulshah/finalviews7withlogo.jpg';
import img13 from '../../assets/residentialprojects/atulshah/finalviews8withlogo.jpg';
import img14 from '../../assets/residentialprojects/atulshah/finalviews10withlogo.jpg';
import img15 from '../../assets/residentialprojects/atulshah/finalviews11withlog.jpg';
import img16 from '../../assets/residentialprojects/atulshah/firstfloorbv2withlogo.jpg';
import img17 from '../../assets/residentialprojects/atulshah/firstfloorbv3withlogo.jpg';
import img18 from '../../assets/residentialprojects/atulshah/gbv1withlogo.jpg';
import img19 from '../../assets/residentialprojects/atulshah/gbv2withlogo.jpg';
import img20 from '../../assets/residentialprojects/atulshah/gbv3withlogo.jpg';
import img21 from '../../assets/residentialprojects/atulshah/kidsbed4withlogo.jpg';
import img22 from '../../assets/residentialprojects/atulshah/kidsbed5withlogo.jpg';
import img23 from '../../assets/residentialprojects/atulshah/mbedview7withlogo.jpg';
import img24 from '../../assets/residentialprojects/atulshah/mbedview8withlogo.jpg';
import img26 from '../../assets/residentialprojects/bhavessharma/finallivingroomview2withlogo.jpg';
import img27 from '../../assets/residentialprojects/bhavessharma/finalview1ofkitchenof2bhkwithlogo.jpg';
import img28 from '../../assets/residentialprojects/bhavessharma/finalview1ofkitchenof2bhkwithlogo.jpg';
import img29 from '../../assets/residentialprojects/bhavessharma/finalview2ofkitchenof2bhkwithlogo.jpg';
import img30 from '../../assets/residentialprojects/bhavessharma/finalview3ofmasterbedroom1withlog.jpg';
import img31 from '../../assets/residentialprojects/bhavessharma/finalview4ofmasterbedroom1withlogo.jpg';
import img32 from '../../assets/residentialprojects/bhavessharma/inalview4ofmasterbedroom2withlogo.jpg';
import img33 from '../../assets/residentialprojects/nareshjain/bedroomview.jpg';
import img34 from '../../assets/residentialprojects/nareshjain/finalview1ofbedroom1oflonavalabunglowwithlogo.jpg';
import img35 from '../../assets/residentialprojects/nareshjain/finalview1oflivingroomoflonavalabungalowwithlogo.jpg';
import img36 from '../../assets/residentialprojects/nareshjain/finalview2ofbedroom1oflonavalabunglowwithlogo.jpg';
import img37 from '../../assets/residentialprojects/nareshjain/finalview2ofbedroom4withlogo.jpg';
import img38 from '../../assets/residentialprojects/nareshjain/finalview3ofmasterbedroom1withlogo.jpg';
import img39 from '../../assets/residentialprojects/nareshjain/modifiedbedroom4view1withlogo.jpg';
import img40 from '../../assets/residentialprojects/nareshjain/finalview3ofbedroom4withlogo.jpg';
import img41 from '../../assets/residentialprojects/nareshjain/modifiedbedroom4view2withlogo.jpg';
import img42 from '../../assets/residentialprojects/nareshjain/modifiedfinalview3withlogo.jpg';
import img43 from '../../assets/residentialprojects/nareshjain/modifiedbedroom4view2withlogo.jpg';
import img44 from '../../assets/residentialprojects/nareshjain/modifiedfinalview5withlogo.jpg';
import img46 from '../../assets/residentialprojects/nareshjain/terraceview2withlogo.jpg';
import img49 from '../../assets/residentialprojects/nareshjain/terraceview1withoutlogo.jpg';
import img51 from '../../assets/residentialprojects/rakeshjain/finalkidsbedroomview3withlogo.jpg';
import img52 from '../../assets/residentialprojects/rakeshjain/finalkidsbedroomview4withlogo.jpg';
import img53 from '../../assets/residentialprojects/rakeshjain/finalterraceview1ofbedroom1withlogo.jpg';
import img54 from '../../assets/residentialprojects/rakeshjain/finalview1ofkidsbedroomterracewithlogo.jpg';
import img55 from '../../assets/residentialprojects/rakeshjain/finalview1ofkitchenof3bhkwithlogo.jpg';
import img56 from '../../assets/residentialprojects/rakeshjain/finalview1ofmasterbedroom1withlogo.jpg';
import img57 from '../../assets/residentialprojects/rakeshjain/finalview1ofmasterbedroom2withlogo.jpg';
import img58 from '../../assets/residentialprojects/rakeshjain/finalview1ofmastertoilet1withlogo.jpg';
import img59 from '../../assets/residentialprojects/rakeshjain/finalview2ofkidsbedroomterracewithlogo.jpg';
import img60 from '../../assets/residentialprojects/rakeshjain/finalview2ofkitchenof3bhkwithlogo.jpg';
import img61 from '../../assets/residentialprojects/rakeshjain/finalview2ofmastertoilet1withlogo.jpg';
import img62 from '../../assets/residentialprojects/rakeshjain/finalview3ofkitchenof3bhkwithlogo.jpg';
import img63 from '../../assets/residentialprojects/rakeshjain/finalview3ofmasterbedroom1withoutlogo.jpg';
import img64 from '../../assets/residentialprojects/rakeshjain/finalview4ofkitchenof3bhkwithlogo.jpg';
import img65 from '../../assets/residentialprojects/rakeshjain/finalview5oflivingroomof3bhkwithlogo.jpg';
import img66 from '../../assets/residentialprojects/rakeshjain/finalview6oflivingroomof3bhkwithlogo.jpg';
import img67 from '../../assets/residentialprojects/rakeshjain/finalview7oflivingroomof3bhkwithlogo.jpg';
import img68 from '../../assets/residentialprojects/rakeshjain/finalview8oflivingroomof3bhkwithlogo.jpg';
import img69 from '../../assets/residentialprojects/rakeshjain/finalview9oflivingroomof3bhkwithlogo.jpg';
import img70 from '../../assets/residentialprojects/rakeshjain/finalview10oflivingroomof3bhkwithlogo.jpg';
import img71 from '../../assets/residentialprojects/rakeshjain/modifiedfinalview1ofkidsbedroomwithoutlogo.jpg';
import img72 from '../../assets/residentialprojects/rakeshjain/modifiedfinalview1ofterracewithlogo.jpg';
import img73 from '../../assets/residentialprojects/rakeshjain/modifiedfinalview2ofkidsbedroomwithlogo.jpg';
import img74 from '../../assets/residentialprojects/rakeshjain/modifiedfinalview2ofterracewithoutlogo.jpg';
import img75 from '../../assets/residentialprojects/rakeshjain/modifiedfinalview3ofbedroom1withlogo.jpg';
import img78 from '../../assets/residentialprojects/swapnilpatil/kitchenvw1withlogo.jpg';
import img79 from '../../assets/residentialprojects/swapnilpatil/kitchenvw3withlogo.jpg';
import img80 from '../../assets/residentialprojects/swapnilpatil/masterbedroomiew1withlogo.jpg';
import img81 from '../../assets/residentialprojects/swapnilpatil/masterbedroomiew2withlogo.jpg';
import img82 from '../../assets/residentialprojects/swapnilpatil/masterbedroomiew3withlogo.jpg';
import img83 from '../../assets/residentialprojects/swapnilpatil/view1withlogo.jpg';
import img84 from '../../assets/residentialprojects/swapnilpatil/view2withlogo.jpg';
import img85 from '../../assets/residentialprojects/swapnilpatil/view3withlogo.jpg';
import img86 from '../../assets/residentialprojects/swapnilpatil/view4withlogo.jpg';
import img87 from '../../assets/residentialprojects/vijaymaccha/kidsbedroomview1withlogo.jpg';
import img88 from '../../assets/residentialprojects/vijaymaccha/kidsbedroomview3withlogo.jpg';
import img89 from '../../assets/residentialprojects/vijaymaccha/view1.jpg';
import img90 from '../../assets/residentialprojects/vijaymaccha/view2.jpg';
import img91 from '../../assets/residentialprojects/vijaymaccha/view3.jpg';
import img92 from '../../assets/residentialprojects/vijaymaccha/view4.jpg';


// ------------------ Array of All Images ------------------

// Default overlay image
import defaultOverlayimg from '../../assets/white-armchair.jpg';

// Import all image assets
// (Keep your existing image imports here)

// Project categories data structure
const PROJECT_CATEGORIES = {
  commercial: {
    title: "Commercial projects",
    description: "Professional spaces designed for business and commerce",
    projects: [
      {
        title: "Salon Project",
        images: [
          { src: img1, alt: "Salon View 1", },
          { src: img2, alt: "Salon View 2",  },
          { src: img3, alt: "Salon View 3",  },
          { src: img4, alt: "Salon View 4",  },
          { src: img5, alt: "Salon View 5",  },
          { src: img6, alt: "Salon View 6",   },
          { src: img7, alt: "Salon View 7", },
          { src: img8, alt: "Salon View 8",   },
          
          // Add all commercial images here
        ]
      },
      // Add more commercialprojects/salonproject as needed
    ]
  },
  residential: {
    title: "Residential Projects",
    description: "Beautiful living spaces crafted for comfort and style",
    projects: [
      {
        title: "Atul Shah Residence",
        images: [
          { src: img11, alt: "Salon View 1",  },
          { src: img12, alt: "Salon View 2",   },
          { src: img13, alt: "Salon View 3",  },
          { src: img14, alt: "Salon View 4",   },
          { src: img15, alt: "Salon View 5",   },
          { src: img16, alt: "Salon View 6",  },
          { src: img17, alt: "Salon View 7",  },
          { src: img18, alt: "Salon View 8",  },
          { src: img19, alt: "Salon View 9",  },
          { src: img20, alt: "Salon View 10",   },
          { src: img21, alt: "Salon View 11",  },
          { src: img22, alt: "Salon View 12",  },
          { src: img23, alt: "Salon View 13", },
          { src: img24, alt: "Salon View 14",   },
          // Add all residential images here
        ]
      },
      {
        title: "Bhavesh Sharma Residence",
        images: [
          { src: img26, alt: "Living Room1",  },
          { src: img27, alt: "Living Room2",  },
          { src: img28, alt: "Living Room3",  },
          { src: img29, alt: "Living Room4",  },
          { src: img30, alt: "Living Room5", },
          { src: img31, alt: "Living Room6",  },
          { src: img32, alt: "Living Room8",  },
        // Add more images
        ]
      },
      {
        title: "Naresh Jain Residence",
        images: [
          { src: img33, alt: "Living Room9",  },
          { src: img34, alt: "Living Room",   },
          { src: img35, alt: "Living Room",  },
          { src: img36, alt: "Living Room",  },
          { src: img37, alt: "Living Room",  },
          { src: img38, alt: "Living Room",  },
          { src: img39, alt: "Living Room",   },
          { src: img40, alt: "Living Room",  },
          { src: img41, alt: "Living Room",  },
          { src: img42, alt: "Living Room",  },
          { src: img43, alt: "Living Room",   },
          { src: img44, alt: "Living Room",   },
          { src: img46, alt: "Living Room",   },
         {src: img49, alt: "Living Room",   },



        // Add more images
        ]
      },
      {
        title: "Rakesh Jain Residence",
        images: [
          { src: img51, alt: "Living Room",  },
          { src: img52, alt: "Living Room",   },
          { src: img53, alt: "Living Room", },
          { src: img54, alt: "Living Room",  },
          { src: img55, alt: "Living Room",   },
          { src: img56, alt: "Living Room",   },
          { src: img57, alt: "Living Room",  },
          { src: img58, alt: "Living Room",  },
          { src: img59, alt: "Living Room",  },
          { src: img60, alt: "Living Room",   },
          { src: img61, alt: "Living Room",  },
          { src: img62, alt: "Living Room", },
          { src: img63, alt: "Living Room",  },
          { src: img64, alt: "Living Room",   },
          { src: img65, alt: "Living Room",  },
          { src: img66, alt: "Living Room", },
          { src: img67, alt: "Living Room",  },
          { src: img68, alt: "Living Room", },
          { src: img69, alt: "Living Room",   },
          { src: img70, alt: "Living Room",  },
          { src: img71, alt: "Living Room",   },
           { src: img72, alt: "Living Room",  },
           { src: img73, alt: "Living Room",  },
            { src: img74, alt: "Living Room", },
            { src: img75, alt: "Living Room",  },



          {
        title: "Swapnil Patil Residence",
        images: [
         { src: img78, alt: "Living Room",   },
          { src: img79, alt: "Living Room",  },
          { src: img80, alt: "Living Room", },
          { src: img81, alt: "Living Room",   },
          { src: img82, alt: "Living Room",  },
          { src: img83, alt: "Living Room",   },
          { src: img84, alt: "Living Room",  },
          { src: img85, alt: "Living Room",  },
          { src: img86, alt: "Living Room",  },
          { src: img87, alt: "Living Room",  },
          { src: img88, alt: "Living Room",  },
          { src: img89, alt: "Living Room", },
          { src: img90, alt: "Living Room",},
         { src: img91, alt: "Living Room",},
          { src: img92, alt: "Living Room", },

         

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
              At Aaspire Design, we specialize in creating sophisticated and functional interior spaces that reflect a deep attention to detail and refined luxury. Combining artistic vision with technical precision, our designs embody both elegance and purpose. Led by Dhwani Sanghavi and Parag Shelar— Director of Aaspire Design and mentor at INSD Baner, Pune — we are committed to delivering spaces that inspire, elevate, and endure.
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