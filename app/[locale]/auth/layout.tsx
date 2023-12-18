'use client'

const locales = ['en']

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: (typeof locales)[number]
  }
}

export default function AuthLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <div className='h-full w-full'>
      {children}
    </div>
  )
}
