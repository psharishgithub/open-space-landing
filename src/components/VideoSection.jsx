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
          <video 
            className="absolute top-0 left-0 w-full h-full"
            src="https://whjttsz70mf29sus.public.blob.vercel-storage.com/OpenSpace-FinalDraft%20(1)-vWiJLqit5J7PJjPbtQnRS19PlrKc4q.mp4"
            title="Initiative Explanation Video" 
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;