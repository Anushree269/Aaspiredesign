import React, { useRef, useEffect, useState } from 'react';
import './VideoPreloader.css';

const VideoPreloader = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    const handleCanPlay = () => {
      setIsReady(true);
      video.play().catch(error => {
        console.error("Autoplay failed:", error);
        // Fallback: Show play button that user can click
      });
    };

    const handleEnded = () => {
      onComplete?.();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime > 2) { // Show skip after 2 seconds
        setShowSkip(true);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete?.();
  };

  return (
    <div className="logo-loader">
      <video
        ref={videoRef}
        className={`intro-video ${isReady ? 'visible' : ''}`}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
      >
        <source src="/video/Aaspire-logo-Animation.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {!isReady && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {showSkip && (
        <button className="skip-button" onClick={handleSkip}>
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default VideoPreloader;