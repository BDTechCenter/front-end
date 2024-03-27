export interface News {
  id: string
  imageUrl: string
  updateDate: string
  title: string
  author: string
  summary: string
  body: string
  tags: string[]
  isPublished: boolean
  views: number
}

export interface ContentNews{
  content: News[]
  totalPages: number
}

export interface UpvoteNews{
  id: string
  formData: FormData
  token?: string
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

export interface CommentType {
	id: number;
	author: string;
	comment: string;
	publicationDate: string;
}

export interface ContentComment {
	content: CommentType[];
}
