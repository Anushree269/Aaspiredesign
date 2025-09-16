import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Faq.css';
import FAQBg from '../../assets/interior-design2.jpg';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We provide residential and commercial interior design services including space planning, furniture layout, 3D visualization, turnkey execution, and design consultation.',
  },
  {
    question: 'How does the design process work?',
    answer: 'Our design process begins with consultation, followed by concept development, 3D visualization, material selection, and finally, on-site execution with regular updates.',
  },
  {
    question: 'How much do interior design services cost?',
    answer: 'Costs vary based on project size, scope, and materials. After an initial consultation, we provide a detailed quotation tailored to your needs and budget.',
  },
  {
    question: 'Do you handle turnkey interior projects?',
    answer: 'Yes, we offer complete turnkey solutions—from concept to execution—so you don’t have to worry about anything.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>FAQ | Aaspire Design - Interior Designers in Pune</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Aaspire Design’s interior design services in Pune, including pricing, process, and turnkey project details."
        />
        <link rel="canonical" href="https://www.aaspiredesign.com/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ | Aaspire Design - Interior Designers in Pune" />
        <meta
          property="og:description"
          content="Got questions about our interior design services? Explore FAQs about pricing, process, and our turnkey solutions."
        />
        <meta property="og:image" content="https://www.aaspiredesign.com/Newlogo.jpg" />
        <meta property="og:url" content="https://www.aaspiredesign.com/faq" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Aaspire Design - Interior Designers in Pune" />
        <meta
          name="twitter:description"
          content="Aaspire Design answers your frequently asked questions about our interior design services in Pune."
        />
        <meta name="twitter:image" content="https://www.aaspiredesign.com/Newlogo.jpg" />
      </Helmet>

      {/* ✅ Background */}
      <div
        className="faq-bg"
        style={{ backgroundImage: `url(${FAQBg})` }}
      ></div>

      <div className="faq-wrapper">
        {/* ✅ Left Side - FAQ List */}
        <div className="faq-left">
          <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div className="faq-box" key={index}>
                <div className="faq-question" onClick={() => toggleAnswer(index)}>
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right Side - Ask a Question */}
        <div className="faq-right">
          <h4>Any Questions?</h4>
          <p>You can ask anything you want to know about our interior design services.</p>
          <input type="text" placeholder="Enter your question" className="faq-input" />
          <button className="faq-button">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
