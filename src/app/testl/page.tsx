import { introductionData } from "@/api/introduction/introduction";
import NavBar from "@/components/base/common/NavBar";
import BannerSection from "@/components/base/introduction/BannerSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TestLPage() {
	const bannerData = introductionData.bannerSection;
	return (
		<main className="w-full">
			<BannerSection data={bannerData} />
		</main>
	);
}
