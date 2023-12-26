import { useState } from 'react'
import Divider from '@/shared/ui/divider'
import ToolbarCard from '../toolbarCard'
import Accordion from '@/shared/ui/accordian'


export default function Toolbar({toolList} : any) {
  const [value, setValue] = useState('')
 
  const onDragStart = () => {
    
  }

  function ToolListing(data: []) {
    return (
      <>
        {data?.map((field: any, i: number) => {
          return <ToolbarCard field={field} key={i} onDragStart={onDragStart} />
        })}
      </>
    )
  }

  return (
       
    <aside className='lg:w-[337px] md:w-[200px]  flex flex-col max-w-[337px] mx-4 border rounded-lg bg-theme overflow-y-auto border-r p-2'>
      <div className='relative mb-4'>
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
          placeholder='Search Fields Here....'
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
      <Divider />
      {toolList?.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Accordion title={item?.sName} body={ToolListing(item?.aFields)} />
          </div>
        )
      })}
    </aside>
  )
}
