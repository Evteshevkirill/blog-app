import { ArticleTags } from './ArticleTags'

import { IArticleFormProps } from '../../../types'

import classes from '../stylesForms.module.scss'
import styles from '../../styles/buttons.module.scss'
import { UiAlert, UiSpinner } from '../../uiComponents'
import { validateMessage } from '../validateMessage'

const ArticleFormComponent = ({
  register,
  tagList,
  handleRemoveTag,
  handleAddTag,
  title,
  article,
  onSubmit,
  handleSubmit,
  isSuccessEdit,
  isSuccessCreate,
  load,
  errorEdit,
  errorCreate,
  errorValidate,
}: IArticleFormProps) => {
  return (
    <>
      {load && <UiSpinner />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes['form__article']}>
        <h2 className={classes.form__title}>{title}</h2>
        {errorEdit && <UiAlert message="Не удалось редактировать статью" />}
        {errorCreate && <UiAlert message="Не удалось создать статью" />}
        {isSuccessEdit && <UiAlert message="Статья успешно отредактированна" type="success" />}
        {isSuccessCreate && <UiAlert message="Статья успешно создана" type="success" />}
        <div className={classes.form__group}>
          <label htmlFor="Title">Title</label>
          <input
            {...register('title', {
              value: article ? article.title : '',
              required: 'Поле обязательно для заполнения',
            })}
            placeholder="Title"
            type="text"
            className={`${classes['input-form']} ${errorValidate?.title && classes.error}`}
          />
          {errorValidate?.title && validateMessage(errorValidate, 'title')}
        </div>
        <div className={classes.form__group}>
          <label htmlFor="Short Description">Short Description</label>
          <input
            {...register('description', {
              value: article ? article.description : '',
              required: 'Поле обязательно для заполнения',
            })}
            placeholder="Short Description"
            type="text"
            className={`${classes['input-form']} ${errorValidate?.description && classes.error}`}
          />
          {errorValidate?.description && validateMessage(errorValidate, 'description')}
        </div>
        <div className={classes.form__group}>
          <label htmlFor="text">Text</label>
          <textarea
            {...register('text', {
              value: `${article ? article.body : ''}`,
              required: 'Поле обязательно для заполнения',
            })}
            className={`${classes['input-form']} ${classes['input-form-text']} ${errorValidate?.text && classes.error}`}
            placeholder="Text"
          />
          {errorValidate?.text && validateMessage(errorValidate, 'text')}
        </div>
        <div className={classes.form__tags}>
          <div className={classes['form__tags-wrapper']}>
            <div className={classes['form__tags-inputs']}>
              <label htmlFor="tags">Tags</label>
              <ArticleTags
                register={register}
                tagList={tagList}
                handleRemoveTag={handleRemoveTag}
                errorValidate={errorValidate}
              />
            </div>
            <div className={classes['form__tags-add-button']}>
              <button className={`${styles.buttons} ${styles.normal}`} type="button" onClick={handleAddTag}>
                Add tag
              </button>
            </div>
          </div>
          <input className={`${styles.buttons} ${styles.primary}`} type="submit" value="Send" />
        </div>
      </form>
    </>
  )
}

export default ArticleFormComponent
