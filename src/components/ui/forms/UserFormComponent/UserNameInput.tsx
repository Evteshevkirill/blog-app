import { validateMessage } from '../validateMessage'

import classes from '../stylesForms.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface IUserNameInputProps {
  register: UseFormRegister<FieldValues>
  errorsValidate: FieldErrors
  errorApi?: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
  value?: string
}

export const UserNameInput = ({ register, errorsValidate, errorApi, value }: IUserNameInputProps) => {
  return (
    <>
      <div className={classes.form__group}>
        <label htmlFor="username">Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            value: value && value,
            pattern: {
              value: /^[a-z0-9]+$/i,
              message: 'Должен содержать только латинские буквы и цифры',
            },
            minLength: {
              value: 3,
              message: '*Минимум 3 символа',
            },
            maxLength: {
              value: 20,
              message: '*Не более 20-ти символов',
            },
          })}
          maxLength={20}
          placeholder="Username"
          type="text"
          className={`${classes['input-form']} ${(errorsValidate?.username || errorApi) && classes.error}`}
        />
        {validateMessage(errorsValidate, 'username')}
      </div>
    </>
  )
}
