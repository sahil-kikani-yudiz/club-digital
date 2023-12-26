'use client'
import { getFormById, grtDynamicFieldValue } from '@/query/form/form.quey'
import FieldMaker from '@/shared/field/fieldMaker'
import Loader from '@/shared/ui/loader'
import { useMutation, useQuery } from '@tanstack/react-query'
import Navbar from '../navbar'
import { useForm } from 'react-hook-form'
import CommonInput from '@/shared/ui/commonInput'
import { Fragment, useEffect, useState } from 'react'
import { sendData } from '@/query/form/form.mutation'
import { showToast } from '@/shared/ui/toaster'
import { useRouter } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import Divider from '@/shared/ui/divider'

type previewForm = {
  id: string
}

export default function PreviewForm({ id }: previewForm) {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm()

  const { data, isLoading } = useQuery({
    queryKey: ['previewForm'],
    queryFn: () => getFormById(id)
  })

  const formData = data?.data?.data

  const mutation = useMutation({
    mutationFn: sendData,
    onSuccess: (data) => {
      showToast('success', data?.data?.message)
      router.push(`/en/myform/${id}`)
    }
  })

  const autofill = useMutation({
    mutationFn: grtDynamicFieldValue,
    onSuccess: (data) => {
      reset(data?.data?.data)
    }
  })

  function onSubmit(data: any) {
    const makeData = mapData(data)
    makeData.sFormId = id
    mutation.mutate(makeData)
  }

  function mapData(data: any) {
    const prepareData = data

    return prepareData
  }

  const handleMobileNumberChange = (e: any) => {
    const enteredNumber = e.target.value
    if (enteredNumber.length === 10) {
      const newData = formData?.aField?.map((field: any) => {
        return {
          iUniqueId: field?.oSettings?.iUniqueId,
          iFieldId: field?.oSettings?.iFieldId
        }
      })
      const updateData = { aField: newData, sFormId: id, sMobileNo: e.target.value }
      autofill.mutate(updateData)
    }
  }

  function closeModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <Navbar data={formData} path={`/en/formbuilder/${id}`} /> */}
      {/* {isLoading && <Loader />} */}
      <div className='bg-background min-h-screen flex flex-col items-center justify-center p-4'>
        <div className='bg-theme min-h-screen w-[40%] p-6 border rounded-lg'>
          <Transition appear show={isOpen}>
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
                      <Dialog.Title as='h3' className='text-lg flex flex-col font-medium leading-6 text-gray-900 mb-2'>
                        Please Enter Your Number
                      </Dialog.Title>

                      <Divider />

                      <input
                        type='number'
                        {...register('sMobileNo')}
                        name='sMobileNo'
                        placeholder='Enter Number'
                        className='bg-background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-background focus:border-theme block w-full p-2 mb-2 mt-2'
                        onChange={handleMobileNumberChange}
                      />

                      <button
                        className='bg-primary-500 rounded-lg p-2 mt-4 text-theme hover:bg-primary-400'
                        onClick={() => setIsOpen(false)}
                      >
                        Fill Form
                      </button>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          {formData?.aField?.map((field: any) => {
            return (
              <div className='mt-4'>
                <FieldMaker field={field} register={register} errors={errors} />
              </div>
            )
          })}
          <button className='bg-primary-500 p-4 h-fit w-fit border rounded-lg mt-4 text-white' onClick={handleSubmit(onSubmit)}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}
