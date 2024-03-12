import { News } from "../news/type"


export interface HomeData {
  bannerHome: BannerHome
  news: News[]
  buttonText: ButtonText
}

export interface BannerHome {
  text: JSX.Element
}



export interface ButtonText {
  text: string
}