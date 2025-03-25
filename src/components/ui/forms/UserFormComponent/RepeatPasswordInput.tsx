import { validateMessage } from '../validateMessage'

import classes from '../stylesForms.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface IRepeatPasswordInputProps {
  register: UseFormRegister<FieldValues>
  errorsValidate: FieldErrors
  validate?: (value: string) => boolean | string
  label: string
}

export const RepeatPasswordInput = ({ register, errorsValidate, validate, label }: IRepeatPasswordInputProps) => {
  return (
    <>
      <div className={classes.form__group}>
        <label htmlFor="repeat-password">{label}</label>
        <input
          {...register('repeatPassword', {
            required: 'Password is required',
            validate,
          })}
          maxLength={40}
          placeholder="Repeat Password"
          type="password"
          className={`${classes['input-form']} ${errorsValidate?.repeatPassword && classes.error}`}
        />
        {errorsValidate?.repeatPassword && validateMessage(errorsValidate, 'repeatPassword')}
      </div>
    </>
  )
}
