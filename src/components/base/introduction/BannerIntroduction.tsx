"use client"
import { introductionData } from "@/api/introduction"
import Image from "next/image";

export default function BannerIntroduction() {
  const data = introductionData["banner-introduction"]
  return (
    <div className="flex w-full gap-8 h-[30rem] bg-bdpurple my-24 flex-row items-center justify-center">
      <Image
        className="w-[15rem] h-[15rem] xl:w-[25rem] xl:h-[25rem]"
        src={data.link}
        alt="BD Squares"
        height={100}
        width={100}
      />
      <p className="w-[45%] text-[#FFF] text-xl lg:text-2xl text-left">
        {data.text}
      </p>
    </div>
  )
}