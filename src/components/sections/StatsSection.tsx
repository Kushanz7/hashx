import { FaCalendarCheck, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";

const stats = [
  {
    icon: <FaCalendarCheck className="text-purple-400 text-3xl mb-3" />,
    number: "10+",
    label: "Events Sponsored",
  },
  {
    icon: <FaHandshake className="text-purple-400 text-3xl mb-3" />,
    number: "15+",
    label: "In Collaboration",
  },
  {
    icon: <FaChalkboardTeacher className="text-purple-400 text-3xl mb-3" />,
    number: "10+",
    label: "Sessions Hosted",
  },
];

const StatsSection = () => {
  return (
    <section className="py-10 px-4 bg-[#000000] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mb-4 tracking-tight">
          OUR IMPACT
        </h2>
        <p className="text-lg md:text-xl text-purple-300/80 mb-16 font-medium max-w-2xl mx-auto">
          Driving innovation and excellence in cybersecurity education
        </p>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-purple-500/40 bg-gradient-to-br from-white/10 to-purple-800/20 backdrop-blur-lg p-8 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-110 hover:rotate-1 text-white text-center overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Background Icon - Enlarged and Faded */}
              <div className="absolute top-4 left-4 z-0 opacity-0 group-hover:opacity-5 transform scale-100 group-hover:scale-300 transition-all duration-700 ease-out group-hover:translate-x-8 group-hover:-translate-y-4">
                <div className="text-purple-400 text-6xl">
                  {stat.icon}
                </div>
              </div>
              
              <div className="relative z-20">
                {/* Original Icon - Fades out and moves on hover */}
                <div className="transform transition-all duration-500 group-hover:opacity-0 group-hover:scale-150 group-hover:translate-y-2">
                  {stat.icon}
                </div>
                
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text group-hover:from-purple-300 group-hover:via-purple-100 group-hover:to-purple-300 transition-all duration-500">
                  #{stat.number}
                </div>
                
                <p className="text-base md:text-lg font-bold text-purple-200 group-hover:text-white transition-colors duration-500 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
