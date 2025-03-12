import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://blog-platform.kata.academy/api'

export const getAllArticles = createApi({
  reducerPath: 'getArticlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getAllArticles: build.query({
      query: ({ limit, offset }) => `/articles?limit=${limit}&offset=${offset}`,
    }),
  }),
})

export const { useGetAllArticlesQuery } = getAllArticles
