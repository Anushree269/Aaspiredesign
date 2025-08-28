import React, { useState, useEffect, useRef } from 'react';
import './MobileVideoPreloader.css';

const VideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const [showPreloader, setShowPreloader] = useState(true);
  const videoRef = useRef(null);

  // Video source (works for all devices)
  const videoSource = "/Videos/Aaspire-logo-Animation-Mobile.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setAnimationState('zooming-out');
      setTimeout(() => {
        setAnimationState('complete');
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
    return children;
  }

  return (
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
