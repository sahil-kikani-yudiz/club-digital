'use client'
import CommonInput from '@/shared/ui/commonInput'
import CustomButton from '@/shared/ui/customButton'
import CustomImage from '@/shared/ui/customImage'
import Divider from '@/shared/ui/divider'
import Drawer from '@/shared/ui/drawer'
import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import DeleteIcon from '@/assets/icons/delete-icon.svg'
import { Tab } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import { editFieldSettings } from '@/query/form/form.mutation'
import { showToast } from '@/shared/ui/toaster'

type fieldSettingsType = {
  oSettings: any,
  sLabel: string
  sPlaceHolder: string
  nMaxLength: number
  nMinLength: number
  aOptions: any
  bIsRequired: boolean | undefined
  iUniqueId?: string
  iFieldId?: string
}

type EditorType = {
  isOpen: boolean
  setIsOpen: Function
  fieldSettings: fieldSettingsType | undefined
  onUpdateSettings: Function
}

interface Data {
  aOptions?: any
  iUniqueId?: string
  iFieldId?: string
}

export default function Editor({ isOpen, fieldSettings, setIsOpen, onUpdateSettings }: EditorType) {
  const [selectedTab, setSelectedTab] = useState('general')
  const [isActive, setIsActive] = useState<any | undefined>(false)

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    reset({
      sLabel: fieldSettings?.oSettings?.sLabel,
      sPlaceHolder: fieldSettings?.oSettings?.sPlaceHolder,
      nMaxLength: fieldSettings?.oSettings?.nMaxLength,
      nMinLength: fieldSettings?.oSettings?.nMinLength,
      aValue: fieldSettings?.oSettings?.aOptions
    })
    setIsActive(fieldSettings?.oSettings?.bIsRequired)
  }, [fieldSettings])

  function onSubmit(data: object) {
    
    const settings = prepareData(data)
    mutation.mutate(settings)
  }

  function prepareData(data: any) {
    
    const newData: Data = { ...data }
    if (!fieldSettings?.oSettings?.aOptions) {
      delete newData?.aOptions
    }
    newData.aOptions = data?.aValue
    newData.iFieldId = fieldSettings?.oSettings?.iFieldId
    newData.iUniqueId = fieldSettings?.oSettings?.iUniqueId
    return newData
  }

  const toggleButton = () => {
    setIsActive(!isActive)
    setValue('bIsRequired', !isActive)
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'aValue'
  })

  const mutation = useMutation({
    mutationFn: editFieldSettings,
    onSuccess: (data) => {
      showToast('success', data?.data?.message)
      onUpdateSettings(data?.data?.data)
    },
    onError: (error: any) => {
      showToast('error', error?.message)
    }
  })

  return (
    <Drawer isOpen={isOpen}>
      <div>Properties</div>
      <Divider />
  
        <Tab.Group>
          <Tab.List className={'w-full bg-primary-200 flex justify-between p-3'}>
            <Tab
              className={`${
                selectedTab === 'general' ? 'text-primary-500 outline-none' : 'text-secondary-500'
              } w-full text-center flex justify-center`}
              onClick={() => setSelectedTab('general')}
            >
              General
            </Tab>
            {fieldSettings?.oSettings?.aOptions && (
              <Tab
                className={`${
                  selectedTab === 'option' ? 'text-primary-500 outline-none' : 'text-secondary-500'
                } w-full text-center flex justify-center`}
                onClick={() => setSelectedTab('option')}
              >
                Options
              </Tab>
            )}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              {fieldSettings?.oSettings?.sLabel && (
                <>
                  <CommonInput errors={errors} className='mt-4' label='Label' type='text' register={register} name='sLabel' />
                  <Divider />
                </>
              )}
              {fieldSettings?.oSettings?.sPlaceHolder && (
                <>
                  <CommonInput
                    errors={errors}
                    className={'mt-4'}
                    label='Place Holder'
                    type='text'
                    register={register}
                    name='sPlaceHolder'
                  />
                  <Divider />
                </>
              )}
              <div className='flex justify-between mt-2 p-2'>
                <div className='text-secondary-500'>Required</div>
                <input
                  className='mr-2 mt-1 cursor-pointer h-3.5 w-8 appearance-none rounded-2xl bg-secondary-800 before:h-3.5  before:rounded-full after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:bg-secondary-300 after:transition-[transform_0.2s] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:bg-primary-500 '
                  type='checkbox'
                  {...register('bIsRequired')}
                  checked={isActive}
                  onChange={toggleButton}
                  role='switch'
                />
              </div>
              <Divider />
              {fieldSettings?.oSettings?.nMaxLength && (
                <div className='flex justify-between items-center mt-2'>
                  <div className='text-secondary-500 mx-2'>Min</div>
                  <div>
                    <CommonInput errors={errors} type='text' register={register} name='nMinLength' placeholder='Min Value' />
                  </div>
                </div>
              )}
              {fieldSettings?.oSettings?.nMinLength && (
                <div className='flex justify-between items-center mt-2'>
                  <div className='text-secondary-500 mx-2'>Max</div>
                  <div>
                    <CommonInput errors={errors} type='text' register={register} name='nMaxLength' placeholder='Max Value' />
                  </div>
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
              <div className='text-secondary-500 mt-2'>Options</div>
              {fields.map((field, i) => {
                return (
                  <div key={i} className='flex justify-between items-center mt-4'>
                    <CommonInput label='' type='text' register={register} name={`aValue[${i}].sValue`} className='mb-0' errors={errors} />

                    <div onClick={() => remove(i)}>
                      <CustomImage className='cursor-pointer mb-2' src={DeleteIcon} height={30} width={30} />
                    </div>
                  </div>
                )
              })}

              <button className='w-full bg-primary-500 border rounded-md p-2 mt-2' onClick={() => append({ option: '' })}>
                Add Option
              </button>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      
      
      <div className='w-full h-fit p-2 flex text-theme text-center gap-2 cursor-pointer mt-4'>
        <div className='w-full bg-primary-500 border rounded-lg p-2 hover:opacity-80' onClick={handleSubmit(onSubmit)}>
          Save
        </div>
        <div className='w-full bg-red-600 border rounded-lg p-2 hover:opacity-80' onClick={() => setIsOpen(false)}>
          Cancel
        </div>
      </div>
    </Drawer>
  )
}
