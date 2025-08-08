import React, { useState, useEffect, useRef } from 'react';
import './Commercial.css';
import BgImage from '../../assets/gray-chair-living-room-with-copy-space.jpg';

// Import 8 different images
import Img1 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 1 with logo.jpg';
import Img2 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 2 with logo.jpg';
import Img3 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 3 with logo.jpg';
import Img4 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 4 with logo.jpg';
import Img5 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 5 with logo.jpg';
import Img6 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 6 with logo.jpg';
import Img7 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/final view of salon 7 with logo.jpg';
import Img8 from '../../assets/COMMERCIAL PROJECTS/SALOON PROJECT/rerender view 1.jpg';

const imageData = [
  { src: Img1, title: 'Design 1', alt: 'Commercial Design 1' },
  { src: Img2, title: 'Design 2', alt: 'Commercial Design 2' },
  { src: Img3, title: 'Design 3', alt: 'Commercial Design 3' },
  { src: Img4, title: 'Design 4', alt: 'Commercial Design 4' },
  { src: Img5, title: 'Design 5', alt: 'Commercial Design 5' },
  { src: Img6, title: 'Design 6', alt: 'Commercial Design 6' },
  { src: Img7, title: 'Design 7', alt: 'Commercial Design 7' },
  { src: Img8, title: 'Design 8', alt: 'Commercial Design 8' },
];

const Commercial = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`commercial-projects-section ${inView ? 'in-view' : ''}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h2 className="commercial-heading">Commercial Projects</h2>

      <div className="commercial-row">
        <div className="project-grid">
          {imageData.map((img, index) => (
            <div
              className="project-box fade-up"
              key={index}
              onClick={() => setSelectedImg(img.src)}
            >
              <img src={img.src} alt={img.alt} />
              <p className="image-title">{img.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <img src={selectedImg} alt="Enlarged View" />
            <button className="close-btn" onClick={() => setSelectedImg(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;
