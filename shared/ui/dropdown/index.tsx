import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import UpDownIcon from '@/assets/icons/down-icon.svg'
import CustomImage from '../customImage'

type Option = {
  sValue?: string
  name?: string
  isSelected?: boolean
}

type DropdownOptions = {
  options: Option[]
  className?: string
  register?: Function
}

export default function Dropdown({ options, className, register }: DropdownOptions) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  useEffect(() => {
    const defaultOption = options?.find((option) => option.isSelected)

    if (defaultOption) {
      setSelectedOption(defaultOption)
    }
  }, [options])

  return (
    <>
      <Listbox
        value={selectedOption?.sValue}
        onChange={(value) => setSelectedOption(options?.find((option) => option?.sValue === value) || null)}
      >
        <div className={`relative ${className}`}>
          <Listbox.Button className='block w-full py-3 px-3 sm:px-4 bg-background border-1 border-secondary focus:border-primary outline-0 rounded-lg text-left relative'>
            <span className='block truncate'>{selectedOption?.sValue}</span>
            <span className='pointer-events-none absolute w-8 top-[50%] translate-y-[-50%] right-0 flex items-center mr-2'>
              <CustomImage src={UpDownIcon} height={20} width={20} />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-secondary-200 py-1 text-base shadow-lg focus:outline-none sm:text-sm'>
              {options?.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-secondary-700 text-theme' : ''}`}
                  value={option?.sValue}
                >
                  {({ selected }) => (
                    <>
                      <span  className={`block truncate ${selected ? '' : ''}`} >{option?.sValue}</span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}
