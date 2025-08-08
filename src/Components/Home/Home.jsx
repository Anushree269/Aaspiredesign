import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Frontimage from '../../assets/elegant-black-minimal-interior-design.jpg';
import Logo from '../../assets/Aaspire png.png';
import { Helmet } from "react-helmet";

// About Section Images
import ImgOne from '../../assets/final view of salon 6 with logo.jpg';
import ImgTwo from '../../assets/final view of salon 4 with logo.jpg';
import ImgThree from '../../assets/final view of salon 2 with logo.jpg';
import Aboutimage from '../../assets/minimal-amazing-interior-design2.jpg';


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
  const formRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const imageSlides = [ImgOne, ImgTwo, ImgThree];

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.count');
          counters.forEach(counter => {
            counter.innerText = '0';
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
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
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  // About image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show text and form instantly
  useEffect(() => {
    setTextVisible(true);
    setFormVisible(true);
  }, []);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Aaspire Design | Premier Interior Design Institute in Pune</title>
        <meta 
          name="description" 
          content="Aaspire Design offers professional interior design courses in Pune. Join our institute for expert training in fashion, graphic, and interior design with placement assistance." 
        />
        <meta name="keywords" content="interior design course, fashion design institute, graphic design college, Pune design courses, Aaspire Design Baner" />
        <meta property="og:title" content="Aaspire Design | Premier Interior Design Institute in Pune" />
        <meta property="og:description" content="Professional interior design courses in Pune with placement assistance. Learn from industry experts at Aaspire Design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com" />
      </Helmet>

      {/* Hero Section */}
      <div className="hero-section">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${Frontimage})` }}
        ></div>

        <div className="hero-content-container">
          {/* Left Side Text */}
          <div className="hero-left-content">
            <h1 className={`animated ${textVisible ? 'active' : ''}`}>Transform Your Design Career with Aaspire</h1>
            <p className={`animated ${textVisible ? 'active' : ''}`}>
              Premier institute for interior, fashion, and graphic design education in Pune. 
              Join 1200+ successful students who have launched their creative careers with us.
            </p>
          </div>

          {/* Right Side Logo */}
          <div className="hero-decor">
            <div className="triangle-top-left"></div>
            <div className="triangle-top-right"></div>
            <div className="rectangle-banner">
              <img src={Logo} alt="Aaspire Design Logo" className="hero-logo" />
              <div className="hero-tagline">
                <h2 className={`animated ${textVisible ? 'active' : ''}`}>Aaspire Design</h2>
                <p className={`animated ${textVisible ? 'active' : ''}`}>
                  Creating the Designers Who Create the Future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Top Right */}
        <div className={`inquiry-form ${formVisible ? 'active' : ''}`} ref={formRef}>
          <h3>Inquire Now</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select required defaultValue="">
              <option value="" disabled>Select Property Type</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="bungalow">Bungalow</option>
              <option value="above">Above</option>
              <option value="commercial">Commercial</option>
            </select>
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form reduced">
            <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
            <h3>Enquire Now</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <select required defaultValue="">
                <option value="" disabled>Select Property Type</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="bungalow">Bungalow</option>
                <option value="above">Above</option>
                <option value="commercial">Commercial</option>
              </select>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}

      {/* Counter Section */}
      <div className="counter-section" ref={counterRef}>
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
          <p>Project completed</p>
        </div>
        <div className="counter-box">
          <FaBriefcase className="counter-icon" />
          <h2 className="count" data-target="12"></h2>
          <p>Year Of Experience</p>
        </div>
      </div>

      {/* About Section */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${Aboutimage})` }}
        id="about"
      >
        <div className="about-background-overlay"></div>

        <div className="about-container">
          <div className="about-left">
            <img
              src={imageSlides[currentImage]}
              alt="Interior Design"
              className="about-image-slide"
            />
          </div>

          <div className="about-right">
            <h2 className="about-heading1">About Aspire Design</h2>
            <p className="about-text">
              Aaspire Design is a multidisciplinary design institute and consulting firm based in Baner, Pune, 
              offering expert services in interior design. We specialize in creating modern, customized residential 
              and commercial spaces through turnkey solutions, smart space planning, and innovative design that reflects your personality and lifestyle.
              <br /><br />
              Our experienced team believes in understanding your needs deeply to deliver affordable, high-quality design
              solutions — on time and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
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
