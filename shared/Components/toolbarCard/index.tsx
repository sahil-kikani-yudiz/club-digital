import CustomImage from '@/shared/ui/customImage'
import profile from '@/assets/icons/profile-icon.svg'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { SortableContext, useSortable } from '@dnd-kit/sortable'

type ToolbarCardOptions = {
  field?: {
    _id: string
    sName: string
    value: string
    icon: string
  }
  onDragStart?: () => void,
}

export default function ToolbarCard({ field, onDragStart }: ToolbarCardOptions) {

  // const draggable = useDraggable({
  //   id: field?._id ?? 'default-id',
  // });
  const { attributes, listeners, setNodeRef, isDragging, transform } = useDraggable({
    id: field?._id ?? 'default-id',
    
  })

  // console.log(listeners, 'transform')

  // const scale = isDragging ? 1.2 : 1;

  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition
  // };

  return (
    <div>
      <div className='px-1 ' ref={setNodeRef} {...attributes} {...listeners}   >
        <div className={`h-12 border rounded-lg bg-theme mb-1 p-2 cursor-move gap-2 flex items-center  
        `} >
          <CustomImage src={profile} height={20} width={20} />
          <div className='text-center'>{field?.sName}</div>
        </div>
      </div>
    </div>
  )
} 
