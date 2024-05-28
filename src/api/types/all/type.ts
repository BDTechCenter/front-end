import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Expectation, QuadrantsID, RingName } from "../radar";

export interface Error {
	text: string;
	img: string;
}

export interface Filter {
	[key: string]: string | unknown;
	tags?: string | unknown;
	title?: string | unknown;
}

export interface FilterPath {
	type: "tags" | "title";
	values: string;
	filterTag?: string | null;
	filterTag2?: string | null;
	pathnameDefault?: string;
	searchParams: ReadonlyURLSearchParams;
	router: AppRouterInstance;
}

export interface AlertType {
	variantButton:
		| "delete"
		| "ghost"
		| "bdpurple"
		| "bdlight"
		| "default"
		| "outline";
	nameButton: string | any;
	type?: "submit" | "reset" | "button" | undefined;
	title: string;
	description: string;
	nameButtonAction: string;
	Action?: () => void;
	idForm?: string;
}

interface ArticleValues {
	title?: string;
	body?: string;
	image?: File | undefined;
	tags?: string[];
}

export interface ItemRadarValues {
	title?: string;
	ring?: RingName;
	expectation?: Expectation;
	quadrant?: QuadrantsID;
	body?: string;
}

interface FormType<T> {
	title: string | any;
	open: boolean;
	openUpdate?: boolean;
	OnSubmit: (values: any) => void;
	idForm?: string;
	defaultValues?: T;
	alertSubmit: JSX.Element;
}

export type FormTypeArticle = FormType<ArticleValues> & {
	idArticle?: string;
};

export type FormTypeItem = FormType<ItemRadarValues>;
