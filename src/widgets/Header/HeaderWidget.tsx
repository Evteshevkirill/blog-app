import { Link } from 'react-router'
import { UiButton } from '../../shared'
import { UiProfileName } from '../../entities'

import classes from './header.module.scss'

export const HeaderWidget = ({ login = false }) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <Link className={classes.header__link} to="/">
          <h1 className={classes.header__title}>Realworld Blog</h1>
        </Link>
        <div className={classes.header__auth}>
          <Link className={classes['header__auth-link']} to="/sign-in">
            <UiButton text="Sign In" variant="text" type="button" handler={() => {}} />
          </Link>
          {login && <UiProfileName />}
          <Link className={classes['header__auth-link']} to="/sign-up">
            <UiButton text="Sign Up" variant="default" type="button" handler={() => {}} />
          </Link>
        </div>
      </div>
    </header>
  )
}
