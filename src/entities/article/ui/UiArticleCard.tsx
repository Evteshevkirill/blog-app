import profile from '../../../shared/assets/profile.png'

import classes from './articleCard.module.scss'

export function UiArticleCard() {
  return (
    <li className={classes.article__card}>
      <div className={classes['article__header-wrapper']}>
        <div className={classes['article__header-text']}>
          <div className={classes['article__header-title']}>
            <h2 className={classes.article__title}>Some article title</h2>
            <label className={classes['article__heart-container']}>
              <input type="checkbox" className={classes['article__heart-checkbox']} />
              <svg className={classes['article__heart-svg']} viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className={classes['article__heart-count']}>0</span>
            </label>
          </div>
          <div className={classes.article__tags}>
            <span className={classes.article__tag}>#tag</span>
            <span className={classes.article__tag}>#tag</span>
          </div>
          <p className={classes['article__description-text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className={classes.article__author}>
          <div className={classes['article__profile']}>
            <div className={classes['article__profile-name']}>Author</div>
            <p className={classes['article__profile-date']}>05.03.2020</p>
          </div>
          <img className={classes['article__profile-img']} src={profile} alt="photo" />
        </div>
      </div>
    </li>
  )
}
