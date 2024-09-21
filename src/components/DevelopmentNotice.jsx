import React, { useEffect, useRef, useState } from 'react';

const DevelopmentNotice = () => {
  const iframeRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const videoAspectRatio = 16 / 9; // Assuming 16:9 aspect ratio for the video

        let newScale;
        if (viewportWidth / viewportHeight > videoAspectRatio) {
          newScale = viewportWidth / (viewportHeight * videoAspectRatio);
        } else {
          newScale = viewportHeight * videoAspectRatio / viewportWidth;
        }

        setScale(Math.max(1, newScale));
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/TgnzF32-hLM?autoplay=1&mute=1&loop=1&playlist=TgnzF32-hLM&controls=0&showinfo=0&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"
          title="Background Video"
          style={{
            pointerEvents: 'none',
            width: `${100 * scale}%`,
            height: `${100 * scale}%`,
          }}
        ></iframe>
      </div>
      <div className="w-full max-w-4xl px-4 py-8 text-center relative z-10">
        <h2 className="text-3xl font-light mb-6">Welcome to Openspace</h2>
        <p className="text-xl mb-8 font-extralight">
          You're viewing our initiative website. Our main platform is currently under development, 
          crafting an extraordinary space for student collaboration and innovation.
        </p>
        <p className="text-lg mb-8 font-extralight">
          Explore below to get a glimpse of what's to come in REC's dedicated open-source hub.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            className="border border-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300"
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          >
            Discover More
          </button>
          <button 
            className="border border-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300"
            onClick={() => window.open('https://youtu.be/TgnzF32-hLM', '_blank')}
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;