import { Group, Item, Quadrant, QuadrantGroup } from "@/api/types/radar";

export const activeOnly = (items: Item[]) =>
	items.filter((item) => item.isActive);
export const nonActiveOnly = (items: Item[]) =>
	items.filter((item) => !item.isActive);

const addItemToQuadrant = (
	quadrant: QuadrantGroup = {},
	item: Item
): QuadrantGroup => ({
	...quadrant,
	[item.ring]: addItemToRing(quadrant[item.ring], item),
});

const addItemToList = (list: Item[] = [], item: Item) => [...list, item];

const addItemToRing = (ring: Item[] = [], item: Item) => [...ring, item];

export const groupByQuadrants = (items: Item[]): Group =>
	items.reduce(
		(quadrants, item: Item) => ({
			...quadrants,
			[item.quadrantId]: addItemToQuadrant(quadrants[item.quadrantId], item),
		}),
		{} as { [k: string]: QuadrantGroup }
	);

export const stylesMap = [
	"top-0 left-0",
	"top-0 right-0 text-right",
	"bottom-0 left-0",
	"bottom-0 right-0 text-right",
];

export const comboboxOpts = {
	ring: [
		{
			label: "Adopt",
			value: "ADOPT",
		},
		{
			label: "Trial",
			value: "TRIAL",
		},
		{
			label: "Observe",
			value: "OBSERVE",
		},
		{
			label: "Hold",
			value: "HOLD",
		},
	],
	expectation: [
		{
			label: "Unknown",
			value: "UNKNOWN",
		},
		{
			label: "0 - 2",
			value: "ZERO_TWO",
		},
		{
			label: "2 - 5",
			value: "TWO_FIVE",
		},
		{
			label: "5 - 10",
			value: "FIVE_TEN",
		},
	],
	quadrant: [
		{
			label: "Languages & Frameworks",
			value: "FIRST_QUADRANT",
		},
		{
			label: "Methods & Patterns",
			value: "SECOND_QUADRANT",
		},
		{
			label: "Platform & Operations",
			value: "THIRD_QUADRANT",
		},
		{
			label: "Tools",
			value: "FOURTH_QUADRANT",
		},
	],
};
