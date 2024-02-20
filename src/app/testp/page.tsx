import NavBar from "@/components/base/common/NavBar";
import ViewFeatures from "@/components/base/introduction/ViewFeatures";

export default function testPage() {
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<ViewFeatures variant="default"/>
			<ViewFeatures variant="left"/>
			<ViewFeatures variant="default"/>
		</main>
	);
}
