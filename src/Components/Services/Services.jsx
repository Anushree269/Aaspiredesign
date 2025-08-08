import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import Service1 from '../../assets/TERRACE VIEW 1 WITHOUT LOGO.jpg';
import Service2 from '../../assets/final view of salon 2 with logo.jpg';
import Service3 from '../../assets/shopping-center-showroom-with-clothes-from-trendy-collections-retail-market-boutique-with-modern-fashionable-wear-empty-clothing-store-filled-with-new-trends-fashion-brands.jpg';
import Service4 from '../../assets/covered-lifestyle-garden-with-indoor-outdoor-living.jpg';

import ServicesBg from '../../assets/minimal-amazing-interior-design2.jpg'; // Background image

const services = [
  {
    image: Service1,
    title: 'RESIDENTIAL INTERIOR SERVICE & LANDSCAPIN',
    description: 'We offer highly Innovative & contemporary residential interior with elegant touch according to the taste & personality of clients to suit there needs & expectations . Lnadscaping is also intergral part of what we do',
  },
  {
    image: Service2,
    title:'COMMERCIAL INTERIOR SERVICE',
    description: 'Commercial interior design is about designing and developing unique and immersive interiors for commercial environments , from hotels, bars , restaurants , etc…We work closely with our clients and their brand team to build compe ling, relevant spaces',
  },
  {
    image: Service3,
    title: 'RETAIL INTERIOR SERVICES ACHIEVEMENT',
    description: 'Our retail interior designing services with the blend of artistic talent and creativity . The process of molding the experience of interior space andgiving it in a perfect shape is done by our group team of experienced architectures and designers',
  },
   {
    image: Service4,
    title: ' LANDSCAPIN INTERIOR SERVICES',
    description: 'Our landscaping interior services blend nature with design, creating harmonious indoor-outdoor environments. We focus on transforming spaces using green elements, natural textures, and creative layouts that enhance the aesthetic and functional value of your surroundings.',
  },
  {
    image: Service1,
    title: 'RESIDENTIAL INTERIOR SERVICE',
    description: 'We offer highly Innovative & contemporary residential interior with elegant touch according to the taste & personality of clients to suit there needs & expectations . Lnadscaping is also intergral part of what we do',
  },
  {
    image: Service2,
    title: 'COMMERCIAL INTERIOR SERVICE',
    description: 'Commercial interior design is about designing and developing unique and immersive interiors for commercial environments , from hotels, bars , restaurants , etc…We work closely with our clients and their brand team to build compe ling, relevant spaces',
  },
  {
    image: Service3,
    title: 'RETAIL INTERIOR SERVICES ACHIEVEMENT',
    description: 'Our retail interior designing services with the blend of artistic talent and creativity . The process of molding the experience of interior space andgiving it in a perfect shape is done by our group team of experienced architectures and designers',
  },
  {
    image: Service4,
    title: ' LANDSCAPIN INTERIOR SERVICES',
    description: 'Our landscaping interior services blend nature with design, creating harmonious indoor-outdoor environments. We focus on transforming spaces using green elements, natural textures, and creative layouts that enhance the aesthetic and functional value of your surroundings.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-section ${isInView ? 'in-view' : ''}`}
    >
      {/* ✅ Corrected: Inline style to set background */}
      <div
        className="blurred-bg"
        style={{
          backgroundImage: `url(${ServicesBg})`
        }}
      ></div>

      <h2 className="services-heading">Our Service</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="outer-circle">
              <div className="inner-circle">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
