import React, { useState, useEffect, useRef } from 'react';
import './MobileVideoPreloader.css';

<<<<<<< HEAD
const VideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const [showPreloader, setShowPreloader] = useState(true);
  const videoRef = useRef(null);

  // Video source (works for all devices)
  const videoSource = "/Videos/Aaspire-logo-Animation-Mobile.mp4";
=======
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
>>>>>>> tailwind

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setAnimationState('zooming-out');
      setTimeout(() => {
        setAnimationState('complete');
<<<<<<< HEAD
        setShowPreloader(false);
      }, 300);
    };

    // Fallback timer - if video doesn’t play, auto hide
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 4000);

    const handleCanPlay = () => {
      clearTimeout(fallbackTimer);
    };

    const handleError = () => {
      handleVideoEnd();
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Try manual play if autoplay fails
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Autoplay failed, using fallback timer');
      });
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Don’t show if complete
  if (!showPreloader || animationState === 'complete') {
=======
      }, 400); // Mobile zoom-out animation duration
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  if (animationState === 'complete') {
>>>>>>> tailwind
    return children;
  }

  return (
<<<<<<< HEAD
    <>
      <div className={`preloader-container ${animationState}`}>
        <video
          ref={videoRef}
          className="preloader-video"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {children}
    </>
  );
};

export default VideoPreloader;
=======
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
          src={isMobile ? "Aaspire-logo-Animation-Mobile.mp4" : "Videos/Aaspire-logo-Animation-Mobile.mp4"} 
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
>>>>>>> tailwind
