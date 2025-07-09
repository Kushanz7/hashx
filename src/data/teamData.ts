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
    name: "Avishka Bandara",
    position: "Director / CEO",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://www.linkedin.com/in/avishka-bandara/',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/',
          type: undefined
      },
    ]
  },
  {
    name: "Anuradha Ranaweera",
    position: "Managing Partner",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://www.linkedin.com/in/anuradha-ranaweera',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/',
          type: undefined
      },
    ]
  }
];

// Technical Team
export const technicalTeam: TeamMember[] = [
  {
    name: "Heshan Perera",
    position: "Head of CTF",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://lk.linkedin.com/in/heshan-perera-549273218',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/',
          type: undefined
      },
    ]
  },
  {
    name: "Sachintha Fernando",
    position: "Senior CTF Engineer",
    image: alexImage,
    verified: false,
    socialLinks: [
      {
          platform: 'linkedin', url: 'https://lk.linkedin.com/in/sachintha-fernando-95b290258',
          type: undefined
      },
      {
          platform: 'twitter', url: 'https://twitter.com/',
          type: undefined
      },
    ]
  },
  {
    name: "Sample Name1",
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
    name: "Sample Name2",
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