import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FieldValues } from 'react-hook-form'
import { user } from './userCookie'

const baseUrl = 'https://blog-platform.kata.academy/api'

export const userApi = createApi({
  reducerPath: 'postRegistration',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    postRegistration: build.mutation({
      query: (user: FieldValues) => ({
        url: `/users`,
        method: 'POST',
        body: {
          user: {
            username: user.username,
            email: user.email,
            password: user.password,
          },
        },
      }),
    }),
    postLogIn: build.mutation({
      query: (user: FieldValues) => ({
        url: `/users/login`,
        method: 'POST',
        body: {
          user: {
            email: user.email as string,
            password: user.password as string,
          },
        },
      }),
    }),
    putEditProfileUser: build.mutation({
      query: (userData) => ({
        url: `/user`,
        method: 'PUT',
        headers: { Authorization: `Token ${user.token}` },
        body: {
          user: {
            password: userData.password,
            email: userData.email,
            image: userData.image,
            username: userData.username,
          },
        },
      }),
    }),
  }),
})

export const { usePostRegistrationMutation, usePostLogInMutation, usePutEditProfileUserMutation } = userApi
