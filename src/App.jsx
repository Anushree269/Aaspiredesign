import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Whychooseus from './Components/Whychooseus/Whychooseus';
import FAQ from './Components/FAQ/FAQ';
import VideoPreloader from './Components/VideoPreloader/VideoPreloader';
import './index.css';

const App = () => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [isCheckingStorage, setIsCheckingStorage] = useState(true);

  // Check if video was already shown
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation') === 'true';
    if (hasSeenAnimation) {
      setShowWebsite(true);
    }
    setIsCheckingStorage(false);
  }, []);

  const handleAnimationComplete = () => {
    setShowWebsite(true);
    localStorage.setItem('hasSeenAnimation', 'true');
  };

  // Don't render anything while checking localStorage
  if (isCheckingStorage) {
    return null;
  }

  if (!showWebsite) {
    return (
      <VideoPreloader 
        onComplete={handleAnimationComplete}
        videoSrc="/videos/Aaspire-logo-Animation.mp4"
        autoPlay={true}
        muted={true}
        showSkipButton={true}
      />
    );
  }

  return (
    <div className="website-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whychooseus" element={<Whychooseus />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
};

export default App;