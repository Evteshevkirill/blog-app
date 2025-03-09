import { UiArticleList, UiPagination } from '../../../features'
import { UiSpinner } from '../../../shared/ui/Spinner'

import classes from './ArticlesList.module.scss'
export function ArticlesListWidget({ load = true }) {
  return (
    <main className={classes.main}>
      {load && <UiSpinner />}
      <UiArticleList /> <UiPagination />
    </main>
  )
}
