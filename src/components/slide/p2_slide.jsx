import React from "react";
import Slide from "./slide2";

const Items = [
  "COMMUNITY",
  "FREEDOM",
  "OPEN-SOURCE",
  "COLLABORATION",
  "TRANSPARENCY",
];

function P2Slide() {
  return (
    <div
      className="flex flex-row overflow-hidden my-7 bg-white px-0 pt-[5px] pb-[7px] relative
       after:absolute after:h-full after:z-[2] after:w-[200px] after:right-0 after:bg-gradient-to-l after:from-white
       before:absolute before:h-full before:z-[2] before:w-[200px] before:left-0 before:bg-gradient-to-r before:from-white
        rotate-[-3deg] font-semibold [drop-shadow:_0_0_12px_rgb(0_0_0_/_100%)] drop-shadow-xl shadow-black
       "
    >
      <Slide items={Items} />
      <Slide items={Items} />
      <Slide items={Items} />
    </div>
  );
}

export default P2Slide;
