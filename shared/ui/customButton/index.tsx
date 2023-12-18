import { ReactNode } from 'react'

type Buttontypes = {
  children: ReactNode
}

export default function CustomButton({ children }: Buttontypes) {
  return (
    <button className='text-secondary-500 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none   focus:ring-gray-100 rounded-lg text-base p-4 text-center inline-flex items-center me-2 mb-2'>
      {children}
    </button>
  )
}
