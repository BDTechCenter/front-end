import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// @ts-ignore
import Resizer from "@meghoshpritam/react-image-file-resizer";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function limitString(item: string, length: number) {
	return item.length > length ? `${item.substring(0, length)}...` : item;
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getInitials = (name: string) => {
	const [firstName, lastName] = name.split(" ");
	const firstLetterOfFirstName = firstName.charAt(0);
	const firstLetterOfLastName = lastName.charAt(0);
	return firstLetterOfFirstName + firstLetterOfLastName;
};

export const resizeFile = (file: File) =>
	new Promise((resolve: (value: File) => void) => {
		Resizer.imageFileResizer({
			file,
			maxWidth: 800,
			maxHeight: 600,
			compressFormat: "JPEG",
			quality: 100,
			rotation: 0,
			keepAspectRatio: true,
			responseUriFunc: (uri: File) => {
				resolve(uri);
			},
			outputType: "file",
		});
	});
