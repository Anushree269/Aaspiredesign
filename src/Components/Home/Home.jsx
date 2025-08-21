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
import AboutBg from '../../assets/interior-design-1.jpg';

// Icons
import { FaUserGraduate, FaLaptopCode, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

// Components
import Project from '../Project/Project';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import Footer from '../../Footer/Footer';
import Services from '../Services/Services';
import Whychooseus from '../Whychooseus/Whychooseus';
import Achievements from '../Achievement/Achievements';
import Features from '../Features/Features';

const Home = () => {
  const counterRef = useRef(null);
  const formHeroRef = useRef();
  const formPopupRef = useRef();
  const videoRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [textVisible, setTextVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  // ✅ Use imported videos
  const videos = [
    { src: reel4, type: 'video/mp4' },
    { src: reel3, type: 'video/mp4' },
    { src: reel2, type: 'video/mp4' },
    { src: reel1, type: 'video/mp4' }
  ];

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
    setFormVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
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
        <title>Aaspire Design | Premier Interior Design Institute in Pune</title>
        <meta
          name="description"
          content="Aaspire Design offers professional interior design courses in Pune. Join our institute for expert training in fashion, graphic, and interior design with placement assistance."
        />
        <meta
          name="keywords"
          content="interior design course, fashion design institute, graphic design college, Pune design courses, Aaspire Design Baner"
        />
        <meta property="og:title" content="Aaspire Design | Premier Interior Design Institute in Pune" />
        <meta
          property="og:description"
          content="Professional interior design courses in Pune with placement assistance. Learn from industry experts at Aaspire Design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com" />
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
                  The Art of Extraordinary Spaces
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className={`inquiry-form ${formVisible ? 'active' : ''}`}>
          <h3>Inquire Now</h3>
          {renderForm(formHeroRef, sendEmail)}
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
              <video
                ref={videoRef}
                key={currentVideo}
                autoPlay
                muted
                playsInline
                className="about-reel"
              >
                <source src={videos[currentVideo].src} type={videos[currentVideo].type} />
                Your browser does not support the video tag.
              </video>

              <div className="video-progress">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot ${index === currentVideo ? 'active' : ''}`}
                    onClick={() => setCurrentVideo(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="about-right">
            <h2 className="about-heading1">About Aaspire Design</h2>
            <p className="about-text">
              Aaspire Design is a multidisciplinary design studio and consulting firm based in Baner, Pune,
              offering expert services in interior design. We specialize in creating modern, customized residential
              and commercial spaces through turnkey solutions, smart space planning, and innovative design that reflects
              your personality and lifestyle.
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
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
