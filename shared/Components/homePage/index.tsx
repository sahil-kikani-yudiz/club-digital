'use client'
import { Inter } from 'next/font/google'
import { Fragment, useState } from 'react'
import DataTable from '@/shared/ui/dataTable'
import { Dialog, Transition } from '@headlessui/react'
import CommonInput from '@/shared/ui/commonInput'
import { useForm } from 'react-hook-form'
import Divider from '@/shared/ui/divider'
import { useMutation, useQuery } from '@tanstack/react-query'
import CreateForm from '@/query/form/form.mutation'
import { showToast } from '@/shared/ui/toaster'
import { useRouter } from 'next/navigation'
import CustomImage from '@/shared/ui/customImage'
import FormIcon from '@/assets/icons/form-icon.svg'
import { getFormList } from '@/query/form/form.quey'
import { parseParams } from '@/shared/utils'
import FormListing from './homePageList'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const [requestParams, setRequestParams] = useState(getParams())
  const router = useRouter()
  const [open, setOpen] = useState(false)
  //   const parsedData = parseParams(location?.search)

  function getParams() {
    return {
      nSkip: 1,
      nLimit: 10
      //   nOrder: parsedData.order || '',
      //   sSearch: parsedData?.search || '',
      //   sSortBy: parsedData.sort || ''
    }
  }

  const data = useQuery({
    queryKey: ['getFormList', requestParams],
    queryFn: () => getFormList(requestParams)
  })
  const formData = data?.data?.data

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  function closeModal() {
    setOpen(!open)
    reset({
      sTitle: '',
      sDescription: ''
    })
  }

  const mutation = useMutation({
    mutationFn: CreateForm,
    onSuccess: (data) => {
      showToast('success', data?.data?.message)
      router.push(`/en/formbuilder/${data?.data?.data?.sFormId}`)
    },
    onError: (error: any) => {
      showToast('error', error?.message)
    }
  })

  function onSubmit(data: any) {
    mutation.mutate(data)
  }

  return (
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

                  <CommonInput
                    type='text'
                    className='text-lg mt-8'
                    register={register}
                    name='sTitle'
                    placeholder='Form title'
                    errors={errors}
                    required
                  />
                  <CommonInput
                    type='textarea'
                    errors={errors}
                    className='text-lg mt-6 '
                    register={register}
                    name='sDescription'
                    placeholder='Description'
                  />

                  <button className='bg-primary-500 rounded-lg p-2 mt-4 text-theme hover:bg-primary-400' onClick={handleSubmit(onSubmit)}>
                    Create Form
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='bg-theme w-full h-[calc(100%-80px)] mt-4 rounded-lg border'>
        <div className='flex flex-col justify-center items-center h-full p-2'>
          {formData?.data?.length === 0 ? (
            <>
              <CustomImage src={FormIcon} height={50} width={50} className='mb-4' />
              <div className='text-secondary-500 text-lg'>You Don’t Have Any Forms Yet</div>
              <div className='text-secondary-400 mt-2 mb-2'>Your forms will appear here</div>
              <button onClick={() => setOpen(true)} className='bg-primary-500 rounded-lg p-3 text-theme hover:bg-primary-400'>
                Create Form
              </button>
            </>
          ) : (
            <DataTable>
              {formData?.data?.map((form: any) => {
                return <FormListing data={form} />
              })}
            </DataTable>
          )}
        </div>
      </div>
    </div>
  )
}
