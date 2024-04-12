import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// @ts-ignore
import Resizer from "@meghoshpritam/react-image-file-resizer";
import { useEffect, useState } from "react";
import { Item } from "@/api/types/radar";

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

export const useFetch = <D extends unknown>(url: string): D | undefined => {
	const [data, setData] = useState<D>();

	useEffect(() => {
		console.log(url);
		fetch(url)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data: D) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error);
				console.error(`fetch ${url} failed. Did the file exist?`, error);
			});
	}, [url]);

	return data;
};

export const featuredOnly = (items: Item[]) =>
  items.filter((item) => item.featured);
export const nonFeaturedOnly = (items: Item[]) =>
  items.filter((item) => !item.featured);