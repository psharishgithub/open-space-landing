import React from 'react';
import HighlightText from './HighlightText';

const VideoSection = () => {
  return (
    <div className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <HighlightText className="text-white text-4xl font-semibold text-center mb-8">
          Our Venture
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
        <div className="mt-4 text-white text-left">
          <p className="text-base">
            Video credits: {' '}
            <a href="https://www.instagram.com/adhhi.b?igsh=OXJiaDZ2OTIzOXZq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Adhithya
            </a>
            {' '} and {' '}
            <a href="https://www.instagram.com/__prasanth_nj__?igsh=MTF1cDgwZWRyY2FrYg==" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Prasanth
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;