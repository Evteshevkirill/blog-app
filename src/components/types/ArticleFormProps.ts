import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface IArticleFormProps {
  load?: boolean
  errorEdit?: boolean
  errorCreate?: boolean
  article?: article
  tagList: string[]
  handleAddTag: () => void
  handleRemoveTag: (index: number) => void
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  register: UseFormRegister<FieldValues>
  title?: string
  onSubmit: (article: FieldValues) => void
  isSuccessEdit?: boolean
  isSuccessCreate?: boolean
  errorValidate: FieldErrors<FieldValues>
}

type article = {
  slug: string
  title: string
  description: string
  createdAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
  tagList: string[]
  body: string
}
