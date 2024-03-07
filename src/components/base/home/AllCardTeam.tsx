import CardTeam from "./CardTeam";

export default function AllCardTeam() {
	return (
		<section className="flex flex-col gap-12">
			<div className="flex w-full justify-center items-center">
				<h1 className="font-semibold text-2xl 2xl:text-3xl">Dev Team</h1>
			</div>
			<div className="grid grid-rows-2 grid-flow-col gap-6 w-full items-center justify-center">
				{teamData?.map((team) => (
					<CardTeam data={team} />
				))}
			</div>
		</section>
	);
}

const teamData = [
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
];
