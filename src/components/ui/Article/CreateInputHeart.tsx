import { useEffect, useState } from 'react'
import { usePostFavoriteArticleMutation, useDeleteFavoriteMutation, user } from '../../api'

import classes from './articleCard.module.scss'

export const CreateInputHeart = (slug: string, favorited: boolean, favoritesCount: number) => {
  const [like, setLike] = useState(favorited)

  const [count, setCount] = useState(favoritesCount)

  const [mutate, { error, data, isSuccess }] = usePostFavoriteArticleMutation()

  const [deleteMutate, { data: deleteData, error: deleteError }] = useDeleteFavoriteMutation()

  useEffect(() => {
    if (isSuccess && data) {
      setLike(data.article.favorited)

      setCount(data.article.favoritesCount)
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (deleteData) {
      setLike(deleteData.article.favorited)
      setCount(deleteData.article.favoritesCount)
    }
  }, [deleteData])

  const changeLike = (e: boolean) => {
    if (e) {
      mutate({ slug })
      if (error) {
        mutate({ slug })
      }
    } else {
      deleteMutate({ slug })
      if (deleteError) {
        deleteMutate({ slug })
      }
    }
  }

  return (
    <>
      <label className={classes['article__heart-container']}>
        <input
          checked={like}
          onChange={(e) => changeLike(e.target.checked)}
          type="checkbox"
          className={classes['article__heart-checkbox']}
          disabled={!user}
        />
        <svg className={classes['article__heart-svg']} viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className={classes['article__heart-count']}>{count}</span>
      </label>
    </>
  )
}
