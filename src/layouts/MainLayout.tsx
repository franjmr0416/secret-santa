import { ReactNode } from 'react'
import { supabaseClient } from '../services/supabase'

export interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <button onClick={() => supabaseClient.auth.signOut()}>Logout</button>
      {children}
    </div>
  )
}

export default MainLayout
