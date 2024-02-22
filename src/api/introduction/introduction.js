import { BiNews } from "react-icons/bi"
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";

export const introductionData = {
	bannerSection: {
		title: "Explore the latest news and innovations from ",
		titleArea: "BD/INN",
		subtitle:
			"Discover, share and connect. Be part of the conversation about the future of innovation",
		buttonTxt: "Start into Hub",
	},
	features: [
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
	],
	bannerIntroduction: {
		link: "/inn.gif",
		text: "At BD/INN our main objective is innovation, and the use of new emerging technologies in projects, we are willing to adapt to the new, and bring change and innovation to the rest of Bosch."
	},
	cardTeam: [
		{
			name: "João Pedro",
			img: "/TeamPedrinho.png",
			function: "Front-End",
			url: "https://github.com/joaop-ribeiro"
		},
		{
			name: "Luís Felipe",
			img: "",
			function: "Front-End",
			url: "https://github.com/joaop-ribeiro"
		},
		{
			name: "Luís Beck",
			img: "",
			function: "UI/UX",
			url: "https://github.com/joaop-ribeiro"
		},
		{
			name: "Raphael Torres",
			img: "",
			function: "Back-End",
			url: "https://github.com/joaop-ribeiro"
		},
	],
};
