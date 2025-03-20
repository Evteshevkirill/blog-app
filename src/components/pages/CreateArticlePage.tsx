import { CreateArticleForm } from '../ui/forms'
import { IArticleFormProps } from '../types'

export const CreateArticlePage = () => {
  return <CreateArticleForm {...({} as IArticleFormProps)} />
}
