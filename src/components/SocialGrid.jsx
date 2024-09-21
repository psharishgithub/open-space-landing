import SocialCard from "./SocialCard";
// ... (keep existing imports)

const SocialGrid = () => {
  return (
    <div id="community" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Initiators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <SocialCard
            imageSrc={harish}
            title="Harish"
            linkedin="https://www.linkedin.com/in/harish-p-s-98a306249/"
            insta="https://www.instagram.com/literally_harish/"
          />
          <SocialCard
            imageSrc={jeyanth}
            title="Jeyanth"
            linkedin="https://www.linkedin.com/in/jeyanth-v/"
            insta="https://www.instagram.com/jeyanth__jr/"
          />
          {/* Add other Initiators here */}
        </div>

        <h2 className="text-5xl font-bold text-center mt-32 mb-16 text-gray-800">Club Representatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <SocialCard
            imageSrc={manovikram}
            title="Manovikram"
            linkedin="https://www.linkedin.com/in/manovikramk/"
            insta="https://www.instagram.com/manov_ik/"
          />
          <SocialCard
            imageSrc={hursun}
            title="Hursun"
            linkedin="https://www.linkedin.com/in/hursun-ss-377659233/"
            insta="https://www.instagram.com/__hursun_ss__"
          />
          {/* Add other Club Representatives here */}
        </div>
      </div>
    </div>
  );
};

export default SocialGrid;