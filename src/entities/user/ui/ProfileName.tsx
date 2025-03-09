import classes from './profileName.module.scss'

import profile from '../../../shared/assets/profile.png'

export function UiProfileName() {
  return (
    <div className={classes.article__author}>
      <div className={classes['article__profile']}>
        <div className={classes['article__profile-name']}>John Doe</div>
      </div>
      <img className={classes['article__profile-img']} src={profile} alt="photo" />
    </div>
  )
}
