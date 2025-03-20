import { validateMessage } from './validateMessage'

import classes from '../stylesForms.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface IEmailInputProps {
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

export const EmailInput = ({ register, errorsValidate, errorApi, value }: IEmailInputProps) => {
  return (
    <>
      <div className={classes.form__group}>
        <label htmlFor="email">Email address</label>
        <input
          {...register('email', {
            required: 'Email address is required',
            value: value && value,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Некорректный email',
            },
          })}
          placeholder="Email address"
          type="email"
          className={`${classes['input-form']} ${(errorsValidate?.email || errorApi) && classes.error}`}
        />
        {errorsValidate?.email && validateMessage(errorsValidate, 'email')}
      </div>
    </>
  )
}
