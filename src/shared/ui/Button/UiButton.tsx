import { IButtonProps } from '../../types/types'

import classes from './UiButton.module.scss'

export function UiButton({ text, variant, type = 'button', handler, disabled = false }: IButtonProps) {
  return (
    <button type={type} className={`${classes.buttons} ${classes[variant]}`} onClick={handler} disabled={disabled}>
      {text}
    </button>
  )
}
