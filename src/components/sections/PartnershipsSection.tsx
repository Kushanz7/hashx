import { useEffect, useRef, useState } from 'react';

// Import all partner logos
import sliitLogo from '../../assets/slider/sliit.png';
import nsbmLogo from '../../assets/slider/nsbm.png';
import cicraLogo from '../../assets/slider/cicra.png';
import uokLogo from '../../assets/slider/uok.png';
import lnbLogo from '../../assets/slider/lnb.png';

// Import company logos (add these to your assets)
import orelLogo from '../../assets/slider/sliit.png';
import measaLogo from '../../assets/slider/sliit.png';
import avisLogo from '../../assets/slider/sliit.png';
import cybixLogo from '../../assets/slider/sliit.png';
import allianzLogo from '../../assets/slider/sliit.png';

// Import event logos (add these to your assets)
import infotellLogo from '../../assets/slider/sliit.png';
import cyberSecLogo from '../../assets/slider/sliit.png';
import ncscLogo from '../../assets/slider/sliit.png';
import isacaLogo from '../../assets/slider/sliit.png';

const partners = [
  { src: sliitLogo, alt: "SLIIT" },
  { src: nsbmLogo, alt: "NSBM" },
  { src: cicraLogo, alt: "CICRA" },
  { src: uokLogo, alt: "University of Kelaniya" },
  { src: lnbLogo, alt: "LNB" },
];

const companies = [
  { src: orelLogo, alt: "OREL Group" },
  { src: measaLogo, alt: "MEASA" },
  { src: avisLogo, alt: "AVIS INC" },
  { src: cybixLogo, alt: "CYBIX Consulting" },
  { src: allianzLogo, alt: "Allianz" },
];

const events = [
  { src: infotellLogo, alt: "InfoTel" },
  { src: cyberSecLogo, alt: "CyberSecurity Club" },
  { src: ncscLogo, alt: "NCSC" },
  { src: isacaLogo, alt: "ISACA" },
];

const SliderRow = ({ items, title, speed = 40, isVisible, reverse = false }: { 
  items: any[], 
  title: string, 
  speed?: number, 
  isVisible: boolean,
  reverse?: boolean 
}) => (
  <div className={`mb-12 transition-all duration-1000 ease-out ${
    isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  }`}>
    <h3 className="text-sm md:text-l font-bold text-purple-300 text-center mb-2 tracking-wider">
      {title}
    </h3>
    <div className="relative">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      {/* Slider container */}
      <div 
        className={`flex gap-16 items-center ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}
        style={{
          width: 'max-content',
          animation: `${reverse ? 'scrollReverse' : 'scroll'} ${speed}s linear infinite`
        }}
      >
        {/* First set of logos */}
        {items.map((item, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-32 h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div 
            key={`second-${index}`}
            className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-32 h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PartnershipsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`pt-10 bg-black/50 overflow-hidden transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`max-w-6xl mx-auto text-center mb-6 transition-all duration-1200 delay-200 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mb-4">
          OUR PARTNERSHIPS
        </h2>
        <p className="text-lg text-purple-300/80 font-medium">
          Collaborating with leading institutions, companies, and events
        </p>
      </div>

      <div className="space-y-2">
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SliderRow items={partners} title="INSTITUTIONS" speed={40} isVisible={isVisible} />
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SliderRow items={companies} title="COMPANIES" speed={45} isVisible={isVisible} reverse={true} />
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SliderRow items={events} title="EVENTS" speed={35} isVisible={isVisible} />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnershipsSection;