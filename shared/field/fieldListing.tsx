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
import FieldMaker from './fieldMaker'

import CopyIcon from '@/assets/icons/copy-icon.svg'
import DeleteIcon from '@/assets/icons/delete-icon.svg'
import EditIcon from '@/assets/icons/edit-icon.svg'

type FieldMakerTypes = {
  field?: any
  onFieldEdit?: Function
  onFieldDelete?: Function
}

export default function FieldListing({ field, onFieldEdit, onFieldDelete }: FieldMakerTypes) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const { attributes, setNodeRef, listeners, transform, transition } = useSortable({
    id: field?.oSettings?.iUniqueId
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  function handleEdit(data: any) {
    if (onFieldEdit) {
      onFieldEdit(data)
    }
  }

  function onDelete(id: string) {
    if (onFieldDelete) {
      onFieldDelete(id)
    }
  }

  return (
    <>
      <div
        className='h-fit min-h-[186px] border-2 rounded-lg m-4 hover:border-primary-500 '
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <div className='h-fit min-h-[135px] p-2 relative '>
          <FieldMaker field={field} register={register} errors={errors} />
          <div className='absolute top-0 left-0 h-full w-full cursor-move'></div>
        </div>
        <Divider />
        <div className='w-full flex justify-end p-1  cursor-pointer mt-1'>
          {/* <div className='w-[108px] text-sm justify-center items-center border flex rounded-lg p-1 mx-2 relative hover:bg-background'>
            <CustomImage src={CopyIcon} height={16} width={16} className='mx-2' />
            <div className='mx-2'>Duplicate</div>
          </div> */}

          <div className='flex'>
            <div
              className='w-[108px] flex text-sm justify-center items-center  border  rounded-lg p-1 mx-2 relative hover:bg-red-400 hover:text-theme'
              onClick={() => onDelete(field?.oSettings?.iUniqueId)}
            >
              <CustomImage src={DeleteIcon} height={20} width={20} className='mx-2' />
              <div className='mx-2'>Delete</div>
            </div>
            {field?.oField?.eFormFieldType === 'cu' && (
              <div
                className='w-[108px] flex text-sm justify-center items-center  border  rounded-lg p-1 mx-2 relative hover:bg-primary-300 hover:text-theme'
                onClick={() => handleEdit(field)}
              >
                <CustomImage src={EditIcon} height={20} width={20} className='mx-2' />
                <div className='mx-2'>Edit</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
