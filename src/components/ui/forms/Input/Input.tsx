import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

import classes from '../stylesForms.module.scss'

interface IInputProps {
  label?: string
  register: UseFormRegister<FieldValues>
  registerName: string
  required?: boolean
  type: string
  className?: string
  placeholder: string
  value?: string
  pattern?: ValidationRule<RegExp>
}
export const Input = ({
  label,
  register,
  registerName,
  required = false,
  type,
  className = '',
  placeholder,
  value = '',
  pattern,
}: IInputProps) => {
  return (
    <div className={classes.form__group}>
      <label htmlFor={label}>{label}</label>
      <input
        {...register(`${registerName}`, {
          value: value,
          required: required,
          pattern: pattern,
        })}
        placeholder={placeholder}
        type={type}
        className={`${classes['input-form']} ${classes[className]}`}
      />
    </div>
  )
}
