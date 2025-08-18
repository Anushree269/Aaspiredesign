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

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        <title>Our Projects | Aaspire Design - Interior Design Portfolio in Pune</title>
        <meta 
          name="description" 
          content="Explore our commercial and residential interior design projects in Pune. See our portfolio of salon designs, home interiors, and innovative space solutions." 
        />
        <meta name="keywords" content="interior design projects Pune, commercial interior design, residential interiors, salon design portfolio, Aaspire Design projects" />
        <meta property="og:title" content="Our Projects | Aaspire Design - Interior Design Portfolio in Pune" />
        <meta property="og:description" content="View our portfolio of commercial and residential interior design projects in Pune." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com/projects" />
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
                ? `Commercial interior design involves creating functional and visually appealing spaces for business purposes such as offices, restaurants, or retail stores. The focus is on branding, efficiency, and customer experience. 
                   Commercial interior design focuses on functional and brand-driven spaces like offices, restaurants, and stores, while residential interior design creates comfortable and personalized homes. At Aaspire Design, we blend interior, fashion, and graphic design to deliver creative solutions. Led by Dhwani Sanghavi, Director and mentor at INSD Baner, Pune, we craft spaces that are both stylish and purposeful.`
                : `Residential interior design focuses on creating comfortable, personal, and stylish living spaces such as homes or apartments. It emphasizes functionality, comfort, and individual preferences.
                   Commercial interior design focuses on functional and brand-driven spaces like offices, restaurants, and stores, while residential interior design creates comfortable and personalized homes. At Aaspire Design, we blend interior design to deliver creative solutions. Led by Dhwani Sanghavi, Director and mentor at INSD Baner, Pune, we craft spaces that are both stylish and purposeful.`}
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
                  alt={`${selectedTab === 'commercial' ? 'Commercial' : 'Residential'} Project ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox View */}
        {lightboxImg && (
          <div className="lightbox" onClick={() => setLightboxImg(null)}>
            <img src={lightboxImg} alt="Full View" className="lightbox-image" />
          </div>
        )}
      </section>

      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="loading-msg">Loading project details...</div>}>
        {selectedTab === 'commercial' ? <Commercial /> : <Residential />}
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Projects;
