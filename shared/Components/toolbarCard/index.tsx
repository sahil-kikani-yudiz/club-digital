import CustomImage from '@/shared/ui/customImage'
import profile from '@/assets/icons/profile-icon.svg'
import { useDraggable } from '@dnd-kit/core'



type ToolbarCardOptions = {
  field?: {
    _id: string
    sName: string
    value: string
    icon: string
  }
  onDragStart?: () => void,
}

export default function ToolbarCard({ field }: ToolbarCardOptions) {

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: field?._id ?? 'default-id',
    data: field    
  })

  return (
    <>
      <div className='px-1 ' ref={setNodeRef} {...attributes} {...listeners}   >
         <div className={`h-12 border rounded-lg bg-theme mb-1 p-2 cursor-move gap-2 flex items-center  
        `} >
          <CustomImage src={profile} height={20} width={20} />
          <div className='text-center'>{field?.sName}</div>
        </div>
      </div>
      
      </>
  )
} 
