import { validateMessage } from './validateMessage'

import classes from '../stylesForms.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface IPasswordInputProps {
  register: UseFormRegister<FieldValues>
  errorsValidate: FieldErrors
  validate?: (value: string) => boolean | string
  errorApi?: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
  label: string
}

export const PasswordInput = ({ register, errorsValidate, errorApi, label }: IPasswordInputProps) => {
  return (
    <>
      <div className={classes.form__group}>
        <label htmlFor="password">{label}</label>
        <input
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^\S+$/,
              message: 'Пароль не может состоять только из пробелов',
            },
            minLength: {
              value: 6,
              message: '*Минимум 6 символов',
            },
            maxLength: {
              value: 40,
              message: '*Не более 40 символов',
            },
          })}
          maxLength={40}
          placeholder="Password"
          type="password"
          className={`${classes['input-form']} ${errorsValidate?.password || (errorApi && classes.error)}`}
        />
        {errorsValidate?.password && validateMessage(errorsValidate, 'password')}
      </div>
    </>
  )
}
