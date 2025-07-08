import React from 'react';
import InfiniteSlider from '../ui/Slider';

const SliderSection: React.FC = () => {
  return (
    <section className="py-1 bg-purple-600 relative overflow-hidden">
      <div className="relative z-10">
        <InfiniteSlider 
          speed={25} 
          className="py-1"
        />
      </div>
    </section>
  );
};

export default SliderSection;