import { BiNews } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";

export const dataHomePage={
  features:[
    {
      title: "Stay up to date: explore our latest innovation news!",
      icon: <BiNews/>,
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
  newsMainListAPIExample: [
		{
			img: "/imgNews2.png",
			text: "Innovation in the development area using Python",
			data: "February 19"
		},
		{
			img: "/imgNews.png",
			text: "Innovation in the development area using Python",
			data: "February 19"
		},
		{
			img: "/imgNews2.png",
			text: "Innovation in the development area using Python",
			data: "February 19"
		}
	],
  newsError: {
		text: "Top news not found",
		img: "/noNews.gif",
	},
  bannerInformationArea:{
    img: "/inn.gif",
	text: "At BD/INN our main objective is innovation, and the use of new emerging technologies in projects, we are willing to adapt to the new, and bring change and innovation to the rest of Bosch.",
  },
  cardTeam:[
    {
      name: "João Pedro",
      img: "/TeamPedrinho.png",
      function: "Front-End",
      url: "https://github.com/joaop-ribeiro",
    },
    {
      name: "Luís Felipe",
      img: "https://github.com/flepsz.png",
      function: "Front-End",
      url: "https://github.com/flepsz",
    },
    {
      name: "Luís Beck",
      img: "https://github.com/luishbeck.png",
      function: "UI/UX",
      url: "https://github.com/luishbeck",
    },
    {
      name: "Raphael Torres",
      img: "https://github.com/raphavtorres.png",
      function: "Back-End",
      url: "https://github.com/raphavtorres",
    },
  ]
}