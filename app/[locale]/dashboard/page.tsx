'use client'
import CustomImage from '@/shared/ui/customImage'
import { useTranslations } from 'next-intl'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import DownIcon from '@/assets/icons/down-icon.svg'
import FormIcon from '@/assets/icons/form-icon.svg'
import DataTable from '@/shared/ui/dataTable'
import { Dialog, Transition } from '@headlessui/react'
import CommonInput from '@/shared/ui/commonInput'
import { useForm } from 'react-hook-form'
import Divider from '@/shared/ui/divider'
import Header from '@/shared/Components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { register } = useForm()
  const [open, setOpen] = useState(false)

  function closeModal() {
    setOpen(!open)
  }
  return (
    <>
      <Header />
      <div className='bg-background w-screen h-[calc(100%-70px)] p-4'>
        <div className='bg-theme h-[66px] border rounded-lg items-center flex p-2'>
          <button className='bg-primary-500 rounded-lg p-3 text-theme hover:bg-primary-400' onClick={() => setOpen(true)}>
            Create Form
          </button>
        </div>

        <Transition appear show={open}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/25 ' />
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title as='h3' className='text-lg flex flex-col font-medium leading-6 text-gray-900'>
                      Create a New Form
                      <span className='text-secondary-500 text-sm mb-2'>
                        Start from Scratch, Name your form, Customize it later & build something beautiful
                      </span>
                    </Dialog.Title>

                    <Divider />

                    <CommonInput type='text' className='text-lg mt-8' register={register} name='sFormName' placeholder='Form title' />
                    <CommonInput
                      type='textarea'
                      className='text-lg mt-6 mb-6'
                      register={register}
                      name='sDescription'
                      placeholder='Description'
                    />

                    <Link
                      href={'/en/builder'}
                      className='bg-primary-500 rounded-lg p-2 mt-4 text-theme hover:bg-primary-400'
                      onClick={() => setOpen(true)}
                    >
                      Create Form
                    </Link>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <div className='bg-theme w-full h-[calc(100%-66px)] mt-4 rounded-lg border'>
          <div className='flex flex-col justify-center items-center h-[calc(100%-89px)] p-2'>
            {/* <CustomImage src={FormIcon} height={50} width={50} className='mb-4' />
            <div className='text-secondary-500 text-lg'>You Don’t Have Any Forms Yet</div>
            <div className='text-secondary-400 mt-2 mb-2'>Your forms will appear here</div>
            <Link href={'/en/builder'} className='bg-primary-500 rounded-lg p-3 text-theme hover:bg-primary-400'>
              Create Form
            </Link> */}
            <DataTable />
          </div>
        </div>
      </div>
    </>
  )
}

