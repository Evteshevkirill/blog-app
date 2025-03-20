import { Link, useNavigate } from 'react-router'
import { useEffect } from 'react'

import { user, useGetAllArticlesQuery } from '../../api'

import { ProfileName } from '../ProfileName/ProfileName'

import classes from './header.module.scss'
import styles from '../styles/buttons.module.scss'
import { useAuth } from '../../App/AuthContext'

export const HeaderWidget = () => {
  const { isAuthenticated, login, logout } = useAuth()

  const navigate = useNavigate()

  const { refetch } = useGetAllArticlesQuery({
    limit: 5,
    offset: 0,
    isAuthenticated,
  })

  useEffect(() => {
    if (user) {
      login()
    }
  }, [isAuthenticated, login])

  const handleLogoClick = () => {
    refetch()
  }

  const LogOut = () => {
    document.cookie = 'User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    logout()
    navigate('/')
    window.location.reload()
  }

  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <Link className={classes.header__link} to="/" onClick={handleLogoClick}>
          <h1 className={classes.header__title}>Realworld Blog</h1>
        </Link>
        <div className={classes.header__auth}>
          {isAuthenticated ? (
            <>
              <Link to="/new-article">
                <button style={{ padding: '8px 12px' }} className={`${styles.buttons} ${styles.default}`} type="button">
                  Create Article
                </button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/profile">
                <ProfileName name={user.username} img={user?.image} />
              </Link>
              <button className={`${styles.buttons} ${styles.text}`} type="button" onClick={LogOut}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link className={classes['header__auth-link']} to="/sign-in">
                <button className={`${styles.buttons} ${styles.text}`} type="button">
                  Sign In
                </button>
              </Link>
              <Link className={classes['header__auth-link']} to="/sign-up">
                <button className={`${styles.buttons} ${styles.default}`} type="button">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
