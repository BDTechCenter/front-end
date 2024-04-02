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
  alreadyUpVoted: boolean
}

export interface ContentNews{
  content: News[]
  totalPages: number
}

export interface UpvoteNews{
  id: string | number
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
  alreadyUpVoted: boolean
}

export interface CommentPostType{
  author: string
  comment: string
}

export interface ContentComment {
	content: CommentType[];
}
