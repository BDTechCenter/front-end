import QuadrantGrid from "@/components/base/radar/quadrant-grid/QuadrantGrid";
import RadarGrid from "@/components/base/radar/radar-grid/RadarGrid";
import Footer from "@/components/base/common/Footer";
import TopBanner from "@/components/base/common/TopBanner";
import NavBar from "@/components/base/common/NavBar";
import { RoleGuard } from "@/components/base/common/RoleGuard";
import { appRoles } from "@/lib/sso/authConfig";

export default function TechRadarPage() {
	return (
		<main>
			<NavBar variant="black" />
			<TopBanner
				text="Tech Radar - BD/INN"
				className="flex w-1/2 justify-end items-center"
			>
				<RoleGuard roles={[appRoles.Admin, appRoles.BDUser]}>
						<div className="flex items-center justify-center w-1/2 h-full">
						</div>
					</RoleGuard>
			</TopBanner>
			<RadarGrid />
			<QuadrantGrid />
			<Footer />
		</main>
	);
}
