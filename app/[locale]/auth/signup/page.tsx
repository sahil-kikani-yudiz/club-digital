"use client"
import AuthSidebar from '@/shared/ui/authSidebar'
import CommonInput from '@/shared/ui/commonInput'
import Link from 'next/link'
import { useForm } from 'react-hook-form'


export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  return (
    <div className='flex h-full w-full'>
     <AuthSidebar labels={['New here?', 'Sign up to become', 'part of our community']} />
      <div className='w-full h-full flex flex-col justify-center items-center text-left'>
        <div className='md:w-[562px] sm:w-fit h-fit p-4 '>
        <CommonInput  errors={errors} register={register} placeholder='Enter Your Email' label='Email Address' name='sEmail' className='mb-2 p-3' type='email' />
        <CommonInput errors={errors} register={register} placeholder='Enter Password' label='Password' name='sEmail' className='mb-2 p-3' type='password' />
        <button className='w-full bg-primary-500 border rounded-lg text-theme p-4 text-xl mt-4'>Sign Up</button>
        <div className='border rounded-lg p-4 mt-6 flex items-center justify-center'>
            <span>Already have an account??</span><Link href={'/en/'} className='text-primary-500 mx-2'>Login</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
