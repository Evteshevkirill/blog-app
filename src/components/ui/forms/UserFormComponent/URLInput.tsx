import { validateMessage } from '../validateMessage'

import classes from '../stylesForms.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface IURLInputProps {
  register: UseFormRegister<FieldValues>
  errorsValidate: FieldErrors
  value?: string
}

export const URLInput = ({ register, errorsValidate, value }: IURLInputProps) => {
  return (
    <>
      <div className={classes.form__group}>
        <label htmlFor="avatar">Avatar Image (url)</label>
        <input
          {...register('avatar', {
            required: false,
            value: value && value,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Некорректный email',
            },
          })}
          placeholder="Avatar Image"
          type="url"
          className={`${classes['input-form']} ${errorsValidate?.url}`}
        />
        {errorsValidate?.email && validateMessage(errorsValidate, 'avatar')}
      </div>
    </>
  )
}
