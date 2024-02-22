export interface HomeData{
  bannerHome: BannerHome
  news: News[]
  buttonText: ButtonText
}

export interface BannerHome {
  text: string
}

export interface News {
  text: string,
  img: string,
  data: string
}

export interface ButtonText {
  text: string
}