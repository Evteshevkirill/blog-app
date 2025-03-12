import { UiArticleCardList } from '../features'
import { IUiArticleCardListProps } from '../features'
export function HomePage() {
  return (
    <>
      <UiArticleCardList {...({} as IUiArticleCardListProps)} />
    </>
  )
}
