import { BiNews } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";
import CardFeature from "./CardFeature";

export default function AllCardFeature() {
	return (
		<section>
			<div className="flex w-full justify-center items-center my-12">
				<h1 className="font-semibold text-2xl 2xl:text-3xl">Our Features</h1>
			</div>
			<div className="max-md:flex max-md:flex-col max-md:gap-5">
			{features?.map((feature) => (
				<CardFeature
					key={feature.title}
					data={feature}
					//@ts-ignore
					orientation={feature.orientation}
				/>
			))}
			</div>
		</section>
	);
}

const features = [
	{
		title: "Stay up to date: explore our latest innovation articles!",
		icon: <BiNews />,
		img: "/features/news-feature.png",
		content:
			"Our articles page is your destination to discover the latest trends, technological advancements, and inspiring insights that are shaping the future.",
	},
	// {
	// 	title: "Explore our projects to discover the latest trends!",
	// 	icon: <FaProjectDiagram />,
	// 	img: ,
	// 	content:
	// 		"On our projects page, you'll find a range of innovations in action, from the latest trends to technological advances that are defining the future. Explore to get inspired and stay up to date with the latest articles.",
	// 	orientation: "left",
	// },
	{
		title: "Discover emerging technologies with our Tech Radar!",
		icon: <MdOutlineRadar />,
		img: "/features/radar-feature.png",
		orientation: "left",
		content:
			"Explore our tech radar to prepare for the future and understand the development of technologies that will affect us. Stay ahead of trends and anticipate changes.",
	},
];
