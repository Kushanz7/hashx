import React from 'react';
import { sliderData, type SliderItem } from '../../data/sliderData';

interface InfiniteSliderProps {
  speed?: number;
  className?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ 
  speed = 30, 
  className = "" 
}) => {
  return (
    <div className={`w-full overflow-hidden py-0 h-6 relative ${className}`}>
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-purple-600 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-purple-600 to-transparent z-10"></div>
      
      <div 
        className="flex items-center gap-8 animate-scroll h-full"
        style={{
          width: 'max-content',
          animation: `scroll ${speed}s linear infinite`
        }}
      >
        {sliderData.concat(sliderData).map((item: SliderItem, idx: number) => (
          <div 
            key={`${item.id}-${idx}`}
            className="flex items-center gap-2 flex-shrink-0 hover:scale-105 transition-transform duration-300 h-full"
            >
            <div className="relative h-8 w-8 overflow-hidden flex items-center justify-center">
                <img 
                src={item.logo} 
                alt="HashX Logo" 
                className="w-8 h-8 object-contain"
                />
            </div>
            <span className="text-white font-semibold text-xs whitespace-nowrap">
                {item.text}
            </span>
            </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};


export default InfiniteSlider;