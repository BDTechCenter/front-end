import { News } from "@/api/home/types"

interface NewsCardProps{
  data: News
  orientation?: "dafault" | "relative"
}

export default function NewsCardHome({data, orientation}: NewsCardProps) {
  return (
    <div style={{ backgroundImage: `url(${data?.img})` }} className="relative h-full w-full bg-cover bg-center">
      <div className="absolute bottom-0 flex text-left justify-center flex-col w-full h-1/2 p-6 gap-1 2xl:gap-2 z-20">
        <h1 className={`${orientation === "relative"? "text-2xl 2xl:text-3xl": "text-lg 2xl:text-xl"} font-semibold text-white`}>{data?.text}</h1>
        <p className={`${orientation === "relative"? "text-lg 2xl:text-xl": "text-sm 2xl:text-md"} text-white`}>{data?.data}</p>
      </div>
      <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent to-60% z-10 w-full h-full"></div>
    </div>
  )
}


