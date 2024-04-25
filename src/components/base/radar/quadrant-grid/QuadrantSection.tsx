import Link from "next/link";
import { ConfigData, Group } from "@/api/types/radar";
import ItemList from "./ItemList";
import Badge from "./Badge";
import Flag from "./Flag";

const renderList = (
	ringName: string,
	quadrantName: string,
	groups: Group,
	big: boolean
) => {
	const itemsInRing = groups[quadrantName][ringName] || [];

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
				<Badge type={ringName}>{ringName}</Badge>
			</div>
			{itemsInRing.map((item) => (
				<span key={item.name} className="block mb-3">
					<Link
						className="text-black pointer hover:opacity-75"
						href={`${item.quadrant}/${item.name}`}
					>
						{item.title}
						<Flag item={item} short />
					</Link>
				</span>
			))}
		</div>
	);
};

const renderRing = (
	ringName: string,
	quadrantName: string,
	groups: Group,
	renderIfEmpty: boolean,
	big: boolean
) => {
	if (
		!renderIfEmpty &&
		(!groups[quadrantName] ||
			!groups[quadrantName][ringName] ||
			groups[quadrantName][ringName].length === 0)
	) {
		return null;
	}
	return (
		<div
			key={ringName}
			className="box-border px-2 flex-[0_0_25%] mb-6 max-md:basis-1/2"
		>
			{renderList(ringName, quadrantName, groups, big)}
		</div>
	);
};

export default function QuadrantSection({
	quadrantName,
	groups,
	config,
	big = false,
}: {
	quadrantName: string;
	groups: Group;
	config: ConfigData;
	big?: boolean;
}) {
	return (
		<div>
			<div className="mb-5">
				<div className="flex items-center justify-between">
					<div className="flex-[0_1_auto]">
						<h4 className="m-0 p-0 text-black text-lg font-normal">
							{config.quadrants[quadrantName]}
						</h4>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-5">
				{config.rings.map((ringName: string) =>
					renderRing(
						ringName,
						quadrantName,
						groups,
						config.showEmptyRings,
						big
					)
				)}
			</div>
		</div>
	);
}
