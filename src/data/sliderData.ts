import logoHashX from "../assets/img/HashX_text.png";

export interface SliderItem {
  id: number;
  logo: string;
  text: string;
  subtext?: string;
}

export const sliderData: SliderItem[] = [
  {
    id: 1,
    logo: logoHashX,
    text: "Sri Lanka's #1 CTF Platform",
    subtext: "Empowering Cybersecurity Excellence"
  },
  {
    id: 2,
    logo: logoHashX,
    text: "Sri Lanka's #1 CTF Platform",
    subtext: "Leading the Way in Cyber Defense"
  },
  {
    id: 3,
    logo: logoHashX,
    text: "Sri Lanka's #1 CTF Platform",
    subtext: "Join the Elite Cyber Warriors"
  },
  {
    id: 4,
    logo: logoHashX,
    text: "Sri Lanka's #1 CTF Platform",
    subtext: "Where Skills Meet Challenges"
  },
  {
    id: 5,
    logo: logoHashX,
    text: "Sri Lanka's #1 CTF Platform",
    subtext: "Shaping Future Cybersecurity Leaders"
  }
];