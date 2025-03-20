import { Route, Routes } from 'react-router'
import {
  HomePage,
  SignInPage,
  SignUpPage,
  Layout,
  CreateArticlePage,
  EditArticlePage,
  ArticlePage,
  EditProfilePage,
} from '../pages'
import { AuthProvider } from './AuthContext'

import classes from './App.module.scss'

export function App() {
  return (
    <AuthProvider>
      <section className={classes.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="articles" element={<HomePage />} />
            <Route path="articles/:slug" element={<ArticlePage />} />
            <Route path="articles/:slug/edit" element={<EditArticlePage />} />
            <Route path="profile" element={<EditProfilePage />} />
            <Route path="new-article" element={<CreateArticlePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
        </Routes>
      </section>
    </AuthProvider>
  )
}
