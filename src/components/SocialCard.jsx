import linkedin_svg from "../assets_c/LinkedIn.svg";
import insta_svg from "../assets_c/insta.svg";

const SocialCard = ({ imageSrc, title, linkedin, insta }) => {
  return (
    <div className="w-64 h-80 relative overflow-hidden group">
      <img
        className="w-full h-full object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <div className="flex space-x-4">
          <a href={linkedin} className="text-white hover:text-gray-300 transition-colors">
            <img src={linkedin_svg} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href={insta} className="text-white hover:text-gray-300 transition-colors">
            <img src={insta_svg} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
