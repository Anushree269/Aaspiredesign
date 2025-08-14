import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import Service1 from '../../assets/TERRACE VIEW 1 WITHOUT LOGO.jpg';
import Service2 from '../../assets/final view of salon 2 with logo.jpg';
import Service3 from '../../assets/shopping-center-showroom-with-clothes-from-trendy-collections-retail-market-boutique-with-modern-fashionable-wear-empty-clothing-store-filled-with-new-trends-fashion-brands.jpg';
import Service4 from '../../assets/covered-lifestyle-garden-with-indoor-outdoor-living.jpg';
import ServicesBg from '../../assets/minimal-amazing-interior-design2.jpg';

// Services data array
const services = [
  {
    image: Service1,
    title: 'RESIDENTIAL INTERIOR SERVICE & LANDSCAPING',
    description:
      'We offer highly innovative & contemporary residential interiors with an elegant touch according to the taste & personality of clients. Landscaping is also an integral part of what we do.',
  },
  {
    image: Service2,
    title: 'COMMERCIAL INTERIOR SERVICE',
    description:
      'Commercial interior design is about creating unique and immersive interiors for commercial environments such as hotels, bars, and restaurants. We work closely with clients and brand teams to build compelling, relevant spaces.',
  },
  {
    image: Service3,
    title: 'RETAIL INTERIOR SERVICES',
    description:
      'Our retail interior designing services combine artistic talent and creativity. We shape interior spaces with the help of experienced architects and designers.',
  },
  {
    image: Service4,
    title: 'LANDSCAPING INTERIOR SERVICES',
    description:
      'Our landscaping interior services blend nature with design, creating harmonious indoor-outdoor environments with green elements and creative layouts.',
  },
  // Duplicates removed for clarity — if needed, you can repeat them here
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // ✅ Prevents multiple triggers
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-section ${isInView ? 'in-view' : ''}`}
    >
      {/* Background */}
      <div
        className="blurred-bg"
        style={{ backgroundImage: `url(${ServicesBg})` }}
      />

      <h2 className="services-heading">Our Services</h2>

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
