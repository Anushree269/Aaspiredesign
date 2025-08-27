import React, { useState, useEffect, useRef } from 'react';
import './VideoPreloader.css';

const VideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const [showPreloader, setShowPreloader] = useState(false);
  const videoRef = useRef(null);

  // Desktop-specific video source
  const desktopVideoSource = "/Videos/Aaspire-logo-Animation.mp4";

  // Check if device is desktop
  useEffect(() => {
    const isDesktop = window.innerWidth > 768 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isDesktop) {
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

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [showPreloader]);

  // Don't show preloader if not desktop or when complete
  if (!showPreloader || animationState === 'complete') {
    return children;
  }

  return (
    <div className={`preloader-container ${animationState}`}>
      <video
        ref={videoRef}
        className="preloader-video"
        autoPlay
        muted
        playsInline
      >
        <source src={desktopVideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreloader;