/* eslint-disable react-refresh/only-export-components */
import { CreateTags, CreateInputHeart } from '../index'
import { IUiArticleCardProps } from '../../index'
import withArticleCard from '../../model/hooks/withArticleCard'

import classes from './articleCard.module.scss'

const UiArticleCard = ({
  title,
  description,
  createdAt,
  author,
  tagList,
  favorited,
  favoritesCount,
  slug,
  children,
}: IUiArticleCardProps) => {
  return (
    <li className={classes.article__card}>
      <div className={classes['article__header-wrapper']}>
        <div className={classes['article__header-text']}>
          <div className={classes['article__header-title']}>
            <h2 className={classes.article__title}>{title}</h2>
            {CreateInputHeart(slug, favoritesCount, favorited)}
          </div>
          {CreateTags(tagList)}
          <div className={classes['article__description-line']}>
            <p className={classes['article__description-text']}>{description}</p>
            <div className={classes['article__interface-buttons']}>{children}</div>
          </div>
        </div>
        <div className={classes.article__author}>
          <div className={classes['article__profile']}>
            <div className={classes['article__profile-name']}>{author.username}</div>
            <p className={classes['article__profile-date']}>{createdAt}</p>
          </div>
          <img className={classes['article__profile-img']} src={author.image} alt="photo" />
        </div>
      </div>
      <div className={classes['article__body']}></div>
    </li>
  )
}

export default withArticleCard(UiArticleCard)
