import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  handler: () => void
  disabled?: boolean
  variant: string
  type: 'button' | 'submit'
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  handel: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  className?: string
}
