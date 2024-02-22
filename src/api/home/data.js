import { homeData } from "./home";

export async function getHomeData() {
  await new Promise(resolve => setTimeout(resolve, 1))

  return homeData;
}