import { SetStateAction } from 'react'
import { IUiArticleCardProps } from '../../../entities'

export interface IUiArticleCardListProps {
  isLoading: boolean
  isError: boolean
  onChangePage: React.Dispatch<SetStateAction<number>>
  page: number
  data: { articles: IUiArticleCardProps[] }
}
