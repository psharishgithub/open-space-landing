import React, { useState, useEffect } from 'react';

const DevelopmentNotice = () => {
  const [showOpenSpace, setShowOpenSpace] = useState(false);
  const [showBlackSplash, setShowBlackSplash] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowOpenSpace(true), 500);
    setTimeout(() => setShowBlackSplash(true), 1500);
    setTimeout(() => setShowPlatform(true), 2500);
    setTimeout(() => setShowButton(true), 3000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden z-40">
      <div className={`text-4xl sm:text-5xl md:text-6xl font-bold transition-all duration-1000 ${showOpenSpace ? 'opacity-100' : 'opacity-0'} ${showBlackSplash ? 'text-white' : 'text-black'} z-[45] text-center`}>
        /Open-Space
      </div>
      <div className={`absolute inset-0 bg-black transition-transform duration-1000 ease-in-out ${showBlackSplash ? 'translate-y-0' : 'translate-y-full'} z-[42]`} />
      <div className={`text-white text-xl sm:text-2xl mt-6 sm:mt-8 z-[45] transition-opacity duration-1000 ${showPlatform ? 'opacity-100' : 'opacity-0'} text-center`}>
        The Platform is Under Development
      </div>
      <button 
        className={`mt-6 sm:mt-8 border border-white py-2 px-4 sm:px-6 rounded-full text-base sm:text-lg text-white hover:bg-white hover:text-black transition-all duration-1000 z-[45] ${showButton ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
      >
        Know More
      </button>
    </div>
  );
};

export default DevelopmentNotice;