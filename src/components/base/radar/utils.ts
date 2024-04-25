import { Group, Item, Quadrant } from "@/api/types/radar";

export const featuredOnly = (items: Item[]) =>
	items.filter((item) => item.featured);
export const nonFeaturedOnly = (items: Item[]) =>
	items.filter((item) => !item.featured);

const addItemToQuadrant = (quadrant: Quadrant = {}, item: Item): Quadrant => ({
	...quadrant,
	[item.ring]: addItemToRing(quadrant[item.ring], item),
});

const addItemToList = (list: Item[] = [], item: Item) => [...list, item];

const addItemToRing = (ring: Item[] = [], item: Item) => [...ring, item];

export const groupByQuadrants = (items: Item[]): Group =>
	items.reduce(
		(quadrants, item: Item) => ({
			...quadrants,
			[item.quadrant]: addItemToQuadrant(quadrants[item.quadrant], item),
		}),
		{} as { [k: string]: Quadrant }
	);
