import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import UpDownIcon from '@/assets/icons/down-icon.svg'
import CustomImage from '../customImage'

type DropdownOptions = {
  options: any[]
  className?: string
}

export default function Dropdown( { options, className } : DropdownOptions) {
  const [selectedOption, setSelectedOption] = useState(options[0])

  // console.log(options, 'options')

  return (
  <>
    <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className={`relative ${className}`}>
          <Listbox.Button className="block w-full py-3 px-3 sm:px-4 bg-background border-1 border-secondary focus:border-primary outline-0 rounded-lg text-left relative">
            <span className="block truncate">{selectedOption.name}</span>
            <span className="pointer-events-none absolute w-8 top-[50%] translate-y-[-50%] right-0 flex items-center mr-2">
                <CustomImage src={UpDownIcon} height={20} width={20} />
              
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-secondary-200 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${active ? 'bg-secondary-700 text-theme' : ''
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? '' : ''
                          }`}
                      >
                        {option.name}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
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
