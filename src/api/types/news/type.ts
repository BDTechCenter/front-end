export interface News {
	id: string;
	author: string;
	creationDate: string;
	updateDate: string;
	title: string;
	summary: string;
	body: string;
	tags: string[];
	imageUrl: string;
	isPublished: boolean;
}

export interface NewsPost {
	author?: string;
	title: string;
	summary: string;
	body: string;
	tags?: string[];
	image?: File | null;
	isPublished: boolean;
}

export interface ContentNews {
	content: News[];
}

export interface CommentType {
	id: number;
	author: string;
	comment: string;
	publicationDate: string;
}

export interface ContentComment {
	content: CommentType[];
}
