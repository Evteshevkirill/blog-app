import { FieldValues, UseFormHandleSubmit } from 'react-hook-form'

export interface IUserFormComponentProps {
  title: string
  submitText?: string
  callText?: string
  linkText?: string
  children: React.ReactNode
  onSubmit: (data: FieldValues) => void
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  errorName: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
  load: boolean
  isSuccess: boolean
  isValid: boolean
}
