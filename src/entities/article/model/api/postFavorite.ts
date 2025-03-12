import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://blog-platform.kata.academy/api'

export const postFavorite = createApi({
  reducerPath: 'postFavoriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    postFavoriteArticle: build.mutation({
      query: ({ slug, checked }) => ({
        url: `articles/${slug}/favorite`,
        method: 'POST',
        body: { favorited: checked },
      }),
    }),
  }),
})

export const { usePostFavoriteArticleMutation } = postFavorite
