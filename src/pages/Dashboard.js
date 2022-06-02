import styles from '../styles/pages/Dashboard.module.css'

import { useOutletContext } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useProviderLink } from '@nhost/react'
import { useEffect } from 'react'

const Dashboard = () => {
  const { user } = useOutletContext()
  const { google } = useProviderLink({ redirectTo: '/dashboard' })
  useEffect(() => {
    console.log('goo', google)
  }, [google])
  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role='img' alt='hello'>
            👋
          </span>
        </p>
        <a href={google}>Authenticate with Google</a>

        <p className={styles['info-text']}>
          Edit the <code>src/pages/Dashboard.js</code> file to populate this
          page.
        </p>
      </div>
    </>
  )
}

export default Dashboard
