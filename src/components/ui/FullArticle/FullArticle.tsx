/* eslint-disable react-hooks/exhaustive-deps */
import { useDeleteArticleMutation, useGetFullArticleQuery, user } from '../../api'
import { Link, useParams } from 'react-router'

import { ArticleCard } from '../Article'
import { UiSpinner, UiAlert } from '../uiComponents'
import { Button, Popconfirm } from 'antd'

import styles from '../styles/buttons.module.scss'
import { useEffect } from 'react'
import { useAuth } from '../../App/AuthContext'

export const FullArticle = () => {
  const { slug } = useParams()

  const { isAuthenticated } = useAuth()

  const { isLoading, isError, data, isSuccess, refetch } = useGetFullArticleQuery({ slug, isAuthenticated })

  const [deleteMutate, { isSuccess: isSuccessDelete }] = useDeleteArticleMutation()

  useEffect(() => {
    refetch()
  }, [])

  const onDeleteArticle = () => {
    if (slug) deleteMutate({ slug })
  }

  return (
    <>
      {isLoading && <UiSpinner />}
      {isError && <UiAlert message="Error: Ошибка загрузки статьи" />}
      {isSuccessDelete && <UiAlert message="Статья успешно удалена" type="success" />}
      {isSuccess && (
        <ArticleCard article={data.article} body={data.article.body}>
          {user && (
            <>
              <Popconfirm
                title={null}
                description="Are you sure to delete this task?"
                okText="Yes"
                cancelText="No"
                placement="left"
                onConfirm={onDeleteArticle}
              >
                <Button style={{ fontFamily: 'Inter', fontSize: '16px', padding: '6px 17px' }} danger>
                  Delete
                </Button>
              </Popconfirm>
              <Link to={`/articles/${slug}/edit`}>
                <button style={{ padding: '5px 17px' }} type="button" className={`${styles.buttons} ${styles.default}`}>
                  Edit
                </button>
              </Link>
            </>
          )}
        </ArticleCard>
      )}
    </>
  )
}
