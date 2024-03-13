"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CommentList from "./CommentList";
import ModalCreateComment from "./modalCreateComment";
import { useFetchGetNewsId } from "@/api/hooks/news/queries";

export default function NewsContent() {
	const path = usePathname();
	const newsId = path.split("/")[2];
	const {isLoading, isError, data} = useFetchGetNewsId(newsId)
	console.log(data)

	return (
		<section className="flex h-full mx-36 my-20 gap-28">
			<div className="flex flex-col gap-5 w-[65%]">
				<h1 className="font-bold text-3xl 2xl:text-4xl">{data?.title}</h1>
				<p className="text-justify">{data?.summary}</p>
				<div className="bg-zinc-100 rounded-lg flex flex-col py-2 px-5 w-[30%]">
					<p className="font-semibold">{data?.author}</p>
					<p className="text-xs">{data?.updateDate}</p>
				</div>
				<Image
					src={data?.imageUrl}
					alt={data?.id + "Img"}
					width={800}
					height={800}
					className="w-full max-h-[45rem]"
				/>
				<div className="w-full justify-center items-center">
				{
					data ? (<div dangerouslySetInnerHTML={{ __html: data.body }}></div>) : (<></>)
				}
				</div>
				<div className="w-full h-[2px] bg-[#D9D9D9] mt-20"></div>
				<h1 className="mt-4 font-semibold text-lg text-bdpurple">Comments</h1>
				{/* <CommentList data={data.comments}/> */}
				<ModalCreateComment/>
			</div>
			<aside className="w-full">
				<h1 className="text-bdpurple font-bold text-xl">Other News</h1>
			</aside>
		</section>
	);
}

