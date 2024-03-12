export interface News {
  id: string;
  imageUrl: string;
  updateDate: string;
  title: string;
  author: string
}

export interface ContentNews{
  content: News[]
}

export interface Comment{
  author: string,
  comment: string
}