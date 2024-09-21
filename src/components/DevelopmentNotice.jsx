import React from 'react';

const DevelopmentNotice = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-4xl px-4 py-8 text-center">
        <h2 className="text-3xl font-light mb-6">Welcome to Openspace</h2>
        <p className="text-xl mb-8 font-extralight">
          You're viewing our initiative website. Our main platform is currently under development, 
          crafting an extraordinary space for student collaboration and innovation.
        </p>
        <p className="text-lg mb-8 font-extralight">
          Explore below to get a glimpse of what's to come in REC's dedicated open-source hub.
        </p>
        <button 
          className="border border-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300"
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default DevelopmentNotice;