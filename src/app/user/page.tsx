import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";

import NewsUserList from "@/components/base/user/NewsUserList";
import Footer from "@/components/base/common/Footer";

export default function User() {
	return (
		<main className="w-full h-full">
			<NavBar variant="black" />
			<TopBanner
				text={dataUserPage.bannerNews}
				className="flex w-1/2 justify-end  items-center"
			></TopBanner>
			<section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<NewsUserList
					massageNotFound={dataUserPage.newsErrorNotFound}
					massageError={dataUserPage.newsError}
				/>
			</section>
			<Footer />
		</main>
	);
}

const dataUserPage = {
	bannerNews: <p>Manage your news and information</p>,
	newsErrorNotFound: {
		text: "You have no news, write one",
		img: "/noComment.gif",
	},
	newsError: {
		text: "Error News",
		img: "/allError.gif",
	},
};
