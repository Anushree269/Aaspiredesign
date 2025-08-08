import React, { useEffect, useState } from 'react';
import './Project.css';

// Background slideshow images

import bg1 from '../../assets/3d-room-interior-with-classic-design-furniture1.jpg';
import bg2 from '../../assets/view-room-interior-with-furniture-copy-space2.jpg';
// Import all your image assets
import img1 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 1 with logo.jpg';
import img2 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 2 with logo.jpg';
import img3 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 3 with logo.jpg';
import img4 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 4 with logo.jpg';
import img5 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 5 with logo.jpg';
import img6 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 6 with logo.jpg';
import img7 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 7 with logo.jpg';
import img8 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/rerender view 1.jpg';
import img11 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 8 with logo.jpg';
import img12 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 10 with logo.jpg';
import img13 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 11 with logo.jpg';
import img14 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/final views 12 with logo.jpg';
import img15 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 1 with logo.jpg';
import img16 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 2 with logo.jpg';
import img17 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/first floor bv 3 with logo.jpg';
import img18 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 1 with logo.jpg';
import img19 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 2 with logo.jpg';
import img20 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/gb v 3 with logo.jpg';
import img21 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/KIDS BED 4 WITH LOGO.jpg';
import img22 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/KIDS BED 5 WITH LOGO.jpg';
import img23 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbed view 7 with logo.jpg'
import img24 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbed view 8 with logo.jpg';
import img25 from '../../assets/RESIDENTIALPROJECTS/ATULSHAH/mbed view 9 with logo.jpg';
import img26 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL LIVING ROOM VIEW 1 WITH LOGO.jpg';
import img27 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL LIVING ROOM VIEW 2 WITH LOGO.jpg';
import img28 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 1 OF KITCHEN OF 2BHK WITH LOGO.jpg';
import img29 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 2 OF KITCHEN OF 2BHK WITH LOGO.jpg';
import img30 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 3 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import img31 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 4 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import img32 from '../../assets/RESIDENTIALPROJECTS/BHAVESHSHARMA/FINAL VIEW 4 OF MASTER BEDROOM 2 WITH LOGO.jpg';
import img33 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import img34 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 2 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import img35 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO.jpg';
import img36 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF BEDROOM 4 WITH LOGO.jpg';
import img37 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 1 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO.jpg';
import img38 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 2 OF BEDROOM 1 OF LONAVALA BUNGLOW WITH LOGO.jpg';
import img39 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 2 OF BEDROOM 4 WITH LOGO.jpg';
import img40 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 3 OF BEDROOM 4 WITH LOGO.jpg';
import img41 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL BEDROOM 2 VIEW 1 OF LONAVALA BUNGALOW WITH LOGO.jpg';
import img42 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 3 OF LIVING ROOM OF LONAVALA BUNGALOW WITH LOGO.jpg';
import img43 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/FINAL VIEW 3 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import img44 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED BEDROOM 4 VIEW 1 WITH LOGO.jpg';
import img45 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED BEDROOM 4 VIEW 2 WITH LOGO.jpg';
import img46 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/MODIFIED FINAL VIEW 3 WITH LOGO.jpg';
import img47 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/TERRACE VIEW 1 WITHOUT LOGO.jpg';
import img48 from '../../assets/RESIDENTIALPROJECTS/NARESHJAIN/TERRACE VIEW 2 WITH LOGO.jpg';
import img49 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/Final kids bedroom view 3 with logo.jpg';
import img50 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/Final kids bedroom view 4 with logo.jpg';
import img51 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL TERRACE VIEW 1 OF BEDROOM 1 WITH LOGO.jpg';
import img52 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF KIDS BEDROOM TERRACE WITH LOGO.jpg';
import img53 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import img54 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import img55 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER BEDROOM 2 WITH LOGO.jpg';
import img56 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 1 OF MASTER TOILET 1 WITH LOGO.jpg';
import img57 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF KIDS BEDROOM TERRACE WITH LOGO.jpg';
import img58 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import img59 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF MASTER BEDROOM 1 WITH LOGO.jpg';
import img60 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF MASTER BEDROOM 2 WITH LOGO.jpg';
import img61 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 2 OF MASTER TOILET 1 WITH LOGO.jpg';
import img62 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 3 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import img63 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 3 OF MASTER BEDROOM 1 WITHOUT LOGO.jpg';
import img64 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 4 OF KITCHEN OF 3BHK WITH LOGO.jpg';
import img65 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 5 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import img66 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 6 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import img67 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 7 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import img68 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 8 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import img69 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/FINAL VIEW 9 OF LIVING ROOM OF 3 BHK WITH LOGO.jpg';
import img70 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF BEDROOM 1 WITHOUT LOGO.jpg';
import img71 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF KIDS BEDROOM WITHOUT LOGO.jpg';
import img72 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 1 OF TERRACE WITH LOGO.jpg';
import img73 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 2 OF KIDS BEDROOM WITH LOGO.jpg';
import img74 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 2 OF TERRACE WITHOUT LOGO.jpg';
import img75 from '../../assets/RESIDENTIALPROJECTS/RAKESHJAIN/MODIFIED FINAL VIEW 3 OF BEDROOM 1 WITH LOGO.jpg';
import img76 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchen vw 1 with logo.jpg';
import img77 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/kitchen vw 3 with logo.jpg';
import img78 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 1 WITH LOGO.jpg';
import img79 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 2 WITH LOGO.jpg';
import img80 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/MASTER BEDROOM IEW 3 WITH LOGO.jpg';
import img81 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 1 with logo.jpg';
import img82 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 2 with logo.jpg';
import img83 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 2 with logo.jpg';
import img84 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img85 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img86 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img87 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img88 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img89 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';
import img90 from '../../assets/RESIDENTIALPROJECTS/SWAPNILPATIL/view 4 with logo.jpg';

// Default overlay image
import defaultOverlayImg from '../../assets/white-armchair.jpg';

// Import all image assets
// (Keep your existing image imports here)

// Project categories data structure
const PROJECT_CATEGORIES = {
  commercial: {
    title: "Commercial Projects",
    description: "Professional spaces designed for business and commerce",
    projects: [
      {
        title: "Salon Project",
        images: [
          { src: img1, alt: "Salon View 1", title: "final view of salon 1 with logo", details: "A refined salon space designed for sophistication and comfort. This layout features minimalist styling with soft ambient lighting, sleek furnishings, and a modern aesthetic that enhances the client experience. The elegant design reflects a premium environment suitable for high-end grooming services." },
          { src: img2, alt: "Salon View 2", title: "final view of salon 2 with logo", details: "A contemporary salon interior combining style and functionality. The space integrates geometric design elements, subtle textures, and warm tones to create a welcoming and trendy atmosphere. Ideal for urban salons aiming to blend fashion-forward design with practical workspaces" },
          { src: img3, alt: "Salon View 3", title: "final view of salon 3 with logo", details: "This setup highlights ergonomic salon chairs complemented by illuminated mirror stations. The use of LED lighting enhances visibility and style, offering a vibrant yet professional ambiance perfect for precision styling and client satisfaction." },
          { src: img4, alt: "Salon View 4", title: "final view of salon 4 with logo", details: "An upscale salon layout that merges modern elegance with functional design. The scene showcases premium furnishings, ambient lighting, and a well-branded aesthetic featuring the salon’s logo. This setup is perfect for creating a luxurious yet approachable atmosphere that elevates client comfort and brand identity." },
          { src: img5, alt: "Salon View 5", title: "final view of salon 5 with logo", details: "A stylish and contemporary salon setup featuring clean lines, modern fixtures, and soft accent lighting. The branding is subtly integrated with the interior, creating a cohesive and inviting space. Ideal for trend-conscious clients, this design balances visual appeal with professional functionality." },
          { src: img6, alt: "Salon View 6", title: "final view of salon 6 with logo", details: "An immersive salon environment crafted for luxury and efficiency. This final view showcases a harmonious blend of elegant design elements, high-end salon equipment, and well-placed lighting that highlights the brand logo. Designed to offer both visual sophistication and a premium client experience." },
          { src: img7, alt: "Salon View 7", title: "final view of salon 7 with logo", details: "A bold and fashionable salon setup that emphasizes glamour and modern aesthetics. Featuring reflective surfaces, ambient lighting, and sleek salon furniture, this view creates a high-end atmosphere where style meets functionality. The branded logo placement enhances the salon's identity and visual appeal." },
          { src: img8, alt: "Salon View 8", title: "rerender view 1", details: "An inviting salon environment that captures the essence of timeless elegance. This view blends soft lighting, clean architectural lines, and tasteful branding to create a refined space ideal for premium grooming services. The thoughtful layout ensures both aesthetic harmony and client comfort." },
          
          // Add all commercial images here
        ]
      },
      // Add more commercial projects as needed
    ]
  },
  residential: {
    title: "Residential Projects",
    description: "Beautiful living spaces crafted for comfort and style",
    projects: [
      {
        title: "Atul Shah Residence",
        images: [
          { src: img11, alt: "Living Room", title: "Modern Living Space", details: "Contemporary living area with natural lighting" },
          { src: img12, alt: "Dining Area", title: "Family Dining", details: "Elegant dining space for family gatherings" },
          { src: img13, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img14, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img15, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img16, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img17, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img18, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img19, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img20, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img21, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img22, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img23, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img24, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          { src: img25, alt: "Salon View 2", title: "Styling Area", details: "Contemporary styling chairs with mirror lighting" },
          // Add all residential images here
        ]
      },
      {
        title: "Bhavesh Sharma Residence",
        images: [
          { src: img26, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img27, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img28, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img29, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img30, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img31, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img32, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
        // Add more images
        ]
      },
      {
        title: "Naresh Jain Residence",
        images: [
          { src: img33, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img34, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img35, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img36, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img37, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img38, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img39, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img40, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img41, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img42, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img43, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img44, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img45, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img46, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img47, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img48, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },

        // Add more images
        ]
      },
      {
        title: "Rakesh Jain Residence",
        images: [
          { src: img49, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img50, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img51, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img52, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img53, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img54, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img55, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img56, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img57, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img58, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img59, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img60, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img61, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img62, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img63, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img64, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img65, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img66, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img67, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img68, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img69, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img70, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img71, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
           { src: img72, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
           { src: img73, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
            { src: img74, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
            { src: img75, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },

          {
        title: "Swapnil Patil Residence",
        images: [
          { src: img76, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img77, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
         { src: img78, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img79, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img80, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img81, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img82, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img83, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img84, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img85, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img86, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img87, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img88, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img89, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
          { src: img90, alt: "Living Room", title: "Cozy Lounge", details: "Warm living space with comfortable seating" },
         

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
    src: defaultOverlayImg,
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