import AllCardFeature from "@/components/base/home/AllCardFeature";
import AllCardTeam from "@/components/base/home/AllCardTeam";
import BannerIntroduction from "@/components/base/home/BannerInformateBD";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import Footer from "@/components/base/common/Footer";
import MainArticleCardHome from "@/components/base/home/MainArticleCardHome";

export default function Home() {
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<TopBanner square text={dataHomePage.bannerHome} />
			<div className="flex my-16 h-[32rem] 2xl:h-[40rem] w-full items-center justify-center">
				<div className="w-[80%] 2xl:w-[70%] h-full gap-10">
					<MainArticleCardHome
						messageError={dataHomePage.articleError}
						messageNotFound={dataHomePage.articleErrorNotFound}
					/>
				</div>
			</div>
			<AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
			<Footer />
		</main>
	);
}

const dataHomePage = {
	bannerHome: (
		<>
			Empowering <span className="text-bdlightpurple">Innovation</span> Welcome
			to Tech Center!
		</>
	),
	articleErrorNotFound: {
		text: "Article not found",
		img: "/noNews.gif",
	},

	articleError: {
		text: "Error Article",
		img: "/allError.gif",
	},
};
