import { MyTechItem } from "@/api/types/radar";
import { MenuPopoverTech } from "./MenuPopoverTech";

interface TechCardProps {
	data: MyTechItem;
}

export function TechCard({ data }: TechCardProps) {
	return (
		<div className="flex items-center justify-between border border-bdlightpurple/10 rounded-sm p-4 gap-5">
			<div className="flex flex-col w-full">
				<h1 className="text-sm 2xl:text-base font-semibold">{data.title}</h1>
				<h1 className="text-sm 2xl:text-md">{data.authorEmail}</h1>
			</div>
			<div className="flex gap-1justify-end items-center z-10 top-12 right-1">
				<MenuPopoverTech id={data.id} isPublished={data.isActive} />
			</div>
		</div>
	);
}
