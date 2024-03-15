import NavBar from "@/components/base/common/NavBar";
import NewsContent from "@/components/base/news/NewsContent";

export default function NewsContentPage() {
	return (
		<main>
			<NavBar variant="white" />
			<section className="flex h-full mx-36 my-20 gap-16">
				<NewsContent 
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