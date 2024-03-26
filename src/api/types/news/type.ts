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
  totalPages: number
}

export interface Comment{
  id: number
  author: string
  comment: string
  publicationDate: string
}

export interface ContentComment{
  content: Comment[]
}