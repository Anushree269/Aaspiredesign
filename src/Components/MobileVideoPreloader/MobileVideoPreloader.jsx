import React, { useState, useEffect, useRef } from 'react';
import './MobileVideoPreloader.css';

const MobileVideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setAnimationState('zooming-out');
      setTimeout(() => {
        setAnimationState('complete');
      }, 400); // Mobile zoom-out animation duration
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  if (animationState === 'complete') {
    return children;
  }

  return (
    <div className={`mobile-preloader-container ${animationState}`}>
      <video
        ref={videoRef}
        className="mobile-preloader-video"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source 
          src={isMobile ? "/Videos/Aaspire-logo-Animation-Mobile.mp4" : "/Videos/Aaspire-logo-Animation.mp4"} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Mobile loading indicator */}
      {isMobile && (
        <div className="mobile-loading-indicator">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVideoPreloader;
