import { Input } from '../../../ui'
import { ArticleTags } from './ArticleTags'

import { IArticleFormProps } from '../../../types'

import classes from '../stylesForms.module.scss'
import styles from '../../styles/buttons.module.scss'
import { UiAlert, UiSpinner } from '../../uiComponents'

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
        <Input
          label="Title"
          register={register}
          registerName="title"
          required={true}
          type="text"
          placeholder="Title"
          value={article && article.title}
        />
        <Input
          label="Short Description"
          register={register}
          registerName="description"
          required={true}
          type="text"
          placeholder="Short Description"
          value={article && article.description}
        />
        <div className={classes.form__group}>
          <label htmlFor="text">Text</label>
          <textarea
            {...register('text', {
              value: `${article ? article.body : ''}`,
              required: true,
            })}
            className={`${classes['input-form']} ${classes['input-form-text']}`}
            placeholder="Text"
          />
        </div>
        <div className={classes.form__tags}>
          <div className={classes['form__tags-wrapper']}>
            <div className={classes['form__tags-inputs']}>
              <label htmlFor="tags">Tags</label>
              <ArticleTags register={register} tagList={tagList} handleRemoveTag={handleRemoveTag} />
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
