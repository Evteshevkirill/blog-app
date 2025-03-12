import { Link } from 'react-router'
import { UiInput, UiButton } from '../../../../shared/ui'

import classes from '../stylesForms.module.scss'

export const UiCreateAccountForm = () => {
  return (
    <form className={classes.form}>
      <h2 className={classes.form__title}>Create New Account</h2>
      <div className={classes.form__group}>
        <label htmlFor="username">Username</label>
        <UiInput type="text" id="username" placeholder="Username" className="input-form" />
      </div>
      <div className={classes.form__group}>
        <label htmlFor="Email address">Email address</label>
        <UiInput type="text" id="Email address" placeholder="Email address" className="input-form" />
      </div>
      <div className={classes.form__group}>
        <label htmlFor="Password">Password</label>
        <UiInput type="text" id="Password" placeholder="Password" className="input-form" />
      </div>
      <div className={classes.form__group}>
        <label htmlFor="Repeat Password">Repeat Password</label>
        <UiInput type="text" id="Repeat Password" placeholder="Repeat Password" className="input-form" />
      </div>
      <UiButton text="Create" variant="primary" type="submit" handler={() => {}} />
      <p className={classes.form__call}>
        Don't have an account?{' '}
        <Link className={classes['form__call-text']} to="/sign-in">
          Sign In
        </Link>
      </p>
    </form>
  )
}
