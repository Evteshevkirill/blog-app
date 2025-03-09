import { IButtonProps } from '../../types/types'

import classes from './UiButton.module.scss'

export function UiButton({ text, variant = 'primary', type, handler, disabled }: IButtonProps) {
  return (
    <button type={type} className={`${classes.buttons} ${classes[variant]}`} onClick={handler} disabled={disabled}>
      {text}
    </button>
  )
}
