'use client'

import Header from "@/shared/Components/header"

const locales = ['en']

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: (typeof locales)[number]
  }
}

export default function MainLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <div className='h-full w-full'>
      <Header />
      {children}
    </div>
  )
}
