import { useForm } from 'react-hook-form'
import CommonInput from '../ui/commonInput'
import Divider from '../ui/divider'
import CustomImage from '../ui/customImage'
import FieldBottom from './fieldBottom'
import { Fragment, useState } from 'react'
import Dropdown from '../ui/dropdown'
import RadioButton from '../ui/radioButton'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type FieldMakerTypes = {
  field: any
}

export default function FieldMaker({ field }: FieldMakerTypes) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const { attributes, setNodeRef,listeners, transform, transition } = useSortable({
    id: field.id
  })

  const style = {
     transform: CSS.Transform.toString(transform),
     transition
  }

  return (
    <>
      <div className='h-[186px] border-2 rounded-lg m-4 hover:border-primary-500 cursor-move' style={style} ref={setNodeRef} {...attributes} {...listeners}>
        <div className='h-[135px] p-2 relative '>
          {field.type === 'select' && (
            <>
              <label>{field?.oSettings?.label}</label>
              <Dropdown options={field?.oSettings?.options} className='mt-2 ' />
              <div className='absolute top-0 left-0 h-full w-full cursor-move'></div>
            </>
          )}
          {field.subType === 'radio' && (
            <>
              <RadioButton options={field?.oSettings?.options} label={field?.oSettings?.label} />
              <div className='absolute top-0 left-0 h-full w-full cursor-move'></div>
            </>
          )}
          {(field.type === 'input' || field.type === 'textarea') && field?.subType !== 'radio' && field && (
            <>
              <CommonInput
                className='mt-4 '
                disabled
                label={field.oSettings.label}
                type={field.type === 'input' ? field?.subType : field?.type}
                register={register}
                name='sTitle'
                placeholder={field.oSettings.placeholder}
              />
              <div className='absolute top-0 left-0 h-full w-full cursor-move'></div>
            </>
          )}
        </div>
        <Divider />
        <FieldBottom />
      </div>
    </>
  )
}
