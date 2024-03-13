import NavBar from "@/components/base/common/NavBar";
import NewsContent from "@/components/base/news/NewsContent";

export default function NewsContentPage() {
	return (
		<main>
			<NavBar variant="white" />
			<NewsContent 
				massageError={dataNewsContentPage.newsError} 
				messageErrorContent={dataNewsContentPage.newsErrorNotFound}
			/>
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