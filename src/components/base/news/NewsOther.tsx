import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { News } from "@/api/types/news/type";
import { useRouter } from "next/navigation";

interface NewsOutherProps {
	data: News;
}

export default function NewsOther({ data }: NewsOutherProps) {
	const router = useRouter();
	const href = `/news/${data.id}`;
	const [img, setImg] = useState(data.imageUrl);
	const handleClick = (e: any) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<Link
			id="componentNewsTest"
			href={href}
			className="flex flex-rol h-20 items-center 2xl:h-32 gap-2 cursor-pointer group"
			onClick={handleClick}
		>
			<div className=" h-full min-w-[40%] max-w-[40%] overflow-hidden">
				<Image
					src={img}
					alt={data.title + " Image"}
					width={800}
					height={800}
					onError={() => setImg("/newsNotFound.png")}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col group-hover:opacity-60 transition-all">
				<p className="text-sm">{data.updateDate}</p>
				<h1 className="font-bold text-sm 2xl:text-lg">{data.title}</h1>
			</div>
		</Link>
	);
}
