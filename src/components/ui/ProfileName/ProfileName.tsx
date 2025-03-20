import profile from '../../assets/profile.png'

import classes from './profileName.module.scss'

export function ProfileName({ name, img }) {
  return (
    <div className={classes.article__author}>
      <div className={classes['article__profile']}>
        <div className={classes['article__profile-name']}>{name}</div>
      </div>
      <img className={classes['article__profile-img']} src={img || profile} alt="photo" />
    </div>
  )
}
