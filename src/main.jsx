import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import VideoPreloader from './Components/VideoPreloader/VideoPreloader';
import MobileVideoPreloader from './Components/MobileVideoPreloader/MobileVideoPreloader';

const AppWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const PreloaderComponent = isMobile ? MobileVideoPreloader : VideoPreloader;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <PreloaderComponent>
          <App />
        </PreloaderComponent>
      </BrowserRouter>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);