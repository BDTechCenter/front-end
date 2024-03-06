"use client";
import { CardTeamMember } from "@/api/home/types";
import Image from "next/image";

interface CardTeamProps {
	data: CardTeamMember
}

export default function CardTeam({ data }: CardTeamProps) {
	return (
		<div
			className="flex flex-row gap-4 w-96 h-32 border-[1px] rounded-md border-black/10 cursor-pointer"
			onClick={() => window.open(`${data?.url}`)}
		>
			<div className="h-full w-4 bg-bdpurple rounded-l-md"></div>
			<div className="flex w-full items-center justify-start gap-5">
				<Image
					className="w-20 h-2w-20 rounded-full"
					src={data?.img}
					alt="BD Squares"
					height={100}
					width={100}
				/>
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium">{data?.name}</h1>
					<h2 className="text-xl text-bdlightpurple font-medium">
						{data?.functionTeam}
					</h2>
				</div>
			</div>
		</div>
	);
}
