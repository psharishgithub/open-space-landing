import React from 'react';
import HighlightText from './HighlightText';

const DevelopmentNotice = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black py-16">
      <div className="w-full max-w-[1200px] px-4 m-auto">
        <div className="flex justify-center mb-6">
          <HighlightText className="text-white text-3xl font-semibold text-center">
            Website Status
          </HighlightText>
        </div>
        <div className="bg-[#ffffff0d] p-6 rounded-lg border border-[#ffffff30]">
          <p className="text-center text-lg max-mobile:text-md text-white font-light">
            This website provides an overview of our initiative. We are currently developing a comprehensive main website that will include all functionalities. Stay tuned for updates and the launch of our full-featured platform!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;