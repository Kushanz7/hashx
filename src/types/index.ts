export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar?: string;
  isManagement?: boolean;
}

export interface CTFStats {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export interface NavItem {
  name: string;
  href: string;
}