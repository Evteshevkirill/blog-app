/* eslint-disable react-refresh/only-export-components */
import { ArticleCard } from '../Article'
import { Pagination } from 'antd'
import { UiSpinner } from '../uiComponents/Spinner'
import { UiAlert } from '../uiComponents/Alert'

import withArticleCardList from '../../HOC/withArticleCardList'
import { IArticleCardListProps } from '../../types'

import classes from './articleList.module.scss'

const ArticleCardList = ({ isLoading, isError, onChangePage, articles, page }: IArticleCardListProps) => {
  return (
    <section className={classes.article__list}>
      {isLoading && <UiSpinner />}
      {isError && <UiAlert message="Error: Ошибка загрузки данных" />}

      {!isLoading && articles && (
        <ul className={classes.article__items}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
          <Pagination pageSize={page} onChange={onChangePage} align="center" defaultCurrent={1} total={500} />
        </ul>
      )}
    </section>
  )
}

export default withArticleCardList(ArticleCardList)
