import { introductionData } from "./introduction"

export async function getIntroData() {
  await new Promise(resolve => setTimeout(resolve, 1))

  return introductionData;
}