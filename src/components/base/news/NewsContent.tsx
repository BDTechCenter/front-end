"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CommentList from "./CommentList";
import ModalCreateComment from "./modalCreateComment";

export default function NewsContent() {
	const path = usePathname();
	const newsId = parseInt(path.split("/")[2]);

	const atualNews = newsData[newsId];

	return (
		<section className="flex h-full mx-44 my-20 gap-28">
			<div className="flex flex-col gap-5">
				<h1 className="font-bold text-3xl 2xl:text-4xl">{atualNews.title}</h1>
				<p className="text-justify">{atualNews.description}</p>
				<div className="bg-zinc-100 rounded-lg flex flex-col py-2 px-5 w-[30%]">
					<p className="font-semibold">{atualNews.author}</p>
					<p className="text-xs">{atualNews.date}</p>
				</div>
				<Image
					src={atualNews.img}
					alt={atualNews.id + "Img"}
					width={800}
					height={800}
					className="w-full max-h-[45rem]"
				/>
				{atualNews.content.map((cont) => (
          <p key={cont[0]} className="text-justify">{cont}</p>
        ))}
				<div className="w-full h-[2px] bg-[#D9D9D9] mt-20"></div>
				<h1 className="mt-4 font-semibold text-lg text-bdpurple">Comments</h1>
				<CommentList data={atualNews.comments}/>
				<ModalCreateComment/>
			</div>
			<aside className="w-full">
				<h1 className="text-bdpurple font-bold text-xl">Other News</h1>
			</aside>
		</section>
	);
}

