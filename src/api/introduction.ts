import { Feature } from "../../global"
import { CardTeam } from "../../global"

interface IntroductionData {
  bannerSection: {
    title: string
    titleArea: string
    subtitle: string
    buttonTxt: string
  }
	features: {
    features_news: Feature
    features_projects: Feature
		features_tech_radar: Feature
  }
	"banner-introduction":{
		link: string
		text: string
	}
	cardTeam: {
		"pedrinho": CardTeam
		"beck": CardTeam
		"luisinho": CardTeam
		"torres": CardTeam
	}
}



export const introductionData: IntroductionData = {
	"banner-section": {
		title: "Explore the latest news and innovations from ",
		titleArea: "BD/INN",
		subtitle:
			"Discover, share and connect. Be part of the conversation about the future of innovation",
		buttonTxt: "Start into Hub",
	},
  features: {
    features_news: {
      title: "Stay up to date: explore our latest innovation news!",
      content: "Our news page is your destination to discover the latest trends, technological advancements, and inspiring insights that are shaping the future."
    },
    features_projects: {
      title: "Explore our projects to discover the latest trends!",
      content: "On our projects page, you'll find a range of innovations in action, from the latest trends to technological advances that are defining the future. Explore to get inspired and stay up to date with the latest news."
    },
		features_tech_radar: {
      title: "Discover emerging technologies with our Tech Radar!",
      content: "Explore our tech radar to prepare for the future and understand the development of technologies that will affect us. Stay ahead of trends and anticipate changes."
    }
  },
	"banner-introduction":{
		link: "/inn.gif",
		text: "At BD/INN our main objective is innovation, and the use of new emerging technologies in projects, we are willing to adapt to the new, and bring change and innovation to the rest of Bosch."
	},
	cardTeam: {
		"pedrinho":{
			name: "João Pedro",
			img: "/TeamPedrinho.png",
			function: "Front-End"
		},
		"luisinho":{
			name: "Luís Felipe",
			img: "",
			function: "Front-End"
		},
		"beck":{
			name: "Luís Beck",
			img: "",
			function: "UI/UX"
		},
		"torres":{
			name: "Raphael Torres",
			img: "",
			function: "Back-End"
		},
  },
};
