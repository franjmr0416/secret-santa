import { useAtom } from 'jotai'
import FormControl from '../components/FormControl'
import { supabaseClient } from '../services/supabase'
import { auth } from '../store/auth'
import { FormEvent, useState } from 'react'
import LargeBtn from '../components/LargeBtn'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [isAuth, setIsAuth] = useAtom(auth)
  const [userData, setUserData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleField = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    setUserData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    const { error } = await supabaseClient.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    })
    if (error) {
      alert(error.message)
    } else {
      alert('OK')
      setIsAuth(true)
      navigate('/', { replace: true })
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-screen p-4'>
      <div className='flex flex-col justify-center items-center w-full max-w-[450px] h-full gap-4'>
        <h1 className='font-extrabold text-4xl self-start'>Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-4 w-full'>
          <FormControl
            name={'email'}
            label={'Email'}
            type={'email'}
            value={userData.email}
            onChange={handleField}
          />
          <FormControl
            name={'password'}
            label={'Password'}
            type={'password'}
            value={userData.password}
            onChange={handleField}
          />
          <div className='pt-8 flex flex-col gap-4'>
            <LargeBtn>Sign In</LargeBtn>
            <p>
              You are new?
              <Link
                to={'/signup'}
                className='text-[#f95a2c] hover:text-primary_yellow'
              >
                &nbsp; Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
