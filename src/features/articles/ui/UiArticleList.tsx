import { UiArticleCard } from '../../../entities/article'

import classes from './articleList.module.scss'

export function UiArticleList() {
  return (
    <ul className={classes.article__list}>
      <UiArticleCard />
      <UiArticleCard />
      <UiArticleCard />
      <UiArticleCard />
      <UiArticleCard />
    </ul>
  )
}
