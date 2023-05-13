import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { supabaseClient } from '../services/supabase'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='flex w-full items-center justify-evenly py-4'>
      <nav
        className='relative'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <FaBars className='hover:cursor-pointer text-3xl' id={'menu_icon'} />
        <ul id='menu_options' className={'absolute' + isOpen ? '' : ' hidden'}>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
          <li>Opcion 3</li>
        </ul>
      </nav>
      <h2 className='font-extrabold text-3xl'>
        Gif<span className='font-medium'>ter</span>
      </h2>
      <FaSignOutAlt
        className='hover:cursor-pointer text-3xl'
        onClick={() => supabaseClient.auth.signOut()}
      />
    </header>
  )
}

export default Navbar
