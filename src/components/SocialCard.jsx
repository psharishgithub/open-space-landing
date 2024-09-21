import { div } from "three/webgpu";
import github_svg from "../assets_c/github.svg";
import insta_svg from "../assets_c/insta.svg";
import linkedin_svg from "../assets_c/LinkedIn.svg";

const SocialCard = ({ imageSrc, title, linkedin, insta }) => {
  return (
    <div
      className="w-56  rounded-2xl max-mobile:w-40 max-laptop:w-48
        border backdrop-blur-[10px] border-r-[#c6323223] border-b-[#ffffff2b]
        border-solid border-[#ffffff79] border-r border-b
        bg-[#ffffff1a] flex flex-col items-start"
    >
      <img
        className="object-cover w-full h-full p-3 pb-0 rounded-3xl "
        src={imageSrc}
        alt="social card"
      />
      <div className="flex flex-row w-full justify-between">
        <div
          className=" pl-3 text-white text-lg font-normal 
        my-2 max-mobile:text-xs max-laptop:text-base "
        >
          {title}
        </div>
        <div className="flex flex-row text-white items-center pr-3">
          <a href={linkedin}>
            <img
              src={linkedin_svg}
              alt="linkedin"
              className="h-6 mr-3 max-mobile:h-4 max-laptop:h-5 "
            />
          </a>
          <a href={insta}>
            <img
              src={insta_svg}
              alt="insta"
              className="h-6 max-mobile:h-4 max-laptop:h-5 "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
