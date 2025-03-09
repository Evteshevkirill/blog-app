import { IInputProps } from '../../types/types'

import classes from './UiInput.module.scss'

export function UiInput({ type, handel, value, placeholder, className }: IInputProps) {
  return (
    <input
      type={type}
      onChange={handel}
      value={value}
      placeholder={placeholder}
      className={classes[className as keyof typeof classes]}
    />
  )
}
