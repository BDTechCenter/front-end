import {introductionData} from "./introduction"

export async function getData() {
  await new Promise(resolve => setTimeout(resolve, 1))

  return introductionData;
}