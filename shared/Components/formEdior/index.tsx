// FormEditor.tsx
"use client"
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, MouseSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core';
import Toolbar from '../toolbar';
import Editor from '../editor';
import Playground from '../playground';
import Navbar from '../navbar';
import { useState } from 'react';

export function FormEditor() {
  const [activeBuilder, setActiveBuilder] = useState(false);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  function onDragStart(event: DragStartEvent) {
    // console.log(event, 'event');
  }

  function onDragEnd(event: DragEndEvent) {
    // console.log(event.active.id, 'end');
    setActiveId(event.active.id);
  }

  function onDragOver(event: DragOverEvent) {
    // console.log(event, 'over');
  }

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <>
  
        <DndContext sensors={sensors} >
          <div className='flex flex-col md:flex-row h-[calc(100%-184px)] bg-background'>
            <Toolbar />
            <Playground id={activeId || ''} />
          </div>
        </DndContext>

    </>
  );
}
