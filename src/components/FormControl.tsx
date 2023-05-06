import { FormEvent } from 'react'

interface FormControlProps {
  name: string
  type: string
  value: string
  label: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
}

const FormControl = ({
  name,
  type,
  label,
  value,
  onChange,
}: FormControlProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='font-medium text-xl text-[#18191f]'>
        {label}
      </label>
      <input
        className='font-medium text-xl text-[#18191f] rounded-2xl border-solid border-2 border-black p-2'
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default FormControl
