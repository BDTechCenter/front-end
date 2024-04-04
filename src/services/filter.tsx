import { Filter, FilterPath } from "@/api/types/all/type";
interface filterProps {
	filters: Filter;
}

export function Usefilter({ filters }: filterProps) {
	let url = [];
	for (let key in filters) {
		if (filters[key] && filters[key] !== " ") {
			url.push(filters[key]);
		}
	}
	if (url.length > 1) {
    console.log( "?" + url.join("&"))
		return "?" + url.join("&");
	}
  console.log( "?" + url.join(""))
	return "?" + url.join("");
}
