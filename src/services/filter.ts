import { Filter, FilterPath } from "../api/types/all/type";

interface UseFilterProps {
	filters: Filter;
}

export function usefilter({ filters }: UseFilterProps) {
	let url = [];
	for (let key in filters) {
		if (filters[key] && filters[key] !== " ") {
			url.push(filters[key]);
		}
	}
	if (url.length > 1) {
		return url.join("&");
	}
	return url.join("");
}

interface UpdateUrlFilter {
	filters: FilterPath;
}

export function UpdateUrlFilter({ filters }: UpdateUrlFilter) {
	const pathname = window.location.search;

	if (filters.filterTag) {
		const current = new URLSearchParams(
			Array.from(filters.searchParams.entries())
		);
		current.set(filters.type, filters.values);
		filters.router.push(`${filters.pathnameDefault}?${current.toString()}`);
		console.log(`${filters.pathnameDefault}?${current.toString()}`);
	} else {
		filters.router.push(
			filters.filterTag2
				? `${pathname}&${filters.type}=${filters.values}`
				: `?${filters.type}=${filters.values}`
		);
	}
}
