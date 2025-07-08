import type { JSX } from 'react';
import { FaShieldAlt, FaUsers, FaBrain, FaHeart } from 'react-icons/fa';

export interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Security First",
    description: "We prioritize security in everything we do, from platform design to challenge creation."
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Community Driven",
    description: "Our platform thrives on community participation and collaborative learning."
  },
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: "Continuous Learning",
    description: "We believe in the power of continuous education and skill development."
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Passion for Excellence",
    description: "We're passionate about delivering the best cybersecurity education experience."
  }
];