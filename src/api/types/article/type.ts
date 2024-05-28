export interface Article {
	id: string;
	imageUrl: string;
	updateDate: string;
	title: string;
	author: string;
	summary: string;
	body: string;
	tags: string[];
	isPublished: boolean;
	views: number;
	alreadyUpVoted: boolean;
}

export interface ContentArticles {
	content: Article[];
	pageable: Pageable;
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number: number;
	sort: any[];
	numberOfElements: number;
	first: boolean;
	empty: boolean;
}

export interface QueryDataArticles {
	pages: ContentArticles[];
}

export interface Pageable {
	pageNumber: number;
	pageSize: number;
	sort: any[];
	offset: number;
	paged: boolean;
	unpaged: boolean;
}

export interface UpvoteArticle {
	id: string | number;
	token?: string;
	method: "comments" | "news";
}

export interface ArticlePost {
	author?: string;
	title: string;
	summary: string;
	body: string;
	tags?: string[];
	image?: File | null;
	isPublished: boolean;
}

export interface CommentType {
	id: number;
	author: string;
	comment: string;
	publicationDate: string;
	alreadyUpVoted: boolean;
}

export interface CommentPostType {
	author: string;
	comment: string;
}

export interface ContentComment {
	content: CommentType[];
}
