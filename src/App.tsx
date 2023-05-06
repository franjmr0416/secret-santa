import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AccountDetails from './pages/AccountDetails'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/config' element={<AccountDetails />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
