import ArticleCardList from '../ui/ArticleCardList/ArticleCardList'
import { IArticleCardListProps } from '../types'
export function HomePage() {
  return (
    <>
      <ArticleCardList {...({} as IArticleCardListProps)} />
    </>
  )
}
