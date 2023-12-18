type commonInputTypes = {
  label?: string
  type?: string
  register: Function
  name?: string
  placeholder?: string | undefined
  className: string | undefined
  disabled?: boolean
}

export default function CommonInput({ label, type, register, name, placeholder, className, disabled }: commonInputTypes) {
  const setRegister = register(name)
  return (
    <>
      <label className='block mt-2 mb-2 text-sm font-medium text-secondary-500 '>{label}</label>
      {type === 'textarea' ? (
        <textarea
          className={`bg-background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-background focus:border-theme block w-full p-2 mb-2 ${className} `}
          placeholder={placeholder || ''}
          {...setRegister}
          onChange={(e) => {
            setRegister.onChange(e)
          }}
          disabled={disabled}
        ></textarea>
      ) : (
        <input
          className={`bg-background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-background focus:border-theme block w-full p-2 mb-2 ${className} `}
          placeholder={placeholder || ''}
          {...setRegister}
          onChange={(e) => {
            setRegister.onChange(e)
          }}
          type={type}
          disabled={disabled}
        ></input>
      )}
    </>
  )
}
