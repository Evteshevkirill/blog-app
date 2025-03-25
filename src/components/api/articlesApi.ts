import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { user } from './userCookie'

const baseUrl = 'https://blog-platform.kata.academy/api'

export const articlesApi = createApi({
  reducerPath: 'getArticlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getAllArticles: build.query({
      query: ({ limit, offset, isAuthenticated }: { limit: number; offset: number; isAuthenticated: boolean }) => {
        const headers = isAuthenticated ? { Authorization: `Token ${user.token}` } : {}
        return {
          url: `/articles?limit=${limit}&offset=${offset}`,
          method: 'GET',
          headers,
        }
      },
    }),
    getFullArticle: build.query({
      query: ({ slug, isAuthenticated }) => {
        const headers = isAuthenticated ? { Authorization: `Token ${user.token}` } : {}
        return {
          url: `/articles/${slug}`,
          method: 'GET',
          headers,
        }
      },
    }),
    postCreateArticle: build.mutation({
      query: ({ article }) => ({
        url: `/articles`,
        method: 'POST',
        headers: { Authorization: `Token ${user.token}` },
        body: {
          article: {
            title: article.title,
            description: article.description,
            body: article.text,
            tagList: article.tagList,
          },
        },
      }),
    }),
    postEditArticle: build.mutation({
      query: ({ slug, article }) => ({
        url: `/articles/${slug}`,
        method: 'PUT',
        headers: {
          Authorization: `Token ${user.token}`,
        },
        body: {
          article: {
            title: article.title,
            description: article.description,
            body: article.text,
            tagList: article.tagList,
          },
        },
      }),
    }),
    deleteArticle: build.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
        method: 'DELETE',
        headers: { Authorization: `Token ${user.token}` },
      }),
    }),
    postFavoriteArticle: build.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: 'POST',
        headers: { Authorization: `Token ${user.token}` },
      }),
    }),
    deleteFavorite: build.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: 'DELETE',
        headers: { Authorization: `Token ${user.token}` },
      }),
    }),
  }),
})

export const {
  useGetAllArticlesQuery,
  useGetFullArticleQuery,
  usePostCreateArticleMutation,
  usePostEditArticleMutation,
  usePostFavoriteArticleMutation,
  useDeleteFavoriteMutation,
  useDeleteArticleMutation,
} = articlesApi
