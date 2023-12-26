'use client'
import { ReactNode } from 'react'

type DrawerTypes = {
    children: ReactNode,
    isOpen: boolean
}

export default function Drawer({ children, isOpen }: DrawerTypes) {
  return( 
    <div className={`md:w-1/4  ${isOpen ? 'flex' : 'invisible'} flex-col max-w-[337px] h-full right-0 relative gap-2 bg-theme overflow-y-auto p-2 transition-transform  duration-4000 mx-4 border rounded-lg`}>
    {children}
  </div>
  )
}

