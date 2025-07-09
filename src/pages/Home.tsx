import React from 'react';
import Hero from '../components/sections/HeroSection';
import SliderSection from '../components/sections/SliderSection';
import PartnershipsSection from '../components/sections/PartnershipsSection';
import SponsorsSection from '../components/sections/SponsorsSection';
import StatsSection from '../components/sections/StatsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <SliderSection />
      <PartnershipsSection />
      <SponsorsSection />
      <StatsSection />
    </div>
  );
};

export default Home;