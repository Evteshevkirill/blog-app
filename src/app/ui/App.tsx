import { Route, Routes } from 'react-router'
import { HomePage, SignInPage, SignUpPage, Layout } from '../../pages'

import classes from './App.module.scss'

export function App() {
  return (
    <section className={classes.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articles" element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </section>
  )
}
