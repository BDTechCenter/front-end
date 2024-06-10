import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import Footer from "@/components/base/common/Footer";
import { RoleGuard } from "@/components/base/common/RoleGuard";
import { appRoles } from "@/lib/sso/authConfig";
import { TabsUser } from "@/components/base/user/TabsUser";
import { LinkFilterUser } from "@/components/base/user/LinkFilterUser";
import { StatusTitle } from "@/components/base/user/StatusTitle";

export default function User() {
	return (
		<main className="w-full h-full">
			<NavBar variant="black" />
			<TopBanner
				text={dataUserPage.bannerArticle}
				className="flex w-1/2 justify-end  items-center"
			>
				<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
					<div className="flex items-center justify-center w-1/2 h-full">
						<LinkFilterUser />
					</div>
				</RoleGuard>
			</TopBanner>
			<section className="flex flex-col gap-5 my-14 mx-20 h-full 2xl:mx-44">
				<StatusTitle />
				<TabsUser />
			</section>
			<Footer />
		</main>
	);
}

const dataUserPage = {
	bannerArticle: <p>Manage your articles and information</p>,
};
