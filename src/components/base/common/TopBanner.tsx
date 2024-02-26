import { BannerHome } from "@/api/home/types"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface BannerAllPageProps {
  img: boolean
  text: number
  children?: ReactNode
  className?: string | undefined
}

export default function BannerAllPage({ img, text,  children, className }: BannerAllPageProps) {
  return (
    <section className="flex h-80 bg-bddarkgray relative shadow-sm">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-[75%] justify-start">
          <div className=" bg-bdpurple h-16 w-16 2xl:h-20 2xl:w-20"></div>
        </div>
        <h1 className="relative w-[70%] font-semibold text-4xl 2xl:text-5xl text-white bottom-8 2xl:bottom-10">
          {bannerHome[text].text}
        </h1>
      </div>
      <div className={cn("w-1/2", className)}>
        {children}
      </div>
      {img && (
        <div className="absolute right-0 bottom-0">
          <Image alt="Squares Img" src="/topBannerImg.png" width={500} height={500} className="w-full"/>
        </div>
      )}
    </section>
  )
}

export const bannerHome = [
	{
		text: (
			<p>
				Follow the main <span className='text-bdlightpurple'>news</span> of the moment...
			</p>
		)
	},
]


