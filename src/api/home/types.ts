export interface HomeData{
  bannerHome: BannerHome
  news: News[]
  buttonText: ButtonText
}

export interface BannerHome {
  text: JSX.Element
}

export interface News {
  text: string,
  img: string,
  data: string
}

export interface ButtonText {
  text: string
}

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

export interface Feature {
  title: string;
  icon: JSX.Element;
  content: string;
  orientation?: string;
}

interface BannerIntroduction {
  link: string;
  text: string;
}

export interface CardTeamMember {
  name: string;
  img: string;
  functionTeam: string;
  url: string
}




