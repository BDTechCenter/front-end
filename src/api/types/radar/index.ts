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

export enum Flag {
	new = "NEW",
	changed = "CHANGED",
	default = "DEFAULT",
}

export enum Expectation {
	unknown = "UNKNOWN",
	zero_two = "ZERO_TWO",
	two_five = "TWO_FIVE",
	five_ten = "FIVE_TEN",
}

export enum QuadrantsID {
	first_quadrant = "FIRST_QUADRANT",
	second_quadrant = "SECOND_QUADRANT",
	third_quadrant = "THIRD_QUADRANT",
	fourth_quadrant = "FOURTH_QUADRANT",
}

export enum RingName {
	adopt = "ADOPT",
	trial = "TRIAL",
	observe = "OBSERVE",
	hold = "HOLD",
}

export interface ItemDetails {
	id: string;
	flag: Flag;
	isActive: boolean;
	authorEmail: string;
	revisions: string[];
	title: string;
	creationDate: string;
	publicationDate: null;
	updateDate: string;
	ring: RingName;
	expectation: Expectation;
	quadrantId: QuadrantsID;
	body: string;
}

export interface Item {
	id: string;
	title: string;
	ring: string;
	expectation: Expectation;
	quadrantId: string;
	isActive: boolean;
	flag?: Flag;
}

export interface ItemObj {
	isActive: boolean;
	title: string;
	quadrant: QuadrantsID;
	ring: RingName;
	expectation: Expectation;
	body: string;
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

export type BlipOld = Item & {
	quadrantPosition: number;
	ringPosition: number;
	color: string;
	txtColor: string;
	coordinates: Point;
	flag: Flag;
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

export type MyTechItem = {
	id: string;
	quadrantId: string;
	title: string;
	authorEmail: string;
	isActive: boolean;
	needAdminReview: boolean;
};
