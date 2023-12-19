import React from 'react'
import { useState } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import CustomImage from '@/shared/ui/customImage'
import ArrowIcon from '@/assets/icons/arrow-icon.svg'
import FieldMaker from '@/shared/field/fieldMaker'
import Editor from '../editor'
import profile from '@/assets/icons/profile-icon.svg'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'

type PlaygroundType = {
  data: any
}


export default function Playground({ data }: PlaygroundType) {
  const { isOver, setNodeRef } = useDroppable({ id : data })
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  console.log(data, 'data')

  const [isOpen, setIsOpen] = useState(true)

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  const [fields, setFields] = useState([
    {
      id: 1,
      type: 'input',
      subType: 'file',
      oSettings: {
        label: 'Enter File',
        bIsRequired: false
      }
    },
    {
      id: 2,
      type: 'input',
      subType: 'text',
      oSettings: {
        placeHolder: 'Enter your Name',
        label: 'name',
        bIsRequired: false,
        nMin: 4,
        nMax: 10
      }
    },
    {
      id: 3,
      type: 'textarea',
      oSettings: {
        placeHolder: 'Enter Text Area',
        label: 'TextArea',
        bIsRequired: false,
        nMin: 10,
        nMax: 200
      }
    },
    {
      id: 4,
      type: 'input',
      subType: 'number',
      oSettings: {
        placeHolder: 'Enter Number',
        label: 'Number',
        bIsRequired: false,
        nMin: 10,
        nMax: 10
      }
    },
    {
      id: 5,
      type: 'input',
      subType: 'email',
      oSettings: {
        placeHolder: 'Enter Your Email',
        label: 'Email',
        bIsRequired: false,
        nMin: 6,
        nMax: 20
      }
    },
    {
      id: 6,
      type: 'select',
      subType: '',
      oSettings: {
        label: 'Select Option',
        bIsRequired: false,
        options: [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]
      }
    },
    {
      id: 7,
      type: 'input',
      subType: 'radio',
      oSettings: {
        label: 'Select gender',
        bIsRequired: false,
        options: [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }]
      }
    }
  ])

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  function handleDragEnd(event: DragEndEvent) {
    const active = event.active
    const over = event.over
    if (active?.id !== over?.id) {
      const oldIndex = fields.findIndex((f) => f.id === active?.id)
      const newIndex = fields.findIndex((f) => f.id === over?.id)
      console.log(oldIndex, newIndex, 'new')
      setFields((prevFields) => arrayMove(prevFields, oldIndex, newIndex))
    }
  }

  function handleDragOver(event: DragOverEvent) {
    console.log(event?.over?.id, '1111')
    const overIndex = fields.findIndex((f) => f.id === event?.over?.id);
    setHighlightedIndex(overIndex);
  }

  console.log(highlightedIndex, 'highlightedIndex')

  return (
    <>
      <div className='flex-1 flex justify-center items-center' ref={setNodeRef}>
        <div className={`h-full border rounded-lg w-full bg-theme overflow-y-auto  `} >
          <div className={`${isOver ? 'border border-primary-500 rounded-lg ' : ''}`}>
            {fields.length === 0 ? (
              <div className='border-2 border-dashed rounded-lg m-2 p-4 flex items-center justify-center flex-col'>
                <CustomImage src={ArrowIcon} height={40} width={40} />
                <div className='text-secondary-500 mt-2'>Drag Items from left and Drop them here</div>
              </div>
            ) : (
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners} >
                <SortableContext items={fields?.map((field) => field?.id)} strategy={verticalListSortingStrategy}>
                {fields?.map((field, index) => (
                    <div
                      key={field.id}
                    >
                      <FieldMaker field={field}/>
                    </div>
                  ))}
                </SortableContext>
              </DndContext>
            )}
            <DragOverlay>
              <div
                style={{
                  transform: `translate 10px, 10px)`,
                  opacity:  0.8 ,
                  pointerEvents: 'none',
                  position: 'fixed',
                  zIndex: 1000
                }}
              >
                <div
                  className={`h-12 w-[250px] border rounded-lg bg-theme mb-1 p-2 cursor-move gap-2 flex items-center  
        `}
                >
                  <CustomImage src={profile} height={20} width={20} />
                  <div className='text-center'>{data?.sName}</div>
                </div>
              </div>
            </DragOverlay>
          </div>
        </div>
        <Editor isOpen={true} />
      </div>
    </>
  )
}
