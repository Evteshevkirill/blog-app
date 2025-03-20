import classes from './articleCard.module.scss'

export const CreateTags = (tags: string[]) => {
  return (
    <div className={classes.article__tags}>
      {tags.map((tag) => (
        <span key={+new Date() + Math.random() * 10} className={classes.article__tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
