'use client'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import { News } from '@/api/types/news/type';

interface NewsCardProps {
  data: News
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
          src={data.imageUrl}
          alt={data.title + " Image"}
          width={500}
          height={500}
          className="w-full h-full scale-100 transition-all duration-500 group-hover:scale-125"
        />
      </div>
      <div className="flex flex-col group-hover:opacity-60 transition-all">
        <p className="text-sm">{data.updateDate}</p>
        <h1 className="font-bold text-md 2xl:text-lg">{data.title}</h1>
      </div>
    </Link>
  )
}
