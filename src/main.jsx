import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import VideoPreloader from './Components/VideoPreloader/VideoPreloader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <VideoPreloader>
          <App />
        </VideoPreloader>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);