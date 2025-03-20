import { SetStateAction } from 'react'

export interface IArticleCardListProps {
  isLoading: boolean
  isError: boolean
  onChangePage: React.Dispatch<SetStateAction<number>>
  page: number
  articles: article[]
}

interface article {
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
