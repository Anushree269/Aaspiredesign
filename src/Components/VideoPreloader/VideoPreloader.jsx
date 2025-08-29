import React, { useState, useEffect, useRef } from "react";
import "./VideoPreloader.css";

const VideoPreloader = ({ children }) => {
  const [animationState, setAnimationState] = useState("fullscreen");
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    // Check screen size and set mobile state
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Set video source immediately when screen size changes
      const videoSource = mobile
        ? "/Videos/Aaspire-logo-Animation-Mobile.mp4"
        : "/Videos/Aaspire-logo-Animation.mp4";
      setCurrentVideo(videoSource);

      console.log(
        `Screen width: ${window.innerWidth}px, Mobile: ${mobile}, Video: ${videoSource}`
      );
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentVideo) return;

    // Reset states when video source changes
    setIsLoading(true);
    setHasError(false);

    const handleVideoEnd = () => {
      console.log("Video ended, starting zoom out animation");
      setAnimationState("zooming-out");
      setTimeout(() => {
        setAnimationState("complete");
      }, 300);
    };

    const handleVideoLoad = () => {
      console.log("Video loaded successfully:", currentVideo);
      setIsLoading(false);
    };

    const handleVideoError = (error) => {
      console.error("Video error:", error, "for video:", currentVideo);
      setHasError(true);
      setIsLoading(false);

      // Try fallback to desktop video if mobile video fails
      if (isMobile && currentVideo.includes("Mobile")) {
        console.log("Trying fallback to desktop video");
        setCurrentVideo("/Videos/Aaspire-logo-Animation.mp4");
        setHasError(false);
        setIsLoading(true);
      } else {
        // Show content after error
        setTimeout(() => {
          setAnimationState("complete");
        }, 1000);
      }
    };

    const handleVideoLoadStart = () => {
      console.log("Video loading started:", currentVideo);
    };

    const handleVideoCanPlay = () => {
      console.log("Video can play:", currentVideo);
    };

    video.addEventListener("ended", handleVideoEnd);
    video.addEventListener("loadeddata", handleVideoLoad);
    video.addEventListener("error", handleVideoError);
    video.addEventListener("loadstart", handleVideoLoadStart);
    video.addEventListener("canplay", handleVideoCanPlay);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadeddata", handleVideoLoad);
      video.removeEventListener("error", handleVideoError);
      video.removeEventListener("loadstart", handleVideoLoadStart);
      video.removeEventListener("canplay", handleVideoCanPlay);
    };
  }, [currentVideo, isMobile]);

  if (animationState === "complete") {
    return children;
  }

  return (
    <div
      className={`preloader-container ${animationState} ${
        isLoading ? "loading" : ""
      } ${hasError ? "error" : ""}`}
      aria-hidden={animationState === "complete"}
    >
      {!hasError && currentVideo && (
        <video
          ref={videoRef}
          className="preloader-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          key={currentVideo} // Force re-render when video source changes
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPreloader;
