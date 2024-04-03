import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { News } from "@/api/types/news/type";
import { useRouter } from "next/navigation";
import { limitString } from "@/lib/utils";

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
			className="flex h-20 gap-3 cursor-pointer group"
			onClick={handleClick}
		>
			<div className="h-full w-32 transition-all 2xl:w-[40%] group-hover:opacity-60">
				<Image
					src={img}
					alt={data.title + " Image"}
					width={500}
					height={500}
					onError={() => setImg("/newsNotFound.png")}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="flex w-full flex-col group-hover:opacity-60 transition-all">
				<h1 className="font-semibold text-sm 2xl:text-base">{limitString(data.title, 20)}</h1>
				<p className="text-xs">{limitString(data.author, 16)}</p>
				<p className="text-xs">{data.updateDate}</p>
			</div>
		</Link>
	);
}
