import AllCardFeature from "@/components/base/home/AllCardFeature";
import AllCardTeam from "@/components/base/home/AllCardTeam";
import BannerIntroduction from "@/components/base/home/BannerInformateBD";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";
import Footer from "@/components/base/common/Footer";

export default function Home() {
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<TopBanner square text={dataHomePage.bannerHome} />
			<div className="flex my-16 h-[32rem] 2xl:h-[40rem] w-full items-center justify-center">
				<div className="w-[80%] 2xl:w-[70%] h-full gap-10">
					<MainNewsCardHome
						messageError={dataHomePage.newsError}
						messageNotFound={dataHomePage.newsErrorNotFound}
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
			Empowering <span className="text-bdlightpurple">Innovation</span> Welcome to Tech Center!
		</>
	),
	newsErrorNotFound: {
		text: "News not found",
		img: "/noNews.gif",
	},

	newsError: {
		text: "Error News",
		img: "/allError.gif",
	},
};
