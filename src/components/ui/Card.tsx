import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <div 
      className={`
        bg-gradient-to-br from-purple-800/30 to-indigo-800/30 
        p-6 rounded-xl border border-purple-500/30 
        ${hover ? 'hover:border-purple-400/50 transition-all duration-300 hover:scale-105' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  icon?: React.ReactNode;
  isManagement?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  icon,
  isManagement = false
}) => {
  return (
    <Card className={isManagement ? 'md:p-8' : ''}>
      <div className={`w-${isManagement ? '20' : '16'} h-${isManagement ? '20' : '16'} bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
        {icon || (
          <div className="text-white text-2xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h4 className={`${isManagement ? 'text-xl' : 'text-lg'} font-semibold text-center mb-2 text-purple-300`}>
        {name}
      </h4>
      <p className={`text-gray-300 text-center mb-${isManagement ? '4' : '3'}`}>
        {role}
      </p>
      <p className={`text-${isManagement ? 'sm' : 'xs'} text-gray-400 text-center`}>
        {description}
      </p>
    </Card>
  );
};

export default Card;