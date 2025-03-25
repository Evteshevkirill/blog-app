/* eslint-disable react-hooks/exhaustive-deps */
import { JSX, useEffect, useState } from 'react'
import { useGetAllArticlesQuery } from '../api'
import { useAuth } from '../App/AuthContext'

import type { IArticleCardListProps } from '../types'

const withArticleCardList = <T extends object>(
  Component: React.ComponentType<IArticleCardListProps>
): ((props: T & IArticleCardListProps) => JSX.Element) => {
  return function () {
    const [currentPage, setCurrentPage] = useState(() => {
      const storedPage = localStorage.getItem('page')
      return storedPage ? parseInt(storedPage, 10) : 1
    })

    useEffect(() => {
      localStorage.setItem('page', currentPage.toString())
    }, [currentPage])

    const onChangePage = (newPage) => {
      setCurrentPage(newPage)
    }

    const { isAuthenticated } = useAuth()

    const { data, isLoading, isError, isSuccess, refetch } = useGetAllArticlesQuery({
      limit: 5,
      offset: (currentPage - 1) * 5,
      isAuthenticated,
    })

    useEffect(() => {
      refetch()
    }, [])

    return (
      <>
        {isSuccess && (
          <Component
            isLoading={isLoading}
            isError={isError}
            onChangePage={onChangePage}
            articles={data.articles}
            page={currentPage}
          />
        )}
      </>
    )
  }
}

export default withArticleCardList
