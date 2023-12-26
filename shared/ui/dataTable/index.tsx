import { ReactNode, useState } from 'react'
import CustomImage from '../customImage'
import DownIcon from '@/assets/icons/down-icon.svg'
import Dropdown from '../dropdown'

type dataTableTypes = {
  children?: ReactNode
}

export default function DataTable({ children }: dataTableTypes) {
  const columns = [{ title: 'Form name' },{ title: 'Description' }, { title: 'CreatedAt' }, { title: 'Responses' }, { title: 'Actions' }]

  const [value, setValue] = useState('')

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

  const options = [{ sValue: 'All Form', isSelected: true }, { sValue: 'Draft' }, { sValue: 'Delete' }]

  return (
    <>
      <div className='flex justify-between p-4 w-full'>
        <div className='w-[200px] z-10'>
          <Dropdown options={options} />
        </div>

        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            value={value}
            className='block w-full p-2 ps-10 text-md border rounded-lg bg-gray-5'
            placeholder='Search Forms Here....'
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='w-full h-full overflow-y-auto p-4'>
        <div className='relative shadow-md  w-full h-ful'>
          <table className='w-full h-full text-left '>
            <thead className='text-xs text-secondary-500 h-[56px] uppercase bg-tableBg'>
              <tr>
                {columns?.map((column, i) => {
                  return (
                    <th key={i} className='px-6 py-3'>
                      {column.title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody className='bg-theme h-full'>{children}</tbody>
          </table>
        </div>
      </div>
      <div className='flex w-full  items-center flex-column flex-wrap md:flex-row justify-between p-7'>
        <span className='text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
          page <span className='font-semibold text-gray-900'>1</span> of <span className='font-semibold text-gray-900 '>10</span>
        </span>
        <ul className='justify-center text-center items-center flex  h-8'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <div className='w-5 transition-all rotate-90 mt-2'>
                <CustomImage src={DownIcon} height={14} width={14} />
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <div className='w-5 transition-all rotate-[270deg] mb-1'>
                <CustomImage src={DownIcon} height={14} width={14} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
