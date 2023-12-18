type RadioButtonOptions = {
  options: any[]
  defaultChecked?: string
  label: string
}

export default function RadioButton({ options, defaultChecked, label }: RadioButtonOptions) {
  return (
    <div className='flex flex-col '>
        <div>{label}</div>
      {options.map((option, i) => (
        <div key={i} className='flex items-center'>
          <input
            type='radio'
            id={option.name}
            name='radioGroup'
            value={option.name}
            // defaultChecked={option.name === option[0].name}
            className='text-primary-500 focus:ring-secondary-400 cursor-pointer h-4 w-4 m-2'
          />
          <label htmlFor={option} className='ml-2 text-gray-700'>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  )
}
