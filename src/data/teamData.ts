// Import team member images
import alexImage from '../assets/team/pro.jpg';

export interface SocialLink {
  type: any;
  platform: 'linkedin' | 'twitter' | 'github' | 'instagram';
  url: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  verified: boolean;
  socialLinks: SocialLink[];
}

// Top Management Team
export const topManagement: TeamMember[] = [
  {
    name: "Alex Rodriguez",
    position: "Director / CEO",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/alex',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/alex',
          type: undefined
      }
    ]
  },
  {
    name: "Sarah Chen",
    position: "Managing Partner",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/sarah',
          type: undefined
      },
      {
          platform: 'github', url: 'https://github.com/sarah',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/sarah',
          type: undefined
      }
    ]
  }
];

// Technical Team
export const technicalTeam: TeamMember[] = [
  {
    name: "Michael Thompson",
    position: "Head of CTF",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/michael',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/michael',
          type: undefined
      },
      {
          platform: 'github', url: 'https://github.com/michael',
          type: undefined
      }
    ]
  },
  {
    name: "Emily Johnson",
    position: "Senior CTF Engineer",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/emily',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/emily',
          type: undefined
      },
      {
          platform: 'github', url: 'https://github.com/emily',
          type: undefined
      }
    ]
  },
  {
    name: "David Kim",
    position: "CTF Engineer",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'github', url: 'https://github.com/david',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/david',
          type: undefined
      },
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/david',
          type: undefined
      }
    ]
  },
  {
    name: "Lisa Wang",
    position: "Web Developer",
    image: alexImage,verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://linkedin.com/in/lisa',
          type: undefined
      },
      {
          platform: 'github', url: 'https://github.com/lisa',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/lisa',
          type: undefined
      }
    ]
  }
];