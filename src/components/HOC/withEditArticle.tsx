/* eslint-disable react-hooks/exhaustive-deps */
import { JSX, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router'

import { useGetFullArticleQuery, usePostEditArticleMutation } from '../api'

import { IArticleFormProps } from '../types'
import { useAuth } from '../App/AuthContext'

const withEditArticle = <T extends object>(
  Component: React.ComponentType<IArticleFormProps>
): ((props: T & IArticleFormProps) => JSX.Element) => {
  return function () {
    const { slug } = useParams()

    const {
      register,
      handleSubmit,
      unregister,
      getValues,
      setValue,
      formState: { errors },
    } = useForm({ mode: 'onChange', reValidateMode: 'onChange', shouldUnregister: false })

    const { isAuthenticated } = useAuth()

    const { data, isLoading, isSuccess, refetch } = useGetFullArticleQuery({
      slug,
      isAuthenticated,
    })

    useEffect(() => {
      refetch()
    }, [])

    const [mutate, { isLoading: isEditLoading, isError: errorEdit, isSuccess: isSuccessEdit }] =
      usePostEditArticleMutation()

    const [tagList, setTags] = useState<string[]>([])

    const handleAddTag = () => {
      setTags([...tagList, ''])
    }

    const handleRemoveTag = (index: number) => {
      const newTags = [...tagList]
      newTags.splice(index, 1)

      setTags(newTags)
      unregister(`tag${index}`)

      const values = getValues()
      const filteredValues = Object.fromEntries(Object.entries(values).filter(([value]) => value !== undefined))

      Object.keys(filteredValues).forEach((key) => {
        setValue(key, filteredValues[key])
      })
    }

    useEffect(() => {
      if (data) {
        setTags([...tagList, ...data.article.tagList])
      }
    }, [data])

    const onSubmit = async (article: FieldValues) => {
      const values = getValues()
      const tagList: string[] = Object.keys(values)
        .filter((key) => key.startsWith('tag'))
        .map((key) => values[key])
      const articleWithoutTags = Object.fromEntries(Object.entries(article).filter(([key]) => !key.startsWith('tag')))
      const articleWithTags = { ...articleWithoutTags, tagList }

      await mutate({ slug, article: articleWithTags })
    }

    return (
      <>
        {isSuccess && (
          <Component
            load={isLoading || isEditLoading}
            errorEdit={errorEdit}
            isSuccessEdit={isSuccessEdit}
            article={data.article}
            tagList={tagList}
            handleSubmit={handleSubmit}
            register={register}
            handleRemoveTag={handleRemoveTag}
            handleAddTag={handleAddTag}
            onSubmit={onSubmit}
            errorValidate={errors}
          />
        )}
      </>
    )
  }
}

export default withEditArticle
