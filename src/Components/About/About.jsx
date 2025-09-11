import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

// Images
import Aboutimage from '../../assets/interior-design3.jpg';
import FounderBg from '../../assets/3droom.jpg';
import FoundationBg from '../../assets/interior-design-1.jpg';
import Founder1 from '../../assets/dhwanisanghavi.jpg';
import Founder2 from '../../assets/paragshelar.JPG';

// Footer
import Footer from '../../Footer/Footer';

// Videos
import video1 from '../../assets/reel/dhwanireel1.mp4';
import video2 from '../../assets/reel/dhwanireel2.mp4';
import video3 from '../../assets/reel/dhwanireel3.mp4';

const About = () => {
  // Video state
  const videos = [video1, video2, video3];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Change video on end
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    console.error('Failed to load image:', e.target.src);
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "Aaspire Design",
    "url": "https://www.aaspiredesign.com/about",
    "logo": "https://aaspiredesign.com/static/media/Aaspirepng.png",
    "description": "Aaspire Design is a premier interior design studio in Baner, Pune offering residential and commercial interior design services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "Your Postal Code",
      "addressCountry": "IN"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Dhwani Sanghavi",
        "jobTitle": "Principal Interior Designer"
      },
      {
        "@type": "Person",
        "name": "Parag Shelar",
        "jobTitle": "Principal Interior Designer"
      }
    ],
    "foundingDate": "2014",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10+"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.5600",
        "longitude": "73.7800"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <>
      <Helmet>
        <title>About Aaspire Design | Premier Interior Design Studio in Pune</title>
        <meta 
          name="description" 
          content="Learn about Aaspire Design, Pune's leading interior design studio founded in 2014. Meet our founders Dhwani Sanghavi and Parag Shelar and discover our design philosophy." 
        />
        <meta 
          name="keywords" 
          content="about Aaspire Design, interior designers Pune, about us, Dhwani Sanghavi, Parag Shelar, interior design studio Pune" 
        />
        <meta property="og:title" content="About Aaspire Design | Premier Interior Design Studio in Pune" />
        <meta 
          property="og:description" 
          content="Discover the story behind Aaspire Design, Pune's trusted interior design studio with over 100 satisfied clients since 2014." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aaspiredesign.com/about" />
        <meta property="og:image" content="https://aaspiredesign.com/static/media/dhwanisanghavi.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aaspire Design | Premier Interior Design Studio in Pune" />
        <meta 
          name="twitter:description" 
          content="Learn about Aaspire Design, Pune's leading interior design studio founded in 2014." 
        />
        <meta name="twitter:image" content="https://aaspiredesign.com/static/media/dhwanisanghavi.jpg" />
        favicon
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.aaspiredesign.com/about" />
      </Helmet>

      {/* === About Section === */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${Aboutimage})` }}
        id="about"
      >
        <div className="about-background-overlay"></div>

        <div className="about-left">
          {/* Video player */}
          <div className="video-wrapper">
            <video
              className="about-video"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              key={currentVideo}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Progress Dots */}
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
          <h2 className="about-heading1">
            Aaspire Design – Best Interior Design Studio in Baner, Pune
          </h2>
          <p className="about-text">
            Aaspire Design is a multidisciplinary design studio and consulting firm based in Baner, Pune, 
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

          {/* Founder 1 */}
          <div className="founder-profile">
            <div className="founder-img">
              <img 
                src={Founder1} 
                alt="Dhwani Sanghavi - Principal Interior Designer at Aaspire Design Pune" 
                onError={handleImageError}
              />
            </div>
            <div className="founder-info">
              <h3>Dhwani Sanghavi</h3>
              <h4>
                Principal Interior Designer – Aaspire Design<br />
                Creative Director – INSD Baner Pune <br/>
                Interior Designer | Specialist in French Concept Designs
              </h4>
              <p>
                With a decade of hands-on experience in the interior design industry, I have led and executed a wide range of residential and commercial projects that prioritize both aesthetic appeal and practical functionality...
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="founder-profile reverse">
            <div className="founder-img">
              <img 
                src={Founder2} 
                alt="Parag Shelar - Principal Interior Designer at Aaspire Design Pune" 
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
                Parag Shelar is a seasoned interior designer with over 10 years of experience in designing and delivering thoughtfully curated residential and commercial spaces...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Foundation Section === */}
      <section
        className="foundation-section"
        style={{ backgroundImage: `url(${FoundationBg})` }}
      >
        <div className="foundation-overlay"></div>
        <div className="foundation-content">
          <h2 className="foundation-heading">Our Foundation</h2>
          <p className="foundation-text">
            Founded in 2014, Aaspire Design was born from a shared vision of creating timeless and functional interiors that reflect elegance and personality. 
            What began as a two-member initiative has now grown into a thriving interior design firm, trusted by over 100 clients across Maharashtra.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
