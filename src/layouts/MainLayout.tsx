import { ReactNode } from 'react'
import Navbar from './Navbar'

export interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
