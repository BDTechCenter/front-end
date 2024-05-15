import Link from "next/link";
import { Group } from "@/api/types/radar";
import { chartRings } from "@/services/radarConstants";
import { cn } from "@/lib/utils";
import ItemList from "./ItemList";
import Badge from "./Badge";
import Flag from "./Flag";

const renderList = (
	ringName: string,
	quadrantId: string,
	groups: Group,
	big: boolean,
	white?: boolean
) => {
	const itemsInRing = groups[quadrantId][ringName] || [];

	if (big) {
		return (
			<ItemList items={itemsInRing} noLeadingBorder>
				<Badge type={ringName} lg={big}>
					{ringName}
				</Badge>
			</ItemList>
		);
	}

	return (
		<div>
			<div className="mb-5">
				<Badge type={ringName.toLowerCase()}>{ringName.toUpperCase()}</Badge>
			</div>
			{itemsInRing.map((item) => (
				<span key={item.id} className="block mb-3">
					<Link
						className={cn(
							"text-base pointer transition-colors",
							!white
								? "text-foreground hover:text-foreground/50"
								: "text-white hover:text-white/50"
						)}
						href={`/tech-radar/${item.quadrantId}/${item.id}`}
					>
						{item.title}
						<Flag item={item} short={!white} />
					</Link>
				</span>
			))}
		</div>
	);
};

export const renderRing = (
	ringName: string,
	quadrantId: string,
	groups: Group,
	big: boolean,
	white?: boolean
) => {
	if (
		!groups[quadrantId] ||
		!groups[quadrantId][ringName] ||
		groups[quadrantId][ringName].length === 0
	) {
		return null;
	}
	return (
		<div
			key={ringName}
			className={cn("box-border px-2 flex mb-6 max-md:basis-1/2", )}
		>
			{renderList(ringName, quadrantId, groups, big, white)}
		</div>
	);
};

export function QuadrantSection({
	quadrantTitle,
	quadrantId,
	groups,
	big = false,
}: {
	quadrantTitle: string;
	quadrantId: string;
	groups: Group;
	big?: boolean;
}) {
	return (
		<div>
			<div className="mb-5">
				<div className="flex items-center justify-between">
					<div className="flex-[0_1_auto]">
						<h4 className="m-0 p-0 text-black text-lg font-medium">
							{quadrantTitle}
						</h4>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-7">
				{chartRings.map((ringName: string) =>
					renderRing(ringName, quadrantId, groups, big)
				)}
			</div>
		</div>
	);
}
