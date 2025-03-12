import { UiAlert } from '../../../../shared'
import { usePostFavoriteArticleMutation } from '../../model'

import classes from '../ArticleCard/articleCard.module.scss'

export const CreateInputHeart = (slug: string, favoritesCount: number, favorited: boolean) => {
  const [mutate, data] = usePostFavoriteArticleMutation()

  return (
    <>
      <label className={classes['article__heart-container']}>
        <input
          checked={favorited}
          onChange={(event) => mutate({ slug, checked: event.target.checked })}
          type="checkbox"
          className={classes['article__heart-checkbox']}
        />
        <svg className={classes['article__heart-svg']} viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className={classes['article__heart-count']}>{favoritesCount}</span>
      </label>
      {data.status === 'rejected' && <UiAlert message="Error: Вы не авторизованны, войдите или зарегистрируйтесь" />}
    </>
  )
}
