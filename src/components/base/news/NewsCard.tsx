'use client'
 
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';

interface NewsCardProps {
  data: {
    id: number;
    img: string;
    date: string;
    title: string;
  }
}

export default function NewsCard({ data }: NewsCardProps) {
  const router = useRouter()
  const href = `/news/${data.id}`

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link id="componentNewsTestNewsPage" href={href} className="flex flex-col h-72 2xl:h-[28rem] gap-2 cursor-pointer group" onClick={handleClick}>
      <div className=" h-[60%] 2xl:h-[65%] overflow-hidden">
      <Image
        src={data.img}
        alt={data.title + " Image"}
        width={500}
        height={500}
        className="w-full h-full scale-125 transition-all duration-500 group-hover:scale-100"
      />
      </div>
      <div className="flex flex-col group-hover:opacity-60 transition-all">
        <p className="text-sm">{data.date}</p>
        <h1 className="font-bold text-md 2xl:text-lg">{data.title}</h1>
      </div>
    </Link>
  )
}
