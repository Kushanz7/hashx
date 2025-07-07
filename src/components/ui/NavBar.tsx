import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
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
  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.3,
      });
    }
  }, [isNavVisible]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          {
            opacity: 0,
            y: -20,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          }
        );
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setIsMenuOpen(false),
      });
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <nav className="relative backdrop-blur-md bg-black/20 border border-purple-500/20 rounded-full px-4 py-2 shadow-lg shadow-purple-500/10 h-12 md:h-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-full"></div>

          <div className="relative flex items-center justify-between h-full px-2 md:px-4">
            {/* Logo */}
            <div className="flex items-center h-full overflow-hidden">
              <img
                src={logoHashX}
                alt="HashX Logo"
                className="w-14 h-14 md:w-20 md:h-20 object-contain -my-2"
                style={{ maxHeight: "100%" }}
              />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/80 hover:text-purple-400 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Auth Buttons - Desktop only */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-white/90 hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-xs">
                <FaUser className="w-3 h-3" />
                <span className="font-medium font">REGISTER</span>
              </button>

              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-xs">
                <FaSignInAlt className="w-3 h-3" />
                <span className="font-medium">LOGIN</span>
              </button>
            </div>

            {/* Animated Hamburger Menu Button - Mobile only */}
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

        {/* Animated Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-2 backdrop-blur-md bg-black/30 border border-purple-500/20 rounded-2xl p-4 shadow-lg shadow-purple-500/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
            <div className="relative space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
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
              <div className="pt-3 border-t border-purple-500/20 space-y-3">
                <button className="w-full px-4 py-3 rounded-full bg-purple-600/20 border border-purple-500/30 text-white/90 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <FaUser className="w-4 h-4 inline mr-2" />
                  REGISTER
                </button>
                <button className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  <FaSignInAlt className="w-4 h-4 inline mr-2" />
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
