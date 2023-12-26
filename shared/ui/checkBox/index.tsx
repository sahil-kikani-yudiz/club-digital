import { useState } from 'react'

type CheckBoxTypes = {
  options: any[]
  label: string
  register: Function
  id: string
  required?: boolean
  setValue?: Function
}

export default function CheckBox({ options, label, register, id, required, setValue }: CheckBoxTypes) {
  return (
    <div className='flex flex-col '>
      <div>{label}</div>
      {options?.map((option) => {
        return (
          <div key={option._id} className='flex items-center m-1'>
            <input type='checkbox' id={option._id} {...register(`oAnswers.${id}`)} />
            <label className='ml-2 text-gray-700'>{option.sValue}</label>
          </div>
        )
      })}
    </div>
  )
}
