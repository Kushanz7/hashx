import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import logoHashX from "../../assets/img/HashX_text.png";

const navItems = [
  { name: "USERS", href: "#users" },
  { name: "TEAMS", href: "#teams" },
  { name: "SCOREBOARD", href: "#scoreboard" },
  { name: "CHALLENGES", href: "#challenges" },
];

const NavBar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="relative backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-4 py-2 shadow-xl overflow-hidden h-14 md:h-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-full pointer-events-none" />

          <div className="relative flex items-center justify-between h-full px-2 md:px-4">
            {/* Logo */}
            <div className="flex items-center h-full">
              <img
                src={logoHashX}
                alt="HashX Logo"
                className="w-14 h-14 md:w-20 md:h-20 object-contain -my-2"
              />
            </div>

            {/* Nav Items - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-purple-400 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-white/90 hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-xs">
                <FaUser className="w-3 h-3" />
                <span className="font-medium">REGISTER</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-xs">
                <FaSignInAlt className="w-3 h-3" />
                <span className="font-medium">LOGIN</span>
              </button>
            </div>

            {/* Hamburger Button - Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-full bg-transparent border border-white/20 hover:border-purple-400 flex items-center justify-center transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span
                  className={clsx(
                    "block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out",
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                  )}
                />
                <span
                  className={clsx(
                    "block h-0.5 w-6 bg-white transition-opacity duration-300",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={clsx(
                    "block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out",
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-2 backdrop-blur-md bg-black/30 border border-purple-500/20 rounded-2xl p-4 shadow-lg shadow-purple-500/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl pointer-events-none" />
            <div className="relative space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => toggleMenu()}
                  className="block text-white/80 hover:text-purple-400 text-sm font-medium py-3 px-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-purple-500/20">
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-3 rounded-full bg-purple-600/20 border border-purple-500/30 text-white/90 text-xs font-medium hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                    <FaUser className="w-3 h-3 inline mr-1" />
                    REGISTER
                  </button>
                  <button className="flex-1 px-3 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-xs font-medium transform hover:scale-105 shadow-lg shadow-purple-500/25">
                    <FaSignInAlt className="w-3 h-3 inline mr-1" />
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
