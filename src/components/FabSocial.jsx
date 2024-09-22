import github_svg from "../assets_c/github.svg";
import insta_svg from "../assets_c/insta.svg";

const FabSocial = () => {
  return (
    <div className=" z-50 fixed bottom-6 right-6">
      <div
        className="rounded-2xl p-1
        border backdrop-blur-[10px] border-r-[#c6323223] border-b-[#ffffff2b]
        border-solid border-[#ffffff79] border-r border-b
        bg-[#ffffff1a] flex my-4"
      >
        <a href="https://github.com/OpenSpace-REC">
          <img src={github_svg} alt="github" className="h-8 m-auto  " />
        </a>
      </div>
      <div
        className="rounded-2xl p-1
        border backdrop-blur-[10px] border-r-[#c6323223] border-b-[#ffffff2b]
        border-solid border-[#ffffff79] border-r border-b
        bg-[#ffffff1a] flex mt-4"
      >
        <a href="https://www.instagram.com/openspace_rec/">
          <img src={insta_svg} alt="insta" className="h-8 m-auto  " />
        </a>
      </div>
    </div>
  );
};

export default FabSocial;
