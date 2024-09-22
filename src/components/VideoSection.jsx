import React from 'react';
import HighlightText from './HighlightText';

const VideoSection = () => {
  return (
    <div className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <HighlightText className="text-white text-4xl font-semibold text-center mb-8">
          Our Initiative
        </HighlightText>
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/kP2O71I3U3Q?autoplay=1&mute=1"
            title="Initiative Explanation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;