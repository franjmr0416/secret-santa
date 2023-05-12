import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRoutes {
  isAuth: boolean
}

const ProtectedRoutes = ({ isAuth }: ProtectedRoutes) => {
  return isAuth ? <Outlet /> : <Navigate to='/login' replace />
}
export default ProtectedRoutes
