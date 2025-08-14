import React, { useState, useEffect, useRef } from 'react';
import './VideoPreloader.css';

const VideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState('fullscreen');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setAnimationState('zooming-out');
      setTimeout(() => {
        setAnimationState('complete');
      }, 300); // Zoom-out animation duration
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
    <div className={`preloader-container ${animationState}`}>
      <video
        ref={videoRef}
        className="preloader-video"
        autoPlay
        muted
        playsInline
      >
        <source src="Videos/Aaspire-logo-Animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreloader;