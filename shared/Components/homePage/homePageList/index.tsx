import { formatDate } from '@/shared/utils'
import Link from 'next/link'

type dataType = {
  sTitle: string
  sDescription: string
  dUpdatedAt: string
  sFormId: string
}

type FormListing = {
  data: dataType
}

export default function FormListing({ data }: FormListing) {
  return (
    <tr className='bg-white border-b  hover:bg-gray-50'>
      <td className='px-6 py-3 '>{data?.sTitle}</td>
      <td className='px-6 py-3 '>{data?.sDescription}</td>
      <td className='px-6 py-3 '>{formatDate(data?.dUpdatedAt)}</td>
      <td className='px-6 py-3 '>150</td>
      <td className='px-6 py-3'>
        <Link href={`/en/formbuilder/${data?.sFormId}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          Edit
        </Link>
      </td>
    </tr>
  )
}
