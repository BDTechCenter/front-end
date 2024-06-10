import { create } from "zustand";

type Image = {
	id: number;
	file: File | Blob;
	url: string;
};

interface ImageStoreProps {
	images: Image[];
	addImage: (image: Image) => void;
	clearImages: () => void;
	replaceImage: (id: number, url: string) => void;
}

export const useImageStore = create<ImageStoreProps>((set) => ({
	images: [],
	addImage: (image) => set((state) => ({ images: [...state.images, image] })),
	clearImages: () => set({ images: [] }),
	replaceImage: (id, url) =>
		set((state) => ({
			images: state.images.map((img) =>
				img.id === id ? { ...img, url } : img
			),
		})),
}));
