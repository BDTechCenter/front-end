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

export type Quadrant = {
	[name: string]: Item[];
};

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

export type Group = {
	[quadrant: string]: Quadrant;
};

export interface ConfigData {
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

export enum Language {
	en = "en",
}

export enum StorageKey {
	language = "language",
}

export type RingName = "all" | "adopt" | "trial" | "assess" | "hold"

export type Blip = Item & {
  quadrantPosition: number;
  ringPosition: number;
  colour: string;
  txtColour: string;
  coordinates: Point;
};

export type Point = {
  x: number;
  y: number;
};