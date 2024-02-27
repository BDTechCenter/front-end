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
    <Link href={href} className="flex flex-col gap-2 cursor-pointer group" onClick={handleClick}>
      <div className="overflow-hidden">
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
        <h1 className="font-bold text-lg 2xl:text-xl">{data.title}</h1>
      </div>
    </Link>
  )
}
