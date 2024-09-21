import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Openspace?",
      answer: "Openspace is REC's dedicated open-source platform designed by students, for students. It's a hub for coding enthusiasts and passionate contributors to collaborate, innovate, and make an impact."
    },
    {
      question: "What can I do on Openspace?",
      answer: "On Openspace, you can discover and showcase projects, explore your peers' work, exchange ideas, and contribute to projects based on your interests and skills."
    },
    {
      question: "How does the leaderboard work?",
      answer: "Openspace features a dynamic leaderboard that ranks contributors based on their activity. Every contribution raises a participant's rank, encouraging continuous engagement."
    },
    {
      question: "Are there any learning opportunities?",
      answer: "Yes! Openspace offers workshops focusing on open-source development, the developer journey, and industry insights. These sessions cater to all skill levels, from beginners to experts."
    },
    {
      question: "How does Openspace support project development?",
      answer: "Openspace provides a joint workspace where completed projects can find their next steps. It offers necessary help to launch and advance initiatives, fostering innovation, collaboration, and growth."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg hover:bg-opacity-20 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-white">{item.question}</span>
                <span className="text-2xl text-white">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-b-xl shadow-lg mt-1">
                  <p className="text-white">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;