import type { JSX } from 'react';
import { FaUsers, FaBrain, FaRocket, FaShieldAlt } from 'react-icons/fa';

export interface Stat {
  number: string;
  label: string;
  icon: JSX.Element;
}

export const stats: Stat[] = [
  { number: "10K+", label: "Active Users", icon: <FaUsers /> },
  { number: "500+", label: "Challenges", icon: <FaBrain /> },
  { number: "50+", label: "Countries", icon: <FaRocket /> },
  { number: "99.9%", label: "Uptime", icon: <FaShieldAlt /> }
];