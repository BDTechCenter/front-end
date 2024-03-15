"use client"
import NavBar from "@/components/base/common/NavBar";
import { usePathname } from "next/navigation";
import NewsContent from "@/components/base/news/NewsContent";
import { useFetchGetNewsId } from "@/api/hooks/news/queries";

export default function NewsContentPage() {
	const path = usePathname();
	const newsId = path.split("/")[2];
	const {isLoading, isError, data} = useFetchGetNewsId(newsId)

	return (
		<main>
			<NavBar variant="white" />
			<section className="flex h-full mx-36 my-20 gap-16">
				<NewsContent
					data={data}
					isLoading={isLoading}
					isError={isError}
					massageError={dataNewsContentPage.newsError} 
					messageErrorContent={dataNewsContentPage.newsErrorNotFound}
				/>
			</section>
		</main>
	);
}

export const dataNewsContentPage = {
	newsErrorNotFound:{
	text: "News not found",
	img: "/noNews.gif",
},

newsError:{
	text: "Error news not found",
	img: "/allError.gif",
},
};