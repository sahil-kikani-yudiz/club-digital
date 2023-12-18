import { useForm } from 'react-hook-form'
import CommonInput from '../ui/commonInput'
import Divider from '../ui/divider'
import CustomImage from '../ui/customImage'
import FieldBottom from './fieldBottom'
import { Combobox, Listbox, RadioGroup, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Dropdown from '../ui/dropdown'
import RadioButton from '../ui/radioButton'

export default function FieldMaker() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const options = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]

  const [selectedoption, setSelectedoption] = useState(options[0])

  return (
    <>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative'>
          <CommonInput className='mt-4' disabled label='Label' type='audio' register={register} name='sTitle' placeholder='first name' />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500 '>
        <div className='h-[135px] p-2 relative'>
          <CommonInput className='mt-4 ' disabled label='Label' type='textarea' register={register} name='sTitle' placeholder='text area' />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative'>
          <CommonInput
            className='mt-4 '
            disabled
            label='Number'
            type='number'
            register={register}
            name='sTitle'
            placeholder='Enter Number'
          />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative'>
          <CommonInput
            className='mt-4'
            disabled
            label='Email Address'
            type='email'
            register={register}
            name='sEmail'
            placeholder='Enter Number'
          />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative flex justify-left items-center'>
          <label>Heading Text</label>
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative '>
          <label>Dropdown</label>
          <Dropdown options={options} className='mt-2 ' />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>

      <div className='h-[186px] border-2 rounded-lg m-4 cursor-pointer hover:border-primary-500'>
        <div className='h-[135px] p-2 relative '>
          <RadioButton options={options} label='label' />
          <div className='absolute top-0 left-0 h-full w-full'></div>
        </div>
        <Divider />
        <FieldBottom />
      </div>
    </>
  )
}
