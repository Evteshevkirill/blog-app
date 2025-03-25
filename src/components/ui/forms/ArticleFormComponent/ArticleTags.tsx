import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import classes from '../stylesForms.module.scss'
import styles from '../../styles/buttons.module.scss'
import { validateMessage } from '../validateMessage'

interface IArticleTagsProps {
  register: UseFormRegister<FieldValues>
  tagList: string[]
  handleRemoveTag: (index: number) => void
  errorValidate: FieldErrors<FieldValues>
}

export const ArticleTags = ({ register, tagList, handleRemoveTag, errorValidate }: IArticleTagsProps) => {
  return (
    <>
      {tagList.map((tag, index) => (
        <div key={index} className={classes['form__new-tag']}>
          <div className={classes.form__group}>
            <input
              {...register(`tag${index}`, {
                value: `${tag}`,
                validate: (value) => (value.trim() === '' ? 'Не должно быть пустым, удалите или заполните' : true),
              })}
              style={{ width: '300px' }}
              className={`${classes['input-form']} ${errorValidate[`tag${index}`] && classes.error}`}
              type="text"
              placeholder="Tag"
            />
            {errorValidate[`tag${index}`] && validateMessage(errorValidate, `tag${index}`)}
          </div>
          <div>
            <button
              className={`${styles.buttons} ${styles.danger}`}
              type="button"
              onClick={() => handleRemoveTag(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
