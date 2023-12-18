'use client'

import CommonInput from '@/shared/ui/commonInput'
import CustomButton from '@/shared/ui/customButton'
import CustomImage from '@/shared/ui/customImage'
import Divider from '@/shared/ui/divider'
import Drawer from '@/shared/ui/drawer'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import DeleteIcon from '@/assets/icons/delete-icon.svg'
import { Tab } from '@headlessui/react'

type EditorType = {
  isOpen: boolean
}

export default function Editor({ isOpen }: EditorType) {

  const [selectedTab, setSelectedTab] = useState('general')

  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: { aValue: getDefaultValue() } })

  function onSubmit(data: object) {
  }

  const [isActive, setIsActive] = useState(false)

  const toggleButton = () => {
    setIsActive(!isActive)
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'aValue'
  })

  function getDefaultValue() {
    return [{ option: 'option 1' }, { option: 'option 2' }]
  }

  console.log(fields, 'fields')

  return (
    <Drawer isOpen={isOpen}>
      <div>Properties</div>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tab.Group>
         <Tab.List className={'w-full bg-primary-200 flex justify-between p-3'}>
          <Tab className={`${selectedTab === 'general' ? 'text-primary-500 outline-none' : 'text-secondary-500'} w-full text-center flex justify-center`} onClick={() => setSelectedTab('general')}>General</Tab>
          <Tab className={`${selectedTab === 'option' ? 'text-primary-500 outline-none' : 'text-secondary-500'} w-full text-center flex justify-center`} onClick={() => setSelectedTab('option')}>Options</Tab>
          </Tab.List> 

          <Tab.Panels>
          <Tab.Panel>
        <CommonInput className='mt-4' label='Label' type='text' register={register} name='sTitle' placeholder='first name' />
        <Divider />
        <CommonInput className={'mt-4'} label='Place Holder' type='text' register={register} name='sPlaceHolder' placeholder='first name' />
        <Divider />
        <div className='flex justify-between mt-2 p-2'>
          <div className='text-secondary-500'>Required</div>
          <input
            className='mr-2 mt-1 cursor-pointer h-3.5 w-8 appearance-none rounded-2xl bg-secondary-800 before:h-3.5  before:rounded-full after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:bg-secondary-300 after:transition-[transform_0.2s] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:bg-primary-500 '
            type='checkbox'
            checked={isActive}
            onChange={toggleButton}
            role='switch'
          />
        </div>
        <div className='flex justify-between mt-2 p-2 mb-2'>
          <div className='text-secondary-500'>Read Only</div>
          <input
            className='mr-2 mt-1 cursor-pointer h-3.5 w-8 appearance-none rounded-2xl bg-secondary-800 before:h-3.5  before:rounded-full after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:bg-secondary-300 after:transition-[transform_0.2s] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:bg-primary-500 '
            type='checkbox'
            checked={isActive}
            onChange={toggleButton}
            role='switch'
          />
        </div>
        <Divider />
        <div className='flex justify-between items-center mt-2'>
          <div className='text-secondary-500 mx-2'>Min</div>
          <div>
            <CommonInput label='' type='text' register={register} name='nMin' placeholder='Min Value' className='' />
          </div>
        </div>
        <div className='flex justify-between items-center mt-2'>
          <div className='text-secondary-500 mx-2'>Max</div>
          <div>
            <CommonInput label='' type='text' register={register} name='nMin' placeholder='Max Value' className='' />
          </div>
        </div>
        </Tab.Panel>
        {/* <Divider /> */}
        <Tab.Panel>
        <div className='text-secondary-500 mt-2'>Options</div>
        {fields.map((field, i) => {
          return (
            <div key={i} className='flex justify-between items-center mt-4'>
              <CommonInput label='' type='text' register={register} name={`aValue[${i}].option`} placeholder='Max Value' className='mb-0' />

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
      </form>
    </Drawer>
  )
}
