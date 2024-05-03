import Link from "next/link";
import { Group, Quadrant } from "@/api/types/radar";
import { chartRings } from "@/services/radarConstants";
import ItemList from "./ItemList";
import Badge from "./Badge";
import Flag from "./Flag";

const renderList = (
	ringName: string,
	quadrantId: string,
	groups: Group,
	big: boolean
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
						className="text-black text-base pointer hover:opacity-75"
						href={`${item.quadrantId}/${item.title.toLowerCase()}`}
					>
						{item.title}
						{/* <Flag item={item} short /> */}
					</Link>
				</span>
			))}
		</div>
	);
};

const renderRing = (
	ringName: string,
	quadrantId: string,
	groups: Group,
	big: boolean
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
			className="box-border px-2 flex-[0_0_25%] mb-6 max-md:basis-1/2"
		>
			{renderList(ringName, quadrantId, groups, big)}
		</div>
	);
};

export default function QuadrantSection({
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
			<div className="flex flex-wrap gap-5">
				{chartRings.map((ringName: string) =>
					renderRing(ringName, quadrantId, groups, big)
				)}
			</div>
		</div>
	);
}
