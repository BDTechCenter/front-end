import { News } from "@/api/types/news/type";

import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface NewsCardProps {
	data: News;
	orientation?: "dafault" | "relative";
}

export default function NewsCardHome({ data, orientation }: NewsCardProps) {
	const router = useRouter()
  const href = `/news/${data?.id}`

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

	return (
		<Link className="relative h-full w-full" href={href} onClick={handleClick}>
		<div
			
			id="componentNewsTest"
			style={{ backgroundImage: `url(${data?.imageUrl})`, backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover', }}
			className="relative h-full w-full cursor-pointer bg-center scale-100 transition-all duration-500 hover:scale-105"
		>
			<div className="absolute bottom-0 flex text-left justify-center flex-col w-full h-1/2 p-6 gap-1 2xl:gap-2 z-20">
				<h1
					className={`${orientation === "relative"
							? "text-2xl 2xl:text-3xl"
							: "text-lg 2xl:text-xl"
						} font-semibold text-white`}
				>
					{data?.title}
				</h1>
				<p
					className={`${orientation === "relative"
							? "text-lg 2xl:text-xl"
							: "text-sm 2xl:text-md"
						} text-white`}
				>
					{data?.updateDate}
				</p>
			</div>
			<div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent to-80% z-10 w-full h-full"></div>
		</div>
		</Link>
	);
}
