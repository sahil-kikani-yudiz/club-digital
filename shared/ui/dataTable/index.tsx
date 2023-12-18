import { useState } from 'react'
import CustomImage from '../customImage'
import DownIcon from '@/assets/icons/down-icon.svg'
import Dropdown from '../dropdown'

export default function DataTable() {
  const columns = [{ title: 'Form name' }, { title: 'Last modified' }, { title: 'Responses' }, { title: 'Actions' }]

  const [value, setValue] = useState('')

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

  const options = [{ name: 'All Form' }, { name: 'Draft' }, { name: 'Delete' }]

  return (
    <div className='w-full h-full p-4'>
      <div className='flex justify-between p-4'>
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

      <div className='relative shadow-md  w-full h-ful'>
        <table className='w-full text-left '>
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
          <tbody className='bg-theme'>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-white border-b  hover:bg-gray-50 '>
              <td className='px-6 py-4 '>Form 1</td>
              <td className='px-6 py-4'>Dec 18, 2023 9:50 AM</td>
              <td className='px-6 py-4'>150</td>
              <td className='px-6 py-4'>
                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4' aria-label='Table navigation '>
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
      </nav>
    </div>
  )
}
