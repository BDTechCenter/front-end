import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { News } from "@/api/types/news/type";
import { useRouter } from "next/navigation";

interface NewsOtherProps {
	data: News;
}

export default function NewsOther({ data }: NewsOtherProps) {
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
			className="flex flex-rol h-20 items-center 2xl:h-24 gap-2 cursor-pointer group"
			onClick={handleClick}
		>
			<div className="h-20 min-w-[40%] max-w-[40%] transition-all group-hover:opacity-60">
				<Image
					src={img}
					alt={data.title + " Image"}
					width={500}
					height={500}
					onError={() => setImg("/newsNotFound.png")}
					className="h-full w-fit object-cover"
				/>
			</div>
			<div className="flex w-full flex-col group-hover:opacity-60 transition-all">
				<h1 className="font-semibold text-sm 2xl:text-base">{data.title}</h1>
				<p className="text-xs">{data.author}</p>
				<p className="text-xs">{data.updateDate}</p>
			</div>
		</Link>
	);
}
