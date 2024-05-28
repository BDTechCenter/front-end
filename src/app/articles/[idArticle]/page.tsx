import Footer from "@/components/base/common/Footer";
import NavBar from "@/components/base/common/NavBar";
import ArticleContent from "@/components/base/article/ArticleContent";

export default function ArticleContentPage() {
	return (
		<main>
			<NavBar variant="white" />
			<section className="flex h-full my-20 gap-24 mx-14 max-sm:mx-5 lg:mx-24 xl:mx-36">
				<ArticleContent />
			</section>
			<Footer />
		</main>
	);
}
