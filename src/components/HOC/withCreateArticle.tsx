import { JSX, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { usePostCreateArticleMutation } from '../api'

import { IArticleFormProps } from '../types/ArticleFormProps'
import { useNavigate } from 'react-router'

const withCreateArticle = <T extends object>(
  Component: React.ComponentType<IArticleFormProps>
): ((props: T & IArticleFormProps) => JSX.Element) => {
  return function () {
    const {
      register,
      handleSubmit,
      unregister,
      getValues,
      formState: { errors },
    } = useForm({ mode: 'onChange', reValidateMode: 'onChange', shouldUnregister: false })

    const [mutate, { isLoading, isError: errorCreate, isSuccess: isSuccessCreate }] = usePostCreateArticleMutation()

    const navigate = useNavigate()

    const [tagList, setTags] = useState<string[]>([''])

    useEffect(() => {
      if (isSuccessCreate) {
        navigate('/')
        localStorage.setItem('page', '1')
      }
    }, [isSuccessCreate, navigate])

    const handleAddTag = () => {
      setTags([...tagList, ''])
    }

    const handleRemoveTag = (index: number) => {
      const newTags = [...tagList]
      newTags.splice(index, 1)
      setTags(newTags)
      unregister(`tag${index}`)
    }

    const onSubmit = async (article: FieldValues) => {
      const values = getValues()
      const tagList: string[] = Object.keys(values)
        .filter((key) => key.startsWith('tag'))
        .map((key) => values[key])
      const articleWithoutTags = Object.fromEntries(Object.entries(article).filter(([key]) => !key.startsWith('tag')))
      const articleWithTags = { ...articleWithoutTags, tagList }

      await mutate({ article: articleWithTags })
    }

    return (
      <Component
        load={isLoading}
        errorCreate={errorCreate}
        isSuccessCreate={isSuccessCreate}
        register={register}
        tagList={tagList}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errorValidate={errors}
      />
    )
  }
}

export default withCreateArticle
