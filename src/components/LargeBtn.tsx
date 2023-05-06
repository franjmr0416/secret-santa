import { ButtonHTMLAttributes } from 'react'

interface LargeBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icono?: string
}
const LargeBtn = ({ children, ...props }: LargeBtnProps) => {
  return (
    <button
      {...props}
      className='w-full text-xl font-extrabold text-primary_black hover:text-white border-solid border-2 border-primary_black p-4 rounded-2xl bg-primary_yellow shadow-neo-down hover:bg-primary_black'
    >
      {children}
    </button>
  )
}

export default LargeBtn
