import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Layout from './components/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { NhostClient, NhostReactProvider } from '@nhost/react'

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || '',
})

function App() {
  return (
    <>
      <NhostReactProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path='sign-up' element={<SignUp />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <Toaster />
      </NhostReactProvider>
    </>
  )
}

export default App
