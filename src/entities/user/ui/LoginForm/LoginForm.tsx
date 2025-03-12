import { Link } from 'react-router'
import { UiInput, UiButton } from '../../../../shared/ui'

import classes from '../stylesForms.module.scss'

export const UiLoginForm = () => {
  return (
    <form className={classes.form}>
      <h2 className={classes.form__title}>Sign In</h2>
      <div className={classes.form__group}>
        <label htmlFor="username">Email address</label>
        <UiInput type="text" id="username" placeholder="Email address" className="input-form" />
      </div>
      <div className={classes.form__group}>
        <label htmlFor="password">Password</label>
        <UiInput type="text" id="password" placeholder="Password" className="input-form" />
      </div>
      <UiButton text="Login" variant="primary" type="submit" handler={() => {}} />
      <p className={classes.form__call}>
        Don't have an account?{' '}
        <Link className={classes['form__call-text']} to="/sign-up">
          Sign Up
        </Link>
      </p>
    </form>
  )
}
