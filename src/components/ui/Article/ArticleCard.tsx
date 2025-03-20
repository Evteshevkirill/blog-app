/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'

import { CreateTags } from './CreateTags'
import { CreateInputHeart } from './CreateInputHeart'
import { IArticleCardProps } from '../../types'

import classes from './articleCard.module.scss'
import styles from './markdownContent.module.scss'

export const ArticleCard = ({ article, children, body }: IArticleCardProps) => {
  const { title, description, createdAt, author, tagList, favorited, favoritesCount, slug } = article
  const date = new Date(createdAt)
  const formattedDate = format(date, 'MMMM dd, yyyy')

  return (
    <li className={classes.article__card}>
      <div className={classes['article__header-wrapper']}>
        <div className={classes['article__header-text']}>
          <div className={classes['article__header-title']}>
            <Link style={{ textDecoration: 'none' }} to={`/articles/${slug}`}>
              <h2 className={classes.article__title}>{title}</h2>
            </Link>
            {CreateInputHeart(slug, favorited, favoritesCount)}
          </div>
          {CreateTags(tagList)}
          <div className={classes['article__description-line']}>
            <p className={classes['article__description-text']}>{description}</p>
          </div>
        </div>
        <div className={classes['article__author-interface']}>
          <div className={classes.article__author}>
            <div className={classes['article__author-profile']}>
              <div className={classes['article__author-profile-name']}>{author.username}</div>
              <p className={classes['article__author-profile-date']}>{formattedDate}</p>
            </div>
            <img className={classes['article__author-profile-img']} src={author.image} alt="photo" />
          </div>
          {children && <div className={classes['article__interface-buttons']}>{children}</div>}
        </div>
      </div>
      {body && (
        <div className={styles.markdownContent}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      )}
    </li>
  )
}
