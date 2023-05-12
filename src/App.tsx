import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import AccountDetails from './pages/AccountDetails'
import Login from './pages/Login'
import NotFound404 from './pages/NotFound404'
import { supabaseClient } from './services/supabase'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/config' element={<AccountDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
  )
}

export default App
