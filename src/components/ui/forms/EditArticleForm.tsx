/* eslint-disable react-refresh/only-export-components */
import { UiSpinner } from '../uiComponents'

import { IArticleFormProps } from '../../types'
import { withEditArticle } from '../../HOC'
import ArticleFormComponent from './ArticleFormComponent/ArticleFormComponent'

const EditArticleForm = ({
  load,
  errorEdit,
  article,
  tagList,
  handleAddTag,
  handleRemoveTag,
  handleSubmit,
  register,
  onSubmit,
  isSuccessEdit,
}: IArticleFormProps) => {
  return (
    <>
      {load && <UiSpinner />}
      <ArticleFormComponent
        title={'Edit article'}
        article={article}
        tagList={tagList}
        register={register}
        handleRemoveTag={handleRemoveTag}
        handleAddTag={handleAddTag}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isSuccessEdit={isSuccessEdit}
        errorEdit={errorEdit}
      />
    </>
  )
}

export default withEditArticle(EditArticleForm)
