import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

// Image slider
import ImgOne from '../../assets/commercialprojects/salonproject/finalviewofsalon2withlogo.jpg';
import ImgTwo from '../../assets/commercialprojects/salonproject/finalviewofsalon3withlogo.jpg';
import ImgThree from '../../assets/commercialprojects/salonproject/finalviewofsalon5withlogo.jpg';
import Aboutimage from '../../assets/interior-design2.jpg';

// Section backgrounds
import FounderBg from '../../assets/3droom.jpg';
import FoundationBg from '../../assets/interior-design-1.jpg';

// Founder images - verify these files exist in your assets folder
import Founder1 from '../../assets/paragsir.jpg';
import Founder2 from '../../assets/dhwanimam.jpg';

import Footer from '../../Footer/Footer';

const imageSlides = [ImgOne, ImgTwo, ImgThree];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add error handling for images
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide broken image
    console.error('Failed to load image:', e.target.src);
  };

  return (
    <>
      <Helmet>
        <title>About Aaspire Design | Premier Interior Design Institute in Baner, Pune</title>
        <meta 
          name="description" 
          content="Learn about Aaspire Design - the leading interior and fashion design institute in Baner, Pune. Discover our founders, philosophy, and design services." 
        />
        <meta name="keywords" content="interior design institute Pune, fashion design course Baner, Aaspire Design about, design college Pune, best design institute" />
        <meta property="og:title" content="About Aaspire Design | Premier Interior Design Institute in Baner, Pune" />
        <meta property="og:description" content="Learn about Aaspire Design - the leading interior and fashion design institute in Baner, Pune." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com/about" />
      </Helmet>

      {/* === About Section === */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${Aboutimage})` }}
        id="about"
      >
        <div className="about-background-overlay"></div>

        <div className="about-left">
          <div className="image-wrapper">
            <div className="image-border"></div>
            <img
              src={imageSlides[currentImage]}
              alt="Interior Design"
              className="about-image-slide"
              onError={handleImageError}
            />
          </div>
        </div>

        <div className="about-right">
          <h2 className="about-heading1">Aaspire Design – Best Interior in Baner, Pune</h2>
          <p className="about-text">
            Aaspire Design is a multidisciplinary design institute and consulting firm based in Baner, Pune, 
            offering expert services in interior design. We specialize in creating modern, customized residential 
            and commercial spaces through turnkey solutions, smart space planning, and innovative design that reflects your personality and lifestyle.
            <br /><br />
            Our experienced team believes in understanding your needs deeply to deliver affordable, high-quality design
            solutions — on time and within budget.
          </p>
        </div>
      </section>

      {/* === Founder Section === */}
      <section
        className="founder-section"
        style={{ backgroundImage: `url(${FounderBg})` }}
      >
        <div className="founder-overlay"></div>
        <div className="founder-content">
          <h2 className="founder-heading">Meet Our Founders</h2>

          {/* Founder 1 - Image Left */}
          <div className="founder-profile">
            <div className="founder-img">
              <img 
                src={Founder1} 
                alt="Dhwani Sanghavi" 
                onError={handleImageError}
              />
            </div>
            <div className="founder-info">
              <h3>Dhwani Sanghavi</h3>
              <h4>
                Aaspire Design – Best Interior in Baner, Pune<br />
                Creative Director – Dhwani Sanghavi, INSD Baner Pune<br />
                Interior Designer | Specialist in French Concept Designs
              </h4>
              <p>
                With a decade of hands-on experience in the interior design industry, I have led and executed a wide range of residential and commercial projects that prioritize both aesthetic appeal and practical functionality. As the Principal Designer at <em>Aaspire Design</em>, I head a multidisciplinary team, managing end-to-end design processes—from concept development to final execution—while ensuring each space tells its own unique story.
                My professional journey includes designing luxury homes, retail spaces, offices, and lifestyle interiors, with a signature flair for <em>French-inspired concepts</em>. I bring deep attention to detail, client-centered collaboration, and a strong foundation in project management to every design I undertake.
                In parallel, I serve as the <em>Creative Director at INSD Baner Pune</em>, where I mentor the next generation of interior designers, bridging the gap between industry practice and academic learning.
              </p>
            </div>
          </div>

          {/* Founder 2 - Image Right */}
          <div className="founder-profile reverse">
            <div className="founder-img">
              <img 
                src={Founder2} 
                alt="Parag Shelar" 
                onError={handleImageError}
              />
            </div>
            <div className="founder-info">
              <h3>Parag Shelar</h3>
              <h4>
                Principal Interior Designer – Aaspire Design<br />
                Managing Director – INSD Baner Pune
              </h4>
              <p>
                Parag Shelar is a seasoned interior designer with over 10 years of experience in designing and delivering thoughtfully curated residential and commercial spaces. As the Principal Designer at Aaspire Design, he has led numerous projects from concept to completion, bringing spaces to life through a perfect blend of aesthetic vision, functional planning, and technical precision.
                With a deep-rooted understanding of materiality, site coordination, and execution processes, Parag is known for his ability to make designs not only look beautiful but also work efficiently in real-world contexts. His design approach is grounded in practicality, ensuring every detail—from finishes to furnishings—aligns with the client's lifestyle and the site's potential.
                Parag's passion for the field extends beyond practice into education. As the Managing Director at INSD Baner Pune, he is committed to shaping the future of design by imparting real-time industry knowledge to students. He mentors budding designers with a focus on on-site exposure, material understanding, and practical problem-solving—bridging the gap between academic learning and professional execution.
                Driven by innovation, discipline, and a hands-on approach, Parag Shelar continues to influence the design community by crafting spaces that are not only visually striking but also deeply meaningful and buildable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Company Foundation Section === */}
      <section
        className="foundation-section"
        style={{ backgroundImage: `url(${FoundationBg})` }}
      >
        <div className="foundation-overlay"></div>
        <div className="foundation-content">
          <h2 className="foundation-heading">Our Foundation</h2>
          <p className="foundation-text">
            Founded in 2018, Aaspire Design was born from a shared vision of creating timeless and functional interiors that reflect elegance and personality. What began as a two-member initiative has now grown into a thriving interior design firm, 
            trusted by over 1000 clients across Maharashtra.
            <br /><br />
            At Aaspire Design, we take pride in transforming both small and large spaces with equal passion and dedication. Our design philosophy is deeply rooted in creativity and functionality, spanning various fields like interior design, fashion design, and graphic design — ensuring a holistic and versatile approach to every project.
            <br /><br />
            Under the leadership of Dhwani Sanghavi, Director of Aaspire Design and a prominent mentor at INSD Baner, Pune, the firm has flourished into a hub of innovative thinking and client-focused execution.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;