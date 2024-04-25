import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ConfigData, Group, RingName } from "@/api/types/radar";
import ItemList from "./ItemList";
import Badge from "./Badge";
import Flag from "./Flag";

const renderList = (
	t: Function,
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
				<span key={item.name} className="text-xl block mb-3">
					<Link
						className="text-white pointer hover:underline"
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
	t: Function,
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
			{renderList(t, ringName, quadrantName, groups, big)}
		</div>
	);
};

export default function QuadrantSection({
	quadrantName,
	groups,
	config,
	big = true,
}: {
	quadrantName: string;
	groups: Group;
	config: ConfigData;
	big?: boolean;
}) {
	const { t } = useTranslation();
	return (
		<div>
			<div className="mb-5">
				<div className="flex items-center justify-between">
					<div className="flex-[0_1_auto]">
						<h4 className="m-0 p-0 text-white text-lg font-normal">
							{t(`quadrants.${quadrantName}`)}
						</h4>
					</div>
					{!big && (
						<div className="flex-[0_1_auto]">
							<Link
								className="inline-block relative h-6 text-sm border-0 text-zinc-400 pointer hover:after:content-none hover:after:left-0 hover:after:-bottom-2 hover:after:w-full hover:after:border-b-2 hover:after:border-gray-400"
								href={`${quadrantName}`}
							>
								<span className="" />
								{t("zoom-in")}
							</Link>
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-wrap">
				{config.rings.map((ringName: string) =>
					renderRing(
						t,
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
