import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://blog-platform.kata.academy/api'

export const getFullArticle = createApi({
  reducerPath: 'getFullArticleApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getFullArticle: build.query({
      query: ({ slug }) => `/articles/${slug}`,
    }),
  }),
})

export const { useGetFullArticleQuery } = getFullArticle
