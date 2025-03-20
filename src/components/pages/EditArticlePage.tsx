import { EditArticleForm } from '../ui/forms'
import { IArticleFormProps } from '../types'
export const EditArticlePage = () => {
  return (
    <>
      <EditArticleForm {...({} as IArticleFormProps)} />
    </>
  )
}
