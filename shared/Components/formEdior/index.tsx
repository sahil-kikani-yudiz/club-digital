'use client'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import Toolbar from '../toolbar'
import Playground from '../playground'
import { useState } from 'react'

export function FormEditor() {
  const [activeBuilder, setActiveBuilder] = useState(false)
  const [activeData, setActiveData] = useState<any | null>(null)

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

  function onDragStart(event: DragStartEvent) {
    // console.log(event, 'event');
  }

  function onDragEnd(event: DragEndEvent) {
    console.log(event.active, 'end')
  }

  function onDragOver(event: DragOverEvent) {
    setActiveData(event.active.data.current)
    // console.log(event, 'over');
  }

  const sensors = useSensors(mouseSensor, touchSensor)

  return (
    <>
      <DndContext sensors={sensors} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <div className='flex flex-col md:flex-row h-[calc(100%-184px)] bg-background'>
          <Toolbar />
          <Playground data={activeData || ''} />
        </div>
      </DndContext>
    </>
  )
}
