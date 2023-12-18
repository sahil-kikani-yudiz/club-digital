import Link from 'next/link'
import CustomButton from '../ui/customButton'
import CustomImage from '../ui/customImage'
import CustomLink from '../ui/customLink'
import LeftArrow from '@/assets/icons/left-arrow.svg'
import PreviewIcon from '@/assets/icons/preview-icon.svg'
import Divider from '../ui/divider'
import CopyIcon from '@/assets/icons/copy-icon.svg'
import QrCode from '@/assets/images/qrcode.jpg'
import DownloadIcon from '@/assets/icons/download-icon.svg'

export default function FormSharePage() {
  return (
    <div className='bg-background w-screen h-[calc(100%-70px)] p-4'>
      <div className='bg-theme h-[66px] border rounded-lg items-center justify-between flex p-2'>
        <div className='flex   items-center'>
          <CustomLink href={'/en/builder'}>
            <CustomImage src={LeftArrow} height={22} width={22} />
          </CustomLink>
          <div className='text-base mx-2'>My Form</div>
        </div>

        <Link href={'/en/bilder'} className='border rounded-lg mx-2 p-2 w-fit flex items-center'>
          <CustomImage src={PreviewIcon} height={20} width={20} />
          <div className='mx-1'>Preview</div>
        </Link>
      </div>

      <div className='w-full h-[calc(100%-66px)] p-2 flex bg-theme border rounded-lg mt-3 justify-center'>
        <div className='h-full w-[720px] justify-center flex flex-col items-center'>
          <div>Share Form</div>
          <div className='h-full w-[710px] p-2'>
            <div className='w-full border rounded-lg h-fit p-4'>
              <div>Copy Link to Share</div>
              <div className='text-sm text-gray-500 mb-2'>Download or scan the QR code to share your form</div>
              <Divider />
              <div className='w-full h-full flex justify-between items-center'>
                <div className='w-fit h-[50px] bg-secondary-100 p-4 flex items-center text-secondary-900 border rounded-lg mt-4'>
                  https://clubcommunity.com/TctlBn/buwfxffipd/index
                </div>
                <div className='flex gap-2 text-primary-500'>
                  <button className='flex bg-primary-200 items-center border rounded-lg px-4 py-3 mt-4 hover:bg-secondary-200 '>
                    <CustomImage src={CopyIcon} height={20} width={20} className='mx-2' /> Copy
                  </button>
                  <button className='flex bg-primary-200 items-center border rounded-lg px-4 py-3 mt-4 hover:bg-secondary-200'>
                    <CustomImage src={PreviewIcon} height={24} width={24} className='mx-2' /> View
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='h-full w-[710px] p-2'>
            <div className='w-full border rounded-lg h-fit p-4'>
              <div>Share with QR Code</div>
              <div className='text-sm text-gray-500 mb-2'>Download or scan the QR code to share your form</div>
              <Divider />
              <div className='flex justify-start flex-col w-fit'>
                <div className='w-fit p-2 border mt-4 rounded-lg'>
                  <CustomImage src={QrCode} height={100} width={100} />
                </div>
                <button className='flex bg-primary-200 items-center border rounded-lg px-3 py-3 mt-4 hover:bg-secondary-200 text-sm text-primary-500'>
                  <CustomImage src={DownloadIcon} height={18} width={18} className='mx-1' /> Download
                </button>
              </div>
            </div>
          </div>

          <div className='h-full w-[710px] p-2'>
            <div className='w-full border rounded-lg h-fit p-4'>
              <div>Download form as PDF</div>
              <div className='text-sm text-gray-500 mb-2'>
                Download form as a PDF so you can share it with others as a print or have it as a backup copy
              </div>
              <Divider />
              <button className='flex bg-primary-200 items-center border rounded-lg px-3 py-3 mt-4 hover:bg-secondary-200 text-sm text-primary-500'>
                <CustomImage src={DownloadIcon} height={18} width={18} className='mx-1' /> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
