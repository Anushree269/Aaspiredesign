import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import WhyChooseUs from "./Components/Whychooseus/Whychooseus";
import Faq from "./Components/Faq/Faq";
import "./index.css";
import "./responsive.css";

const App = () => {
  return (
    <div className="website-container">
      {/* Global Meta Tags */}
      <Helmet>
        <title>Aaspire Design – Interior Design Studio in Baner, Pune</title>
        <meta
          name="description"
          content="Aaspire Design is a creative interior design studio in Baner, Pune. We specialize in residential and commercial projects with modern design solutions."
        />
        <link rel="canonical" href="https://www.aaspiredesign.com/" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>

      

      <Navbar />
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
