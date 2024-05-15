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
	new = "NEW",
	changed = "CHANGED",
	default = "DEFAULT",
}

export type ItemOld = ItemAttributes & {
	featured: boolean;
	bodyPt: string;
	bodyEn: string;
	bodyEs: string;
	info: string;
	flag: FlagType;
	revisions: Revision[];
};

export interface ItemDetails {
	id: string;
	flag: FlagType;
	isActive: boolean;
	authorEmail: string;
	revisions: string[];
	title: string;
	creationDate: string;
	publicationDate: null;
	updateDate: string;
	ring: string;
	expectation: string;
	quadrantId: string;
	body: string;
}

export interface Item {
	id: string;
	title: string;
	ring: string;
	expectation: string;
	quadrantId: string;
	isActive: boolean;
	flag: FlagType;
}

export interface QuadrantItems {
	id: string;
	name: string;
	title: string;
	description: string;
	items: Item[];
}

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

export type QuadrantI = {
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
	[quadrant: string]: QuadrantGroup;
};

export interface Quadrant {
	id: string;
	name: string;
	title: string;
	color: string;
	txtColor: string;
	position: number;
	description: string;
}

export interface QuadrantGroup {
	[name: string]: Item[];
}

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

export type RingName = "all" | "adopt" | "trial" | "observe" | "hold";

export type BlipOld = Item & {
	quadrantPosition: number;
	ringPosition: number;
	color: string;
	txtColor: string;
	coordinates: Point;
	flag: FlagType;
};

export type Blip = Item & {
	quadrantName: string;
	quadrantPosition: number;
	ringPosition: number;
	color: string;
	txtColor: string;
	coordinates: Point;
};

export type Point = {
	x: number;
	y: number;
};
