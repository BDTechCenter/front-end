import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

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
	title: string;
	description: string;
	nameButtonAction: string;
	Action: () => void;
}

export interface FormType {
	title: string | any;
	open: boolean;
	openUpdate?: boolean;
	OnSubmit: (values: any) => void;
	idForm?: string;
	idNews?: string;
}
