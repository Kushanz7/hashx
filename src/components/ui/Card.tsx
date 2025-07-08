import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { SocialLink } from "../../data/teamData";

// Update the ProfileCardProps interface to include 'description'
interface ProfileCardProps {
  name: string;
  position: string;
  image: string;
  verified?: boolean;
  socialLinks?: SocialLink[];
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  position,
  image,
  verified = false,
  socialLinks = [],
}) => {
  return (
    <div className="group relative w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content Container - Fixed to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-0">
        {/* Text content with backdrop blur */}
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-5 shadow-xl">
          {/* Name & Role */}
          <div className="mb-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
              {name}
              {verified && (
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </h2>
            <p className="text-sm text-purple-300 font-semibold mb-2">
              {position}
            </p>
          </div>

          {/* Social Icons */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              {socialLinks.map((link, idx) => {
                let Icon;
                let hoverColor;

                switch (link.platform) {
                  case "github":
                    Icon = FaGithub;
                    hoverColor = "hover:text-gray-300 hover:bg-gray-800";
                    break;
                  case "linkedin":
                    Icon = FaLinkedin;
                    hoverColor = "hover:text-blue-400 hover:bg-blue-600/20";
                    break;
                  case "twitter":
                    Icon = FaTwitter;
                    hoverColor = "hover:text-sky-400 hover:bg-sky-600/20";
                    break;
                  default:
                    return null;
                }

                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/10 border border-white/20 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverColor}`}
                    aria-label={`${name}'s ${link.platform}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProfileCard;