import { dataHomePage } from "@/data/home";
import CardFeature from "./CardFeature";


export default function AllCardFeature() {
	const features = dataHomePage.features
	return (
		<section>
			<div className="flex w-full justify-center items-center my-12">
				<h1 className="font-semibold text-2xl 2xl:text-3xl">Our Features</h1>
			</div>
			{features?.map((feature) => (
				<CardFeature
					data={feature}
					//@ts-ignore
					orientation={feature.orientation}
				/>
			))}
		</section>
	);
}


