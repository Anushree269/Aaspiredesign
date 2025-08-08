import React, { useState } from 'react';
import './FAQ.css';
import FAQBg from '../../assets/minimal-amazing-interior-design2.jpg';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We provide residential and commercial interior design services including space planning, furniture layout, 3D visualization, turnkey execution, and design consultation.',
  },
  {
    question: 'How does the design process work?',
    answer: 'It helps track customer satisfaction and improve business outcomes with data-driven decisions.',
  },
  {
    question: ' How much do interior design services cost?',
    answer: 'Costs vary based on project size, scope, and materials. After an initial consultation, we provide a detailed quotation tailored to your needs and budget.',
  },
  {
    question: ' Do you handle turnkey interior projects?',
    answer: 'Yes, we offer complete turnkey solutions—from concept to execution—so you don’t have to worry about anything.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      {/* Blurred Background Image */}
      <div
        className="faq-bg"
        style={{ backgroundImage: `url(${FAQBg})` }}
      ></div>

      <div className="faq-wrapper">
        <div className="faq-left">
          <h2 className="faq-heading">FREQUENTLY ASK QUESTION</h2>
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

        <div className="faq-right">
          <h4>Any Question?</h4>
          <p>You can ask anything you want to know about Feedback.</p>
          <input type="text" placeholder="Enter Here" className="faq-input" />
          <button className="faq-button">Send</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
