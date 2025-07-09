import { useEffect, useRef, useState } from 'react';
import  ProfileCard from '../components/ui/Card'; // Make sure this is the correct import
import { FaCode, FaShieldAlt, FaUsers, FaHeart } from 'react-icons/fa';
import { topManagement, technicalTeam } from '../data/teamData';
import { stats } from '../data/statsData';
import { values } from '../data/valuesData';

const About = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        
        // Only set to true, never back to false (keeps elements visible once animated)
        if (entry.isIntersecting) {
          if (target === heroRef.current) {
            setIsHeroVisible(true);
          } else if (target === missionRef.current) {
            setIsMissionVisible(true);
          } else if (target === teamRef.current) {
            setIsTeamVisible(true);
          } else if (target === contactRef.current) {
            setIsContactVisible(true);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative py-20 px-6 overflow-hidden transition-all duration-1000 ease-out ${
          isHeroVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text mt-19 mb-7 leading-tight px-4 transition-all duration-1200 delay-200 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              EMPOWERING THE
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                NEXT GENERATION
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 px-4 transition-all duration-1200 delay-400 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              HashX is Sri Lanka's premier cybersecurity platform, dedicated to advancing 
              <span className="text-purple-400 font-semibold"> security education</span> through 
              hands-on challenges and <span className="text-blue-400 font-semibold">collaborative learning</span>.
            </p>

            <div className={`flex flex-wrap justify-center gap-6 md:gap-8 px-4 transition-all duration-1200 delay-600 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef}
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          isMissionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1200 delay-200 ${
              isMissionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We evolve into an acknowledged technology laboratory for cyber defense, crafting advanced solutions to halt, neutralize, and eliminate organized enemy attacks.
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We enhance the security of the digital space by employing integrated systems for both cyber security and cyber defense, effectively countering sophisticated threats. This effort contributes to overall security enhancement for everyone involved.
              </p>
            </div>
            <div className={`relative transition-all duration-1200 delay-400 ${
              isMissionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-3 text-purple-400">
                        {value.icon}
                      </div>
                      <h3 className="text-white font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          isTeamVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
            isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <FaUsers className="text-purple-400" />
              <span className="text-purple-300 font-semibold tracking-wider">OUR TEAM</span>
              <FaHeart className="text-pink-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text mb-6 leading-tight">
              MEET THE
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                MASTERMINDS
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of security experts, developers, and educators are passionate about 
              <span className="text-purple-400 font-semibold"> sharing knowledge</span> and 
              <span className="text-blue-400 font-semibold"> building community</span>.
            </p>
          </div>

          {/* Top Management */}
          <div className={`mb-20 transition-all duration-1200 delay-400 ease-out ${
            isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Centered grid for leadership team */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {topManagement.map((member, index) => (
                  <div
                    key={index}
                    className={`flex justify-center transition-all duration-800 ease-out ${
                      isTeamVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 200}ms`,
                    }}
                  >
                    <ProfileCard
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      verified={member.verified}
                      socialLinks={member.socialLinks}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Team */}
          <div className={`transition-all duration-1200 delay-800 ease-out ${
            isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Centered grid for technical team */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
                {technicalTeam.map((member, index) => (
                  <div
                    key={index}
                    className={`flex justify-center transition-all duration-800 ease-out ${
                      isTeamVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: `${1000 + index * 100}ms`,
                    }}
                  >
                    <ProfileCard
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      verified={member.verified}
                      socialLinks={member.socialLinks}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20 transition-all duration-1000 ease-out ${
          isContactVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-6 transition-all duration-1200 delay-200 ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg text-gray-300 mb-8 leading-relaxed transition-all duration-1200 delay-400 ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Have questions about HashX or want to collaborate? We'd love to hear from you!
          </p>
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1200 delay-600 ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-300 font-bold rounded-xl hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 transform">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;