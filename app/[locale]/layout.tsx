'use client'
import Header from '@/shared/Components/header'
import './globals.css'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { usePathname } from 'next/navigation'


const locales = ['en']
export const revalidate = 0
export const dynamic = 'force-dynamic'

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: (typeof locales)[number]
  }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
 
  const pathname = usePathname()

  const queryClient = new QueryClient()

  return (
    <html lang={locale} className='h-full w-full'>
      <body>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          {!pathname?.includes('myform') && <Header />}
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
