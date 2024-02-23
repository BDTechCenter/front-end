import CardFeature from "./CardFeature";
import { BiNews } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";

export default function AllCardFeature() {
	return (
		<div>
			<div className="flex w-full justify-center items-center my-12">
				<h1 className="font-semibold text-4xl">Our Features</h1>
			</div>
			{features?.map((feature) => (
				<CardFeature
					key={feature.title}
					title={feature.title}
					content={feature.content}
					icon={feature.icon}
					//@ts-ignore
					orientation={feature.orientation}
				/>
			))}
		</div>
	);
}

const features = [
	{
		title: "Stay up to date: explore our latest innovation news!",
		icon: <BiNews />,
		content: "Our news page is your destination to discover the latest trends, technological advancements, and inspiring insights that are shaping the future."
	},
	{
		title: "Explore our projects to discover the latest trends!",
		icon: <FaProjectDiagram />,
		content: "On our projects page, you'll find a range of innovations in action, from the latest trends to technological advances that are defining the future. Explore to get inspired and stay up to date with the latest news.",
		orientation: "left"
	},
	{
		title: "Discover emerging technologies with our Tech Radar!",
		icon: <MdOutlineRadar />,
		content: "Explore our tech radar to prepare for the future and understand the development of technologies that will affect us. Stay ahead of trends and anticipate changes."
	}
]