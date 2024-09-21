import SocialCard from "./SocialCard";

import harish from "../assets_c/harish.webp";
import jeyanth from "../assets_c/jeyanth.webp";
import rithesh from "../assets_c/rithesh.webp";
import swayam from "../assets_c/swayam.webp";
import noumaan from "../assets_c/noumaan.webp";
import manovikram from "../assets_c/manovikram.webp";
import hursun from "../assets_c/hursun.png";
import rakhul from "../assets_c/rakhul.png";
import vishal from "../assets_c/vishal.jpg";
import vaideeshswaren from "../assets_c/vaideeshswaren.webp";
import prajein from "../assets_c/prajein.png";

const SocialGird = () => {
  return (
    <div id="community" className="pt-16"> {/* Reduced padding-top */}
      <div className="text-white font-semibold mt-20 max-mobile:mt-10 m-auto w-full flex items-center justify-center text-3xl">
        Initiators
      </div>

      <div className="flex w-[90%] m-auto flex-wrap justify-center mt-5 max-laptop:w-[90%] max-mobile:w-[90%]">
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={harish}
            title="Harish"
            linkedin="https://www.linkedin.com/in/harish-p-s-98a306249/"
            insta="https://www.instagram.com/literally_harish/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={jeyanth}
            title="Jeyanth"
            linkedin="https://www.linkedin.com/in/jeyanth-v/"
            insta="https://www.instagram.com/jeyanth__jr/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={rithesh}
            title="Rithesh"
            linkedin="https://www.linkedin.com/in/rithesh-s-05617b22a/"
            insta="https://www.instagram.com/raxen001/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={swayam}
            title="Swayam"
            linkedin="https://www.linkedin.com/in/devswayam/"
            insta="https://www.instagram.com/swayam_ceo/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={noumaan}
            title="Noumaan"
            linkedin="https://www.linkedin.com/in/noumaanahamed/"
            insta="https://www.instagram.com/ft.noumaan/"
          />
        </div>
      </div>

      <div className="text-white font-semibold mt-20 max-mobile:mt-10 m-auto w-full flex items-center justify-center text-3xl ">
        Club Representatives
      </div>

      <div className="flex w-[90%] m-auto flex-wrap justify-center mt-5 max-laptop:w-[90%] max-mobile:w-[90%]">
        <div className=" mx-5 mb-5 max-mobile:mx-auto">
          <SocialCard
            imageSrc={manovikram}
            title="Manovikram"
            linkedin="https://www.linkedin.com/in/manovikramk/"
            insta="https://www.instagram.com/manov_ik/"
          />
        </div>
        <div className=" mx-5 mb-5 max-mobile:mx-auto">
          <SocialCard
            imageSrc={hursun}
            title="Hursun"
            linkedin="https://www.linkedin.com/in/hursun-ss-377659233/"
            insta="https://www.instagram.com/__hursun_ss__"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={rakhul}
            title="Rakhul"
            linkedin="https://www.linkedin.com/in/rakhul/"
            insta="https://www.instagram.com/r.a.k.h.u.l/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={vishal}
            title="Vishal"
            linkedin="https://www.linkedin.com/in/vishaal-k-783894202/"
            insta="https://www.instagram.com/vishaal_19_fl/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={vaideeshswaren}
            title="Vaideeshswaren"
            linkedin="https://www.linkedin.com/in/vaideeshwaran-r-1b4375252/"
            insta="https://www.instagram.com/vaidesh._/"
          />
        </div>
        <div className=" mx-5 mb-5  max-mobile:mx-auto">
          <SocialCard
            imageSrc={prajein}
            title="Prajein"
            linkedin="https://www.linkedin.com/in/prajeinck/"
            insta="https://www.instagram.com/prajeinck/"
          />
        </div>
        
      </div>
    </div>
  );
};

export default SocialGird;
