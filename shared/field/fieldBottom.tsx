import CustomImage from "../ui/customImage";
import CopyIcon from '@/assets/icons/copy-icon.svg'
import DeleteIcon from '@/assets/icons/delete-icon.svg'

type FieldBottomType = {
  onFieldEdit?: Function
}

export default function FieldBottom({ onFieldEdit } : FieldBottomType) {
    return(
        <div className='w-full flex justify-between p-1  cursor-pointer mt-1'>
        <div className='w-[108px] text-sm justify-center items-center border flex rounded-lg p-1 mx-2 relative hover:bg-background'>
          <CustomImage src={CopyIcon} height={16} width={16} className='mx-2' />
          <div className='mx-2'>Duplicate</div>
        </div>

        <div className='w-[108px] flex text-sm justify-center items-center  border  rounded-lg p-1 mx-2 relative hover:bg-background'>
          <CustomImage src={DeleteIcon} height={20} width={20} className='mx-2' />
          <div className='mx-2'>Delete</div>
        </div>
      </div>
    )
}