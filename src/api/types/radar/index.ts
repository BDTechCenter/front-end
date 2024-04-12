export interface TechRadarData {
	items: Item[];
	releases: string[];
}

export type ItemAttributes = {
	name: string;
	ring: string;
	quadrant: string;
	title: string;
	featured?: boolean;
	tags?: string[];
};

export enum FlagType {
	new = "new",
	changed = "changed",
	default = "default",
}

export type Item = ItemAttributes & {
	featured: boolean;
	bodyPt: string;
	bodyEn: string;
	bodyEs: string;
	info: string;
	flag: FlagType;
	revisions: Revision[];
};

export type Revision = ItemAttributes & {
	body: string;
	fileName: string;
	release: string;
};

export interface TechRadarConfigData {
	tags?: string[];
	quadrants: { [key: string]: string };
	rings: string[];
	showEmptyRings: boolean;
	quadrantsMap: { [quadrant: string]: QuadrantConfig };
	chartConfig: {
		size: number;
		scale: number[];
		blipSize: number;
		ringsAttributes: { radius: number; arcWidth: number }[];
	};
	homepageContent: HomepageOption;
	dateFormat?: string;
	editLink?: {
		radarLink: string;
		title?: string;
	};
}

export type QuadrantConfig = {
	colour: string;
	txtColour: string;
	position: number;
	description: string;
};

export enum HomepageOption {
	chart = "chart",
	columns = "columns",
	both = "both",
}
