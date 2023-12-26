import FieldMaker from '@/shared/field/fieldMaker'
import Divider from '@/shared/ui/divider'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'

type PreviewType = {
  open: boolean
  handlePreview: Function
  fieldData: any
}

export default function PreviewPopup({ open, handlePreview, fieldData }: PreviewType) {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors }
  } = useForm()

  return (
    <Transition appear show={open}>
      <Dialog as='div' className='relative z-10' onClose={() => handlePreview()}>
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

        <div className='fixed inset-0 w-full overflow-y-auto'>
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
              <Dialog.Panel className='w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title as='h3' className='text-lg flex flex-col font-medium leading-6 text-gray-900 mb-4'>
                  Preview
                </Dialog.Title>
                <Divider />
                {fieldData?.map((field: any) => {
                  return (
                    <div className='mt-4'>
                      <FieldMaker field={field} register={register} errors={errors} setValue={setValue} />
                    </div>
                  )
                })}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
