/* eslint-disable react-refresh/only-export-components */
import { withCreateArticle } from '../../HOC'
import { IArticleFormProps } from '../../types'

import ArticleFormComponent from './ArticleFormComponent/ArticleFormComponent'

const CreateArticleForm = ({
  tagList,
  register,
  handleRemoveTag,
  handleAddTag,
  handleSubmit,
  onSubmit,
  isSuccessCreate,
  isSuccessEdit,
  load,
  errorCreate,
  errorEdit,
  errorValidate,
}: IArticleFormProps) => {
  return (
    <ArticleFormComponent
      isSuccessCreate={isSuccessCreate}
      isSuccessEdit={isSuccessEdit}
      errorEdit={errorEdit}
      errorCreate={errorCreate}
      load={load}
      title={'Create Article'}
      tagList={tagList}
      register={register}
      handleRemoveTag={handleRemoveTag}
      handleAddTag={handleAddTag}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errorValidate={errorValidate}
    />
  )
}

export default withCreateArticle(CreateArticleForm)
