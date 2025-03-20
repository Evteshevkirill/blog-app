export interface IArticleCardProps {
  article: article
  children?: React.ReactNode
  body?: string
}

type article = {
  slug: string
  title: string
  description: string
  createdAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
  tagList: string[]
  body: string
}
