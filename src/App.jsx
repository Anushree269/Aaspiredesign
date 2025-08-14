import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import WhyChooseUs from './Components/Whychooseus/Whychooseus';
import FAQ from './Components/FAQ/FAQ';
import './index.css';

const App = () => {
  return (
    <div className="website-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;