import Footer from "@/components/base/common/Footer";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import { RoleGuard } from "@/components/base/common/RoleGuard";
import { appRoles } from "@/lib/sso/authConfig";
import SearchBar from "@/components/base/article/SearchBar";
import ArticlesList from "@/components/base/article/ArticlesList";
import { FormAddArticle } from "@/components/base/article/FormAddArticle";

export default function ArticlesPage() {
	return (
		<main className="w-full h-full">
			<NavBar variant="black" />
			<div className="relative">
				<TopBanner
					text={dataArticlesPage.bannerArticles}
					className="flex w-1/2 justify-end  items-center"
				>
					<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
						<div className="flex items-center justify-center w-1/2 h-full">
							<FormAddArticle />
						</div>
					</RoleGuard>
				</TopBanner>
				<div className="w-[70%] mx-auto absolute left-0 right-0 -bottom-7 z-10">
					<SearchBar />
				</div>
			</div>
			<section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<ArticlesList
					messageError={dataArticlesPage.articlesError}
					messageNotFound={dataArticlesPage.articlesNotFound}
				/>
			</section>
			<Footer />
		</main>
	);
}

const dataArticlesPage = {
	bannerArticles: (
		<p>
			Follow the main <span className="text-bdlightpurple">articles</span> of
			the moment...
		</p>
	),
	articlesNotFound: {
		text: "No Articles found, start creating yours",
		img: "/noFilter.gif",
	},
	articlesError: {
		text: "Error when trying to load the articles",
		img: "/allError.gif",
	},
};
