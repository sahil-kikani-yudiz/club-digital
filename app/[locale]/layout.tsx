'use client'

import Header from '@/shared/Components/header'
import './globals.css'
import Navbar from '@/shared/Components/navbar'
import { useState } from 'react'
import { DefaultOptions, MutationCache, QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

const locales = ['en']

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: (typeof locales)[number]
  }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  interface CustomDefaultOptions extends DefaultOptions {
    message: (msg: string, type: string) => void
  }

  const queryClient = new QueryClient()

  // const queryClient: any = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       retry: false,
  //       refetchOnWindowFocus: false,
  //       onSettled: (_d: any, e: { message: string; response: { status: number; data: { message: string } } }) => {
  //         if (e?.message === 'Network Error') {
  //           queryClient.invalidateQueries('toast')
  //           queryClient.setQueryData('message', () => ({ message: e?.message, type: 'error' }))
  //         }
  //         if (e?.response?.status > 300) {
  //           queryClient.invalidateQueries('toast')
  //           queryClient.setQueryData('message', () => ({
  //             message: e?.response?.data.message || e?.response?.data || e?.message,
  //             type: 'error'
  //           }))
  //         }
  //       }
  //     },
  //     // Use the custom type here
  //     message: (msg: string, type: string) => {
  //       queryClient.invalidateQueries('toast')
  //       queryClient.setQueryData('message', () => ({ message: msg, type }))
  //     }
  //   } as CustomDefaultOptions, // Specify the custom type here
  //   mutationCache: new MutationCache({
  //     onError: (e: any, query: any) => {
  //       if (!query?.disableToast)
  //         if (e?.message === 'Network Error') {
  //           queryClient.defaultOptions.message(e?.message, 'error')
  //         } else if (e?.response?.status === 500) {
  //           queryClient.defaultOptions.message(e?.message, 'warning')
  //         } else if (e?.response?.status > 300 && e?.response?.status < 500) {
  //           queryClient.defaultOptions.message(e?.response?.data.message || e?.message, 'error')
  //         } else if (e?.response?.status <= 500) {
  //           queryClient.defaultOptions.message(e?.response?.data.message || e?.message, 'warning')
  //         }
  //     }
  //   })
  // })

  return (
    <html lang={locale} className='h-full w-full'>
      <body>
        <QueryClientProvider client={queryClient}>          
            {children}          
        </QueryClientProvider>
      </body>
    </html>
  )
}
