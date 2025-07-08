import React, { useEffect, useRef, useState } from 'react';

// Import the HashX logo
import hashxLogo from '../../assets/logo_hashx.png';

const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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
      className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          
          {/* Main title */}
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text mb-6 leading-tight">
            OUR AMAZING SPONSORS
          </h2>
        </div>

        {/* Main Sponsor Display */}
        <div className={`transition-all duration-1200 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Logo container */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  
                  {/* Logo */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <img 
                      src={hashxLogo} 
                      alt="HashX - Title Sponsor"
                      className="w-64 h-32 md:w-80 md:h-40 lg:w-96 lg:h-48 object-contain filter drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;