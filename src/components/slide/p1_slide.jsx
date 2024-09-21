import React from "react";
import Slide from "./slide1";

const Items = [
  "COMMUNITY",
  "FREEDOM",
  "OPEN-SOURCE",
  "COLLABORATION",
  "TRANSPARENCY",
];

function P1Slide() {
  return (
    <div
      id="abt-us"
      className="flex flex-row overflow-hidden my-7 bg-white px-0 pt-[5px] pb-[7px] relative
       after:absolute after:h-full after:z-[2] after:w-[200px] after:right-0 after:bg-gradient-to-l after:from-white
       before:absolute before:h-full before:z-[2] before:w-[200px] before:left-0 before:bg-gradient-to-r before:from-white
        rotate-[2deg] -mb-24 font-semibold 
       "
    >
      <Slide items={Items} />
      <Slide items={Items} />
      <Slide items={Items} />
    </div>
  );
}

export default P1Slide;
