import { dataHomePage } from "@/data/home";
import CardTeam from "./CardTeam";

export default function AllCardTeam() {
	const teamData = dataHomePage.cardTeam
	return (
		<section className="flex flex-col gap-12">
			<div className="flex w-full justify-center items-center">
				<h1 className="font-semibold text-2xl 2xl:text-3xl">Dev Team</h1>
			</div>
			<div className="grid grid-rows-2 grid-flow-col gap-6 w-full items-center justify-center">
				{teamData?.map((team) => (
					<CardTeam key={team.name} data={team} />
				))}
			</div>
		</section>
	);
}

