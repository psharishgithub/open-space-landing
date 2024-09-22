import SocialCard from "./SocialCard";
import HighlightText from "./HighlightText";

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

const people = [
  {
    category: "Founding Initiators",
    members: [
      { name: "Harish", image: harish, linkedin: "https://www.linkedin.com/in/harish-p-s-98a306249/", instagram: "https://www.instagram.com/literally_harish/" },
      { name: "Jeyanth", image: jeyanth, linkedin: "https://www.linkedin.com/in/jeyanth-v/", instagram: "https://www.instagram.com/jeyanth__jr/" },
      { name: "Rithesh", image: rithesh, linkedin: "https://www.linkedin.com/in/rithesh-s-05617b22a/", instagram: "https://www.instagram.com/raxen001/" },
      { name: "Swayam", image: swayam, linkedin: "https://www.linkedin.com/in/devswayam/", instagram: "https://www.instagram.com/swayam_ceo/" },
      { name: "Noumaan", image: noumaan, linkedin: "https://www.linkedin.com/in/noumaanahamed/", instagram: "https://www.instagram.com/ft.noumaan/" },
    ]
  },
  {
    category: "Representatives",
    members: [
      { name: "Manovikram - DevsRec", image: manovikram, linkedin: "https://www.linkedin.com/in/manovikramk/", instagram: "https://www.instagram.com/manov_ik/" },
      { name: "Hursun - DevsRec", image: hursun, linkedin: "https://www.linkedin.com/in/hursun-ss-377659233/", instagram: "https://www.instagram.com/__hursun_ss__" },
      { name: "Rakhul - Intellexa", image: rakhul, linkedin: "https://www.linkedin.com/in/rakhul/", instagram: "https://www.instagram.com/r.a.k.h.u.l/" },
      { name: "Vishal - IEEECIS", image: vishal, linkedin: "https://www.linkedin.com/in/vishaal-k-783894202/", instagram: "https://www.instagram.com/vishaal_19_fl/" },
      { name: "Vaideeshswaren - ELITE", image: vaideeshswaren, linkedin: "https://www.linkedin.com/in/vaideeshwaran-r-1b4375252/", instagram: "https://www.instagram.com/vaidesh._/" },
      { name: "Prajein - GDSC", image: prajein, linkedin: "https://www.linkedin.com/in/prajeinck/", instagram: "https://www.instagram.com/prajeinck/" },
    ]
  }
];

const SocialGrid = () => {
  return (
    <div id="community" className="pt-16">
      {people.map((category) => (
        <div key={category.category}>
          <div className="text-white font-semibold mt-20 max-mobile:mt-10 m-auto w-full flex items-center justify-center text-3xl">
            <HighlightText>
              <h2>{category.category}</h2>
            </HighlightText>
          </div>
          <div className="flex w-[90%] m-auto flex-wrap justify-center mt-5 max-laptop:w-[90%] max-mobile:w-[90%]">
            {category.members.map((member) => (
              <div key={member.name} className="mx-5 mb-5 max-mobile:mx-auto">
                <SocialCard
                  imageSrc={member.image}
                  title={member.name}
                  linkedin={member.linkedin}
                  insta={member.instagram}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialGrid;
