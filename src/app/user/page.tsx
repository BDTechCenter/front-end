import { useSearchParams } from "next/navigation";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";

import NewsUserList from "@/components/base/user/NewsUserList";
import Footer from "@/components/base/common/Footer";
import { LinkFilterNewsUser } from "@/components/base/user/LinkFilterNewsUser";
import { RoleGuard } from "@/components/base/common/RoleGuard";
import { appRoles } from "@/lib/sso/authConfig";
import { CommentsUserList } from "@/components/base/user/CommentsUserList";

export default function User() {
	return (
		<main className="w-full h-full">
			<NavBar variant="black" />
			<TopBanner
				text={dataUserPage.bannerNews}
				className="flex w-1/2 justify-end  items-center"
			>
				<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
					<div className="flex items-center justify-center w-1/2 h-full">
						<LinkFilterNewsUser />
					</div>
				</RoleGuard>
			</TopBanner>
			<section className="gap- 12 my-20 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
					<NewsUserList
						messageNotFound={dataUserPage.newsErrorNotFound}
						messageError={dataUserPage.newsError}
					/>
				</RoleGuard>
				<CommentsUserList
					messageNotFound={dataUserPage.commentsErrorNotFound}
					messageError={dataUserPage.commentsError}
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

	commentsErrorNotFound: {
		text: "No comments, write yours",
		img: "/noComment.gif",
	},
	commentsError: {
		text: "Error Comments",
		img: "/allError.gif",
	},
};
