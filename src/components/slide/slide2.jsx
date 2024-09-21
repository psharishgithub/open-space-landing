import React from "react";

const Slide = ({ items }) => {
  return (
    <div className="flex flex-row animate-slider whitespace-nowrap">
      {items.map((item, index) => (
        <p className="m-1 mx-20 text-2xl font-Bold max-mobile:mx-8" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Slide;
