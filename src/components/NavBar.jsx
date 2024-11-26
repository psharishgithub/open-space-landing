import { useState } from 'react';

const silverTextClass = "bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-center py-5 fixed w-full z-[100] backdrop-blur-[10px] bg-[#ffffff06] border-b border-b-[#ffffff30]">
      <div className="w-[80%] max-mobile:w-[90%] flex justify-between items-center">
        <div>
          <h1
            className="text-white text-2xl max-mobile:text-base font-semibold hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
            onClick={scrollToTop}
          >
            /open-space
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="hidden max-mobile:block text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="flex justify-center gap-12 text-lg items-center max-mobile:hidden">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">About</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#community">Team</NavLink>
          <a
            href="https://tally.so/r/wMrgW8"
            className="text-black font-medium px-5 py-2 rounded-lg bg-white hover:bg-transparent hover:text-white border border-white duration-200 whitespace-nowrap group relative overflow-hidden"
          >
            <span className="relative z-10">Project Support</span>
            <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="hidden max-mobile:block fixed top-[73px] left-0 right-0 bg-black backdrop-blur-xl border-b border-[#ffffff15] z-[90]">
            <nav className="flex flex-col items-center py-6 gap-6">
              <NavLink href="#home" onClick={toggleMenu}>Home</NavLink>
              <NavLink href="#features" onClick={toggleMenu}>About</NavLink>
              <NavLink href="#faq" onClick={toggleMenu}>FAQ</NavLink>
              <NavLink href="#community" onClick={toggleMenu}>Team</NavLink>
              <a
                href="https://tally.so/r/wMrgW8"
                className="text-black font-medium px-5 py-2 rounded-lg bg-white hover:bg-transparent hover:text-white border border-white duration-200 whitespace-nowrap group relative overflow-hidden"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Project Support</span>
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white font-medium hover:cursor-pointer hover:[text-shadow:_0_0_12px_#fff] duration-100"
  >
    {children}
  </a>
);

export default Navbar;
