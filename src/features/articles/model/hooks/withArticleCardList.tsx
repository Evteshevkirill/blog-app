import { JSX, useState, useEffect } from 'react'
import { useGetAllArticlesQuery } from '../api'
import { IUiArticleCardProps } from '../../../../entities'

import type { IUiArticleCardListProps } from '../../types/articleCardListProps'

const withArticleCardList = <T extends object>(
  Component: React.ComponentType<IUiArticleCardListProps>
): ((props: T & IUiArticleCardListProps) => JSX.Element) => {
  return function () {
    const [currentPage, setCurrentPage] = useState(1)

    const { data, isLoading, isError } = useGetAllArticlesQuery({ limit: 5, offset: (currentPage - 1) * 5 })

    const [DataArticles, setDataArticles] = useState<{ articles: IUiArticleCardProps[] }>(data)

    useEffect(() => {
      setDataArticles(data)
    }, [data, currentPage])

    return (
      <Component
        isLoading={isLoading}
        isError={isError}
        onChangePage={setCurrentPage}
        data={DataArticles}
        page={currentPage}
      />
    )
  }
}

export default withArticleCardList
