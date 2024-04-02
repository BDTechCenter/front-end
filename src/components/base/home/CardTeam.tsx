"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardTeamProps {
	data: {
		name: string;
		img: string;
		function: string;
		url: string;
	};
	fallback: string;
}

export default function CardTeam({ data, fallback }: CardTeamProps) {
	return (
		<div
			className="flex gap-4 w-full h-full pr-32 border-[1px] rounded-sm border-black/10 cursor-pointer group transition-all hover:drop-shadow-md"
			onClick={() => window.open(`${data?.url}`)}
		>
			<div className="w-4 bg-bdpurple rounded-l-sm transition-all group-hover:opacity-70"></div>
			<div className="flex w-full my-5 items-center justify-start gap-5 transition-all group-hover:opacity-70 ">
				<Avatar className="size-14">
					<AvatarImage
						className="size-full rounded-full"
						src={data?.img}
						alt={`${data.name}'s Photo`}
					/>
					<AvatarFallback>{fallback}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<h1 className="text-xl font-medium">{data?.name}</h1>
					<h2 className="text-lg text-bdlightpurple font-medium">
						{data?.function}
					</h2>
				</div>
			</div>
		</div>
	);
}
