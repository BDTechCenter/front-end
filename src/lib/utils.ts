import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function limitString(item: string, length: number) {
	return item.length > length ? `${item.substring(0, length)}...` : item;
}

export const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(" ");
	const firstLetterOfFirstName = firstName.charAt(0);
	const firstLetterOfLastName = lastName.charAt(0);
	return firstLetterOfFirstName + firstLetterOfLastName;
};