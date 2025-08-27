import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import VideoPreloader from './Components/VideoPreloader/VideoPreloader';
import MobileVideoPreloader from './Components/MobileVideoPreloader/MobileVideoPreloader';
import "./index.css";  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MobileVideoPreloader>
          <VideoPreloader>
            <App />
          </VideoPreloader>
        </MobileVideoPreloader>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);