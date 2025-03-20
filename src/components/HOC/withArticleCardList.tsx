import { JSX, useState } from 'react'
import { useGetAllArticlesQuery } from '../api'
import { useAuth } from '../App/AuthContext'

import type { IArticleCardListProps } from '../types'

const withArticleCardList = <T extends object>(
  Component: React.ComponentType<IArticleCardListProps>
): ((props: T & IArticleCardListProps) => JSX.Element) => {
  return function () {
    const [currentPage, setCurrentPage] = useState(1)

    const { isAuthenticated } = useAuth()

    const { data, isLoading, isError, isSuccess } = useGetAllArticlesQuery({
      limit: 5,
      offset: (currentPage - 1) * 5,
      isAuthenticated,
    })

    return (
      <>
        {isSuccess && (
          <Component
            isLoading={isLoading}
            isError={isError}
            onChangePage={setCurrentPage}
            articles={data.articles}
            page={currentPage}
          />
        )}
      </>
    )
  }
}

export default withArticleCardList
