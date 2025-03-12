/* eslint-disable react-refresh/only-export-components */
import { UiArticleCard, IUiArticleCardProps } from '../../../entities'
import { Pagination } from 'antd'
import { UiSpinner, UiAlert } from '../../../shared'

import withArticleCardList from '../model/hooks/withArticleCardList'
import { IUiArticleCardListProps } from '../types/articleCardListProps'

import classes from './articleList.module.scss'

const UiArticleCardList = ({ isLoading, isError, onChangePage, data, page }: IUiArticleCardListProps) => {
  return (
    <section className={classes.article__list}>
      {isLoading && <UiSpinner />}
      {isError && <UiAlert message="Error: Ошибка загрузки данных" />}

      {!isLoading && data && data.articles && (
        <ul className={classes.article__items}>
          {data.articles.map((article: IUiArticleCardProps) => (
            <UiArticleCard
              key={article.slug}
              title={article.title}
              description={article.description}
              author={article.author}
              createdAt={article.createdAt}
              tagList={article.tagList}
              favoritesCount={article.favoritesCount}
              slug={article.slug}
              favorited={article.favorited}
            />
          ))}
          <Pagination pageSize={page} onChange={onChangePage} align="center" defaultCurrent={1} total={500} />
        </ul>
      )}
    </section>
  )
}

export default withArticleCardList(UiArticleCardList)
