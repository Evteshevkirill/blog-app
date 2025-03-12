import { Outlet } from 'react-router'

import { HeaderWidget } from '../../widgets/Header/HeaderWidget'

import classes from './Layout.module.scss'

export function Layout() {
  return (
    <>
      <HeaderWidget />
      <section className={classes.main}>
        <Outlet />
      </section>
    </>
  )
}
