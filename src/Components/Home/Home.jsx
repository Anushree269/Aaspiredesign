import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

// Assets
import Frontimage from '../../assets/homeimage.jpg';
import Logo from '../../assets/Aaspirepng.png';
import emailjs from '@emailjs/browser';

// ✅ Import videos correctly from src/assets/reel
import reel1 from '../../assets/reel/dhwanireel1.mp4';
import reel2 from '../../assets/reel/dhwanireel2.mp4';
import reel3 from '../../assets/reel/dhwanireel3.mp4';
import reel4 from '../../assets/reel/dhwanireel4.mp4';

// About Section Background
import AboutBg from '../../assets/interior-design3.jpg';

// Icons
import { FaUserGraduate, FaLaptopCode, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

// Components
import Project from '../Project/Project';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import Footer from '../../Footer/Footer';
import Services from '../Services/Services';
import Whychooseus from '../Whychooseus/Whychooseus';
import Achievements from '../Achievement/Achievements';
import Features from '../Features/Features';

const Home = () => {
  const counterRef = useRef(null);
  const formPopupRef = useRef();
  const videoRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [textVisible, setTextVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  // ✅ Use imported videos
  const videos = [
    { src: reel4, type: 'video/mp4' },
    { src: reel3, type: 'video/mp4' },
    { src: reel2, type: 'video/mp4' },
    { src: reel1, type: 'video/mp4' }
  ];

  // Structured data for SEO (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "Aaspire Design",
    "url": "https://aaspiredesign.com",
    "logo": "https://aaspiredesign.com/Newlogo.jpg", // Update this path to your actual logo URL
    "description": "Aaspire Design is a interior designer studio in Pune, creating innovative, functional, and elegant spaces for residential and commercial projects.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Update with your actual address
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "Your Postal Code", // Update with your actual postal code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5204", // Update with your actual coordinates
      "longitude": "73.8567" // Update with your actual coordinates
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "telephone": "+91-YOUR-PHONE-NUMBER", // Update with your actual phone number
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.facebook.com/yourpage", // Update with your actual social media links
      "https://www.instagram.com/yourprofile",
      "https://www.linkedin.com/company/yourcompany"
    ]
  };

  const sendEmail = (e, formRef) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = 'service_6l4qxt4';
    const templateId = 'template_slwuxal';
    const publicKey = 'rcahUZlNH_RnuMycm';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        console.log('SUCCESS!');
        setSubmitStatus('success');
        formRef.current.reset();
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.count').forEach((counter) => {
            counter.innerText = '0';
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
              const count = +counter.innerText;
              const increment = target / 200;
              if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
          });
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  // Video auto-cycle
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    const playVideo = async () => {
      try {
        await videoElement.play();
      } catch (error) {
        console.log('Auto-play prevented:', error);
      }
    };

    playVideo();

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideo, videos.length]);

  useEffect(() => {
    setTextVisible(true);
  }, []);

 useEffect(() => {
  const interval = setInterval(() => {
    setShowPopup(true);
  }, 10000); // 10 seconds

  return () => clearInterval(interval);
}, []);
  const renderForm = (formRef, onSubmit) => (
    <form ref={formRef} onSubmit={(e) => onSubmit(e, formRef)} className="contact-form">
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Email Address" required />
      <input type="tel" name="user_phone" placeholder="Phone Number" required />
      <select name="property_type" required defaultValue="">
        <option value="" disabled>
          Select Property Type
        </option>
        <option value="1bhk">1 BHK</option>
        <option value="2bhk">2 BHK</option>
        <option value="3bhk">3 BHK</option>
        <option value="bungalow">Bungalow</option>
        <option value="above">Above</option>
        <option value="commercial">Commercial</option>
      </select>
      <textarea name="message" placeholder="Your Message" rows="4"></textarea>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
      {submitStatus === 'success' && <p className="form-success">Message sent successfully!</p>}
      {submitStatus === 'error' && <p className="form-error">Failed to send message. Please try again.</p>}
    </form>
  );

  return (
    <div className="home">
      <Helmet>
        <title>Aaspire Design | Best Interior Designer Studio in Baner,Pune</title>
        <meta
          name="description"
          content="Aaspire Design is a interior designer studio in Pune, creating innovative, functional, and elegant spaces for residential and commercial projects."
        />
        <meta
          name="keywords"
          content="interior designer studio Pune, Aaspire Design, home interiors Pune, commercial interior designers Pune, best interior studio Pune"
        />
        <meta property="og:title" content="Aaspire Design | Interior Designers Studio in Pune" />
        <meta
          property="og:description"
          content="Transform your spaces with Aaspire Design, Pune premier interior designers studio. We specialize in modern, luxurious, and functional interiors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com" />
        <meta property="og:image" content="https://aaspiredesign.com/Newlogo2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aaspire Design | Interior Designers Studio in Pune" />
        <meta
          name="twitter:description"
          content="Transform your spaces with Aaspire Design, Pune premier interior designers studio."
        />
        <meta name="twitter:image" content="https://aaspiredesign.com/Newlogo2.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.aaspiredesign.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="background-image" style={{ backgroundImage: `url(${Frontimage})` }}></div>
        <div className="hero-content-container">
          <div className="hero-decor">
            <div className="triangle-top-left"></div>
            <div className="rectangle-banner">
              <img src={Logo} alt="Aaspire Design Logo" className="hero-logo" />
              <div className="hero-tagline">
                <h1 className={`animated ${textVisible ? 'active' : ''}`}>
                  Aaspire Design - The Art of Extraordinary Spaces in Baner, Pune
                </h1>
              </div>
            </div>
          </div>
        </div>

      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form reduced">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>
            <h3>Enquire Now</h3>
            {renderForm(formPopupRef, sendEmail)}
          </div>
        </div>
      )}

      <section className="counter-section" ref={counterRef}>
        <div className="counter-box">
          <FaUserGraduate className="counter-icon" />
          <h2 className="count" data-target="60">0</h2>
          <p>Happy Customers</p>
        </div>
        <div className="counter-box">
          <FaLaptopCode className="counter-icon" />
          <h2 className="count" data-target="7">0</h2>
          <p>Live Projects</p>
        </div>
        <div className="counter-box">
          <FaChalkboardTeacher className="counter-icon" />
          <h2 className="count" data-target="65">0</h2>
          <p>Project Completed</p>
        </div>
        <div className="counter-box">
          <FaBriefcase className="counter-icon" />
          <h2 className="count" data-target="12">0</h2>
          <p>Years of Experience</p>
        </div>
      </section>

      {/* About Section with Background + Video */}
      <section
        className="about-section"
        id="about"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="about-container">
         <div className="about-left">
  <div className="video-container">
    {/* Video */}
    <video
      ref={videoRef}
      key={currentVideo}
      autoPlay
      muted
      playsInline
      className="about-reel"
    >
      <source src={videos[currentVideo].src} type={videos[currentVideo].type} />
    </video>

    {/* Left Arrow */}
    <button 
      className="nav-arrow left" 
      onClick={() => setCurrentVideo((prev) => (prev > 0 ? prev - 1 : videos.length - 1))}
    >
      ←
    </button>

    {/* Right Arrow */}
    <button 
      className="nav-arrow right" 
      onClick={() => setCurrentVideo((prev) => (prev < videos.length - 1 ? prev + 1 : 0))}
    >
      →
    </button>
  </div>
</div>


          <div className="about-right">
            <h2 className="about-heading1">Aaspire Design-Interior Designers in Baner,Pune</h2>
            <p className="about-text">
              Aaspire Design is a multidisciplinary design studio and consulting firm based in Baner, Pune,
              offering expert services in interior design. Led by Parag Shelar and Dhawani Shaghavi,We specialize in creating modern, customized residential
              and commercial spaces through turnkey solutions, smart space planning, and innovative design that reflects
              your personality and lifestyle in <strong>Baner,Pune</strong>.
              <br /><br />
              Our experienced team believes in understanding your needs deeply to deliver affordable, high-quality design
              solutions — on time and within budget.
            </p>
          </div>
        </div>
      </section>

      <div className="home-content">
        <Whychooseus />
        <Services />
        <Features />
        <Achievements />
        <Project />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;