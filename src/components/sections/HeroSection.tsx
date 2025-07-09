import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import logoHashX from "../../assets/logo_hashx.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="pt-3 bg-black-100 relative mb-8">
      {/* Blurred purple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-800/25 rounded-full blur-3xl"></div>
      </div>

      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-full w-full bg-black/50 bg-grid-black-100/[0.02] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/60
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="font-general flex justify-center relative mt-20 z-10">
        <div className="max-w-[95vw] md:max-w-4xl lg:max-w-6xl flex flex-col items-center justify-center">
         
          {/* HashX Logo */}
          <div className="relative mt-14 mb-4">
            <img 
              src={logoHashX} 
              alt="HashX Logo" 
              className="w-48 md:w-72 lg:w-78 h-auto object-contain"
            />
          </div>

          <TextGenerateEffect
            words="Sri Lanka's #1 CTF Platform"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-white mb-4 font-mono"
          />

          <p className="font-mono text-center md:tracking-wide mb-6 text-base md:text-xl lg:text-xl text-gray-300 max-w-5xl leading-relaxed px-4 font-tektur">
            HashX hosts Sri Lanka's #1 CTF platform, offering unparalleled hands-on experience with the latest cybersecurity challenges. We have successfully organized events for most major institutions, empowering participants with practical skills in a competitive environment. Join us to sharpen your expertise and stay ahead in the cybersecurity domain.
          </p>

        <a href="#ctf">
          <Button 
            title={"</> Play CTF"}
            containerClass="mt-2 mb-4 cursor-pointer bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          />
        </a>


        </div>
      </div>
    </div>
  );
};

export default Hero;