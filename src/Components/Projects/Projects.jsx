import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ Updated import
import './Projects.css';

import ProjectBg1 from '../../assets/interior-design-1.jpg';
import ProjectBg2 from '../../assets/interior-design2.jpg';
import ProjectBg3 from '../../assets/interior-design3.jpg';

import Commercial1 from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import Commercial2 from '../../assets/commercialprojects/salonproject/finalviewofsalon1withlogo.jpg';
import Residential1 from '../../assets/residentialprojects/bhavessharma/finalview1ofkitchenof2bhkwithlogo.jpg';
import Residential2 from '../../assets/residentialprojects/swapnilpatil/view2withlogo.jpg';

import Footer from '../../Footer/Footer';
// Lazy load components
const Commercial = lazy(() => import('../Commercial/Commercial'));
const Residential = lazy(() => import('../Residential/Residential'));

const commercialImages = [Commercial1, Commercial2];
const residentialImages = [Residential1, Residential2];

const Projects = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [selectedTab, setSelectedTab] = useState('commercial');
  const sectionRef = useRef(null);
  const bgImages = [ProjectBg1, ProjectBg2, ProjectBg3];

  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Interior Design Projects by Aaspire Design",
    "description": "Explore our portfolio of commercial and residential interior design projects in Pune",
    "url": "https://www.aaspiredesign.com/projects",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Salon Project",
          "description": "Commercial interior design for a salon in Pune",
          "image": Commercial1
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Salon Project Alternate View",
          "description": "Another view of our commercial salon interior design",
          "image": Commercial2
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "Bhavess Sharma Residential Project",
          "description": "2 BHK kitchen design for a residential project in Pune",
          "image": Residential1
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "Swapnil Patil Residential Project",
          "description": "Residential interior design project for a home in Pune",
          "image": Residential2
        }
      }
    ]
  };

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          sectionRef.current.classList.add('in-view');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getCurrentImages = () =>
    selectedTab === 'commercial' ? commercialImages : residentialImages;

  return (
    <>
      <Helmet>
        <title>Our Projects | Interior Design Portfolio - Aaspire Design Pune</title>
        <meta 
          name="description" 
          content="Explore Aaspire Design's portfolio of commercial and residential interior design projects in Pune. See our work for salons, homes, and more." 
        />
        <meta 
          name="keywords" 
          content="interior design projects Pune, commercial interior design, residential interior design, salon design Pune, home interior projects, Aaspire Design portfolio" 
        />
        <link rel="canonical" href="https://www.aaspiredesign.com/projects" />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content="Our Projects | Interior Design Portfolio - Aaspire Design Pune" />
        <meta property="og:description" content="Browse our interior design portfolio featuring commercial and residential projects in Pune. Transform your space with Aaspire Design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com/projects" />
        <meta property="og:image" content={Commercial1} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Interior Design Portfolio - Aaspire Design Pune" />
        <meta name="twitter:description" content="Explore Aaspire Design's portfolio of commercial and residential interior design projects in Pune." />
        <meta name="twitter:image" content={Commercial1} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section
        className="projects-section"
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
        ref={sectionRef}
      >
        <div className="projects-overlay">
          <div className="projects-left">
            <h1 className="projects-heading">Our Projects</h1>

            <div className="projects-tabs">
              <button
                className={selectedTab === 'commercial' ? 'active' : ''}
                onClick={() => setSelectedTab('commercial')}
              >
                Commercial
              </button>
              <button
                className={selectedTab === 'residential' ? 'active' : ''}
                onClick={() => setSelectedTab('residential')}
              >
                Residential
              </button>
            </div>

            <p className="project-description">
              {selectedTab === 'commercial'
                ? `Commercial interior design focuses on functional and brand-driven spaces like offices, salons, and retail stores. At Aaspire Design, we craft spaces that blend aesthetics and functionality, guided by Dhwani Sanghavi and Parag Shelar.`
                : `Residential interior design combines style, comfort, and personalization. We transform homes into havens with elegant materials, smart planning, and harmonious color palettes, ensuring every space reflects the residents' lifestyle.`}
            </p>
          </div>

          <div className="projects-grid">
            {getCurrentImages().map((img, index) => (
              <div
                className="project-box"
                key={index}
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img}
                  alt={`${selectedTab === 'commercial' ? 'Commercial' : 'Residential'} Project ${index + 1} by Aaspire Design Pune`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div className="lightbox" onClick={() => setLightboxImg(null)}>
            <img
              src={lightboxImg}
              alt="Full View Project by Aaspire Design"
              className="lightbox-image"
            />
          </div>
        )}
      </section>

      {/* Lazy-loaded project details */}
      <Suspense fallback={<div className="loading-msg">Loading project details...</div>}>
        {selectedTab === 'commercial' ? <Commercial /> : <Residential />}
      </Suspense>

      <Footer />
    </>
  );
};

export default Projects;