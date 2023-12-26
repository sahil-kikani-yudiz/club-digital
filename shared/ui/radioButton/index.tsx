import { validationErrors } from "@/shared/constants/validationError";
import { useEffect, useState } from "react";

type RadioButtonOptions = {
  options: any[]
  defaultChecked?: string
  label: string
  register: Function
  id: string
}

export default function RadioButton({ options, label, register, id }: RadioButtonOptions) {

  const [selectedOption, setSelectedOption] = useState<string | undefined>('');
  
  useEffect(() => {
    const defaultChecked = options.find((option) => option.isSelected)
    setSelectedOption(defaultChecked?.sValue)
  }, [])

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };
  

  return (
      <div className='flex flex-col '>
        <div>{label}</div>
        {options?.map((option, i) => (
          <div key={option._id} className='flex items-center m-1'>
            <input
              type='radio'
              id={id}
              name={id}
              {...register(`oAnswers.${id}` , { required: validationErrors.required })}
              value={option?.sValue}
              defaultChecked={option.sValue === selectedOption}
              onChange={() => handleRadioChange(option.sValue)}
              className='text-primary-500 focus:ring-secondary-400 cursor-pointer h-4 w-4 '
            />
            <label className='ml-2 text-gray-700'>
              {option.sValue}
            </label>
          </div>
        ))}
      </div>
  )
}
