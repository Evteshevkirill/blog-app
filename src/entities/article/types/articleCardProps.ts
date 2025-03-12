export interface IUiArticleCardProps {
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
  body?: string
  children?: React.ReactNode
}
