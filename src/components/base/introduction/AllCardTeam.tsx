import CardTeam from "./CardTeam";

export default function AllCardTeam() {
	return (
		<div>
			<div className="flex w-full justify-center items-center my-12">
				<h1 className="font-semibold text-4xl">Dev Team</h1>
			</div>
			<div className="grid grid-rows-2 grid-flow-col gap-6 w-full items-center justify-center">
				{teamData?.map((team) => (
					<CardTeam
						key={team.name}
						name={team.name}
						img={team.img}
						functionTeam={team.function}
					/>
				))}
			</div>
		</div>
	);
}


const teamData = [
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
]
