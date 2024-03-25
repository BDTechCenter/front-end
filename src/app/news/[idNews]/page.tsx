import NavBar from "@/components/base/common/NavBar";
import NewsContent from "@/components/base/news/NewsContent";

export default function NewsContentPage() {
	return (
		<main>
			<NavBar variant="white" />
			<section className="flex h-full mx-36 my-20 gap-14">
				<NewsContent
					massageError={dataNewsContentPage.newsError}
					massageCommentError={dataNewsContentPage.commentError}
					messageErrorContent={dataNewsContentPage.newsErrorNotFound}
				/>
			</section>
		</main>
	);
}

export const dataNewsContentPage = {
	newsErrorNotFound: {
		text: "not found",
		img: "/noNews.gif",
	},

	newsError: {
		text: "Error news not found",
		img: "/allError.gif",
	},

	commentError: {
		text: "No comments, write yours",
		img: "/noComment.gif",
	},
};
