import React, { useState } from 'react';
import faqsimg from '../images/faqsimg.png';
import { CiBookmarkPlus } from "react-icons/ci";

const FAQs = () => {
  const questions = [
    "In elementum est a ante sodales iaculis.",
    "What is Ecobazar and how does it work?",
    "How can I track my order?",
    "Can I return products purchased from Ecobazar?",
    "What payment methods are accepted?"
  ];

  const answers = [
    "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.",
    "Ecobazar is an online marketplace where you can buy and sell products in an environmentally friendly way. We aim to reduce waste and promote sustainability.",
    "You can track your order through the 'My Orders' section in your account dashboard. You will also receive email updates about your order status.",
    "Yes, products purchased from Ecobazar can be returned within 30 days of delivery, provided they are in original condition.",
    "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);  // Toggle the answer visibility
  };

  return (
    <div className="faqs flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 pt-80 ">
      {/* Left Section */}
      <div className="faqs-left w-full lg:w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">Welcome, Let’s Talk About Our Ecobazar</h1>
        
        <div className="questions flex flex-col gap-6">
          {questions.map((question, index) => (
            <div key={index} className="question   flex flex-col p-4 border-b border-gray-200 hover:bg-gray-50 rounded-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
                <h2 className="text-xl lg:text-2xl text-gray-700">{question}</h2>
                <CiBookmarkPlus className={`text-xl text-gray-600 cursor-pointer hover:text-green-500 transition-all ease-in-out duration-300 ${expandedIndex === index ? " text-green-500" : ""}`} />
              </div>

              {/* Answer Section */}
              {expandedIndex === index && (
                <p className="mt-4 text-gray-600 text-lg">{answers[index]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Section */}
      <div className="faqs-right w-full lg:w-1/2 flex justify-center">
        <img src={faqsimg} alt="FAQs illustration" className="w-full lg:w-4/5 object-cover rounded-lg " />
      </div>
    </div>
  );
};

export default FAQs;
