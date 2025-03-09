import { UiButton } from '../../../shared/ui/Button/UiButton'
import { UiProfileName } from '../../../entities/user/ui'

import classes from './Header.module.scss'

export function HeaderWidget({ login = false }) {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <h1 className={classes.header__title}>Realworld Blog</h1>
        <div className={classes.header__auth}>
          <UiButton text="Sign In" variant="normal" type="button" handler={() => {}} />
          {login && <UiProfileName />}
          <UiButton text="Sign Up" variant="primary" type="button" handler={() => {}} />
        </div>
      </div>
    </header>
  )
}
