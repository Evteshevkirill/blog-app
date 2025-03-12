import { configureStore } from '@reduxjs/toolkit'

import { getAllArticles } from '../../features/articles/model/api'
import { postFavorite } from '../../entities/article/model'

export const store = configureStore({
  reducer: {
    [getAllArticles.reducerPath]: getAllArticles.reducer,
    [postFavorite.reducerPath]: postFavorite.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllArticles.middleware).concat(postFavorite.middleware),
})
