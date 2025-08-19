import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

import Service1 from "../../assets/residentialprojects/nareshjain/modifiedfinalview3withlogo.jpg";
import Service2 from "../../assets/residentialprojects/atulshah/finalviews11withlog.jpg";
import Service3 from "../../assets/shopping-center.jpg";
import Service4 from "../../assets/covered-lifestyle-garden.jpg";
import ServicesBg from "../../assets/interior-design2.jpg";

// ✅ Services Data
const services = [
  {
    image: Service1,
    title: "RESIDENTIAL INTERIOR SERVICE & LANDSCAPING",
    description:
      "We offer highly innovative & contemporary residential interiors with an elegant touch according to the taste & personality of clients. Landscaping is also an integral part of what we do.",
  },
  {
    image: Service2,
    title: "COMMERCIAL INTERIOR SERVICE",
    description:
      "Commercial interior design is about creating unique and immersive interiors for commercial environments such as hotels, bars, and restaurants. We work closely with clients and brand teams to build compelling, relevant spaces.",
  },
  {
    image: Service3,
    title: "RETAIL INTERIOR SERVICES",
    description:
      "Our retail interior designing services combine artistic talent and creativity to shape innovative, customer-centric interiors.",
  },
  {
    image: Service4,
    title: "LANDSCAPING INTERIOR SERVICES",
    description:
      "Our landscaping interior services blend nature with design, creating harmonious indoor-outdoor environments with green elements and creative layouts.",
  },
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
          observer.disconnect(); // ✅ Prevent multiple triggers
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
      className={`services-section ${isInView ? "in-view" : ""}`}
    >
      {/* ✅ Background Blur */}
      <div
        className="blurred-bg"
        style={{ backgroundImage: `url(${ServicesBg})` }}
      />

      {/* ✅ Heading */}
      <h2 className="services-heading">Our Services</h2>

      {/* ✅ Services List */}
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-item"
            key={index}
            style={{ transitionDelay: `${index * 0.2}s` }} // ✅ Staggered animation
          >
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
