import CardTeam from "./CardTeam";

export default function AllCardTeam() {
	const getInitial = (name: string) => {
		const [firstName, lastName] = name.split(" ");
		const firstLetterOfFirstName = firstName.charAt(0);
		const firstLetterOfLastName = lastName.charAt(0);
		return firstLetterOfFirstName + firstLetterOfLastName;
	};

	return (
		<section className="flex flex-col gap-12">
			<div className="flex w-full justify-center items-center">
				<h1 className="font-semibold text-2xl 2xl:text-3xl">Dev Team</h1>
			</div>
			<div className=" mx-auto gap-6 max-w-[80%] w-full items-center justify-center sm:grid sm:grid-cols-1 xl:grid-cols-2 xl:max-w-[50%]">
				{teamData?.map((team) => {
					const fallback = getInitial(team.name);
					return <CardTeam key={team.url} data={team} fallback={fallback} />;
				})}
			</div>
		</section>
	);
}

const teamData = [
	{
		name: "João Pedro",
		img: "https://github.com/joaop-ribeiro.png",
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
