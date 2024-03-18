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
}

export interface ContentNews{
  content: News[]
}

export interface Comment{
  author: string
  comment: string
}