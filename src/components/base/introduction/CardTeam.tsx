"use client"
import Image from "next/image"

interface CardTeamProps{
  name: string
  img: string
  functionTeam: string
  url?: string
}

export default function CardTeam({name, img, functionTeam, url}: CardTeamProps){
  return(
    <div className="flex flex-row gap-4 w-96 h-36 border-[1px] rounded-md border-black/10 cursor-pointer" onClick={() => window.open(`${url}`)}>
      <div className="h-full w-4 bg-bdpurple rounded-l-md"></div>
      <div className="flex w-full items-center justify-start gap-5">
        <Image
          className="w-28 h-28"
          src={img}
          alt="BD Squares"
          height={100}
          width={100}
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <h2 className="text-xl text-bdlightpurple font-semibold">{functionTeam}</h2>
        </div>
      </div>
    </div>
  )
}