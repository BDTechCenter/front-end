import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsUserList from "@/components/base/user/NewsUserList";
import Footer from "@/components/base/common/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { LinkFilterNewsUser } from "@/components/base/user/LinkFilterNewsUser";
import { RoleGuard } from "@/components/base/common/RoleGuard";
import { FormAddNews } from "@/components/base/news/FormAddNews";
import { appRoles } from "@/lib/sso/authConfig";

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
			<section className="my-20 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
					<NewsUserList
						massageNotFound={dataUserPage.newsErrorNotFound}
						massageError={dataUserPage.newsError}
					/>
				</RoleGuard>
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
