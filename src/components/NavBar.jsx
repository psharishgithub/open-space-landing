const silverTextClass = "bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="flex justify-center py-5 fixed w-[100%] z-10 backdrop-blur-[10px] bg-[#ffffff06] border-b border-b-[#ffffff30]">
      <div className="w-[80%] max-mobile:w-[90%] flex justify-between items-center max">
        <div>
          <h1 
            className="text-white text-2xl max-mobile:text-base font-semibold hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            onClick={scrollToTop}
          >
            /open-space
          </h1>
        </div>
        <div className="flex justify-center gap-20 text-lg max-mobile:text-xs max-mobile:gap-8">
          <div className="">
            <a
              href="#home"
              className="text-white font-medium hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Home
            </a>
          </div>
          <div className="">
            <a
              href="#features"
              className="text-white font-medium hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              About
            </a>
          </div>
          <div className="">
            <a
              href="#faq"
              className="text-white font-medium hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              FAQ
            </a>
          </div>
          <div className="">
            <a
              href="#community"
              className="text-white font-medium hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Team
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
