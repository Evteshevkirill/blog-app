import { FieldValues, UseFormRegister } from 'react-hook-form'

import classes from '../stylesForms.module.scss'
import styles from '../../styles/buttons.module.scss'

interface IArticleTagsProps {
  register: UseFormRegister<FieldValues>
  tagList: string[]
  handleRemoveTag: (index: number) => void
}

export const ArticleTags = ({ register, tagList, handleRemoveTag }: IArticleTagsProps) => {
  return (
    <>
      {tagList.map((tag, index) => (
        <div key={index} className={classes['form__new-tag']}>
          <div className={classes.form__group}>
            <input
              {...register(`tag${index}`, {
                value: `${tag}`,
                validate: (value) => value.trim() !== '',
              })}
              style={{ width: '300px' }}
              className={classes['input-form']}
              type="text"
              placeholder="Tag"
            />
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
