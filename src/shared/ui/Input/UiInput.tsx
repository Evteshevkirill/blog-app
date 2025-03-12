import { useState } from 'react'

import { IInputProps } from '../../types/types'

import classes from './UiInput.module.scss'

export function UiInput({ type, placeholder, className, id }: IInputProps) {
  const [value, setValue] = useState('')

  const handleChangeValue = (value: string) => {
    setValue(value)
  }
  return (
    <input
      id={id}
      type={type}
      onChange={(e) => handleChangeValue(e.target.value)}
      value={value}
      placeholder={placeholder}
      className={classes[className as keyof typeof classes]}
    />
  )
}
