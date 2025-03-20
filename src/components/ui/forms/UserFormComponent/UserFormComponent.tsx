import { Link } from 'react-router'
import { UiAlert, UiSpinner } from '../../uiComponents'

import classes from '../stylesForms.module.scss'
import styles from '../../styles/buttons.module.scss'
import { IUserFormComponentProps } from '../../../types'

export const UserFormComponent = ({
  onSubmit,
  handleSubmit,
  title,
  submitText,
  callText,
  linkText,
  children,
  errorName,
  load,
  isSuccess,
  isValid,
}: IUserFormComponentProps) => {
  let alertMessage = ''
  if (errorName) {
    const message = Object.entries(errorName.data.errors)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    switch (true) {
      case message.includes('email: is already taken.'):
        alertMessage = 'Такой Email уже зарегистрирован.'
        break
      case message.includes('username: is already taken.'):
        alertMessage = 'Такое имя пользователя уже занято.'
        break
      case message.includes('password'):
        alertMessage = 'Не верный email или пароль'
        break
      default:
        break
    }
  }

  return (
    <>
      {load && <UiSpinner />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h2 className={classes.form__title}>{title}</h2>
        {errorName && <UiAlert message={alertMessage} />}
        {children}
        <input type="submit" className={`${styles.buttons} ${styles.primary}`} value={submitText} disabled={!isValid} />
        {isSuccess && <UiAlert message="Успешно" type="success" />}
        {callText && linkText && (
          <p className={classes.form__call}>
            {callText}
            <Link className={classes['form__call-text']} to="/sign-up">
              {linkText}
            </Link>
          </p>
        )}
      </form>
    </>
  )
}
