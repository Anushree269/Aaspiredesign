import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Achievements.css';
import AchieveBg from '../../assets/achievement.jpg'; // Background image

const achievements = [
  'Innovating since 2015.',
  'Co-powered design show with Bharat 24.',
  'Top 10 Interior Designer of Pune 2025.',
  'Featured in Mrs. India platform.',
  'Featured in Ms. Pune platform.',
  'Featured in A & I.',
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      {/* ✅ SEO for Achievements Section */}
      <Helmet>
        <title>Aaspire Design | Achievements & Recognition</title>
        <meta
          name="description"
          content="Discover the achievements of Aaspire Design – recognized as one of the top 10 interior designers in Pune 2025, featured in national platforms, and co-powered design shows."
        />
        <meta
          name="keywords"
          content="Aaspire Design Achievements, top 10 interior designers Pune, interior design awards Pune, Bharat 24 design show, Mrs India platform"
        />
        <meta property="og:title" content="Aaspire Design | Achievements & Recognition" />
        <meta
          property="og:description"
          content="Aaspire Design has been innovating since 2015, earning recognition across India. Featured in leading design shows and platforms."
        />
        <meta property="og:image" content="https://www.aaspiredesign.com/favicon.png" />
        <meta property="og:url" content="https://www.aaspiredesign.com/achievements" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        ref={sectionRef}
        className={`achievement-section ${isVisible ? 'in-view' : ''}`}
      >
        {/* Background */}
        <div
          className="achievement-bg"
          style={{
            backgroundImage: `url(${AchieveBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Marquee */}
        <div className="achievement-marquee-wrapper">
          <div className="achievement-marquee">
            {[...achievements, ...achievements].map((item, index) => (
              <div className="achievement-card slide" key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
