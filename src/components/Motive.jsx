import HighlightText from './HighlightText';
import motive from "../assets_c/motive.png";

const Motive = () => {
  return (
    <div
      id="sec-2"
      className="w-full min-h-screen flex items-center justify-center bg-black py-20"
    >
      <div className="w-full max-w-[1200px] px-4 m-auto">
        <div className="flex justify-start max-mobile:justify-center mb-8">
          <HighlightText className="text-white text-4xl font-semibold text-center">
            Our Mission
          </HighlightText>
        </div>
        <div className="bg-[#ffffff0d] p-8 rounded-lg border border-[#ffffff30] flex flex-row max-mobile:flex-col items-center justify-between max-laptop:flex-col-reverse">
          <div className="w-full max-w-[50%] max-mobile:max-w-full max-laptop:max-w-full max-laptop:mb-8 flex flex-col items-start max-mobile:items-center">
            <p className="text-left text-xl max-mobile:text-md max-mobile:text-center max-laptop:text-center max-laptop:text-base text-white font-light">
              Our mission is to ignite students' passion to unite, innovate, and create meaningful impact. Openspace is committed to fostering a vibrant environment where collaboration sparks fresh ideas and contributions to open-source projects lead to transformative solutions. We fuel innovation, encourage continuous learning, and support collective development. Join us in turning visionary ideas into remarkable realities!
            </p>
          </div>
          <div className="w-full max-w-[50%] max-mobile:max-w-full max-laptop:max-w-full flex justify-end max-mobile:justify-center">
            <img
              className="h-96 max-mobile:h-56 object-contain"
              src={motive}
              alt="Motive illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motive;
