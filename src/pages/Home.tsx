import React from 'react';
import { Shield, Users, Trophy, Target, ArrowRight, Play } from 'lucide-react';
import { Card } from '../components/ui/Card';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Challenges",
      description: "Cutting-edge cybersecurity challenges designed to test your skills"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work with teams or compete individually in various CTF formats"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitions",
      description: "Regular competitions with prizes and recognition for top performers"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Skill Development",
      description: "Progressive difficulty levels to enhance your cybersecurity expertise"
    }
  ];

  const stats = [
    { number: "1000+", label: "Active Players" },
    { number: "50+", label: "Challenges" },
    { number: "15+", label: "Competitions" },
    { number: "10+", label: "Partners" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-black/50"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              #HASH|X
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Sri Lanka's #1 CTF Platform
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sharpen your cybersecurity skills with our cutting-edge challenges. 
              Join the elite community of ethical hackers and security professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('challenges')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Start Playing
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose #HASH|X?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most comprehensive CTF platform designed for both beginners and experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="text-center p-12 bg-gradient-to-r from-purple-800/40 to-indigo-800/40">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of cybersecurity enthusiasts and professionals who trust #HASH|X 
            for their skill development and competitive challenges.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get Started Today
          </button>
        </Card>
      </div>
    </div>
  );
};