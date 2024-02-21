import { ReactNode } from "react";

export interface IntroductionProps {
  bannerSection: BannerSection;
  features: Feature[];
  bannerIntroduction: BannerIntroduction;
  cardTeam: CardTeamMember[];
}

interface BannerSection {
  title: string;
  titleArea: string;
  subtitle: string;
  buttonTxt: string;
}

interface Feature {
  title: string;
  icon: ReactNode;
  content: string;
  orientation?: 'left' | 'right';
}

interface BannerIntroduction {
  link: string;
  text: string;
}

interface CardTeamMember {
  name: string;
  img: string;
  function: string;
}

