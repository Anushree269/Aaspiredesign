import React, { useState, useEffect, useRef } from 'react';
import './MobileVideoPreloader.css';

const MobileVideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const [showPreloader, setShowPreloader] = useState(false);
  const videoRef = useRef(null);

  // Mobile-specific video source
  const mobileVideoSource = "/Videos/Aaspire-logo-Animation-Mobile.mp4";

  // Check if device is mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      setShowPreloader(true);
    }
  }, []);

  useEffect(() => {
    if (!showPreloader) return;

    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setAnimationState('zooming-out');
      setTimeout(() => {
        setAnimationState('complete');
        setShowPreloader(false);
      }, 300);
    };

    // Fallback timer - force end after 3 seconds
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 3000);

    const handleCanPlay = () => {
      clearTimeout(fallbackTimer);
    };

    const handleError = () => {
      handleVideoEnd();
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Try to play the video manually if autoplay fails
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Mobile video autoplay failed, using fallback timer');
      });
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, [showPreloader]);

  // Don't show preloader if not mobile or when complete
  if (!showPreloader || animationState === 'complete') {
    return children;
  }

  return (
    <>
      <div className={`mobile-preloader-container ${animationState}`}>
        <video
          ref={videoRef}
          className="mobile-preloader-video"
          autoPlay
          muted
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        >
          <source src={mobileVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {children}
    </>
  );
};

export default MobileVideoPreloader;
