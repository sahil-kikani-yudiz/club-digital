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
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import Toolbar from '../toolbar'
import Playground from '../playground'
import { showToast } from '@/shared/ui/toaster'
import { attachField } from '@/query/form/form.mutation'
import Navbar from '../navbar'
import { getFormById } from '@/query/form/form.quey'
import Loader from '@/shared/ui/loader'
import PreviewPopup from '../previewPopup'

export function FormEditor({ id, toolList }: any) {
  const [activeData, setActiveData] = useState<any | null>(null)
  const [fieldData, setFieldData] = useState<any[]>([])
  const [formData, setFormData] = useState<any[]>([])
  const [open, setOpen] = useState(false)

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

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [])

  const fetchData = async () => {
    const { data } = await getFormById(id)
    setFieldData(data?.data?.aField)
    setFormData(data?.data)
  }

  const mutation = useMutation({
    mutationFn: attachField,
    onSuccess: (data) => {
      const newField = data?.data?.data
      setFieldData((prevFields = []) => [...prevFields, newField])
      // showToast('success', data?.data?.message)
    },
    onError: (error: any) => {
      showToast('error', error?.message)
    }
  })

  function onDragStart(event: DragStartEvent) {
    setActiveData(event.active.data.current)
  }

  function onDragEnd(event: DragEndEvent) {
    const overContainerId = event.over?.id

    if (overContainerId === 'playground-container') {
      const fieldId = event.active.id
      mutation.mutate({ iFieldId: fieldId, sFormId: id })
    }
  }

  function onDragOver(event: DragOverEvent) {
    // setActiveData(event.active.data.current)
  }

  const sensors = useSensors(mouseSensor, touchSensor)

  function handlePreview() {
    setOpen(!open)
  }

  return (
    <>
      <DndContext sensors={sensors} onDragEnd={onDragEnd} onDragOver={onDragOver} onDragStart={onDragStart}>
        <Navbar data={formData} path={'/en'} handlePreview={handlePreview} />
        <div className='flex flex-col md:flex-row h-[calc(100%-184px)] bg-background'>
          {/* {isLoading && <Loader />} */}
          <Toolbar toolList={toolList} />
          <PreviewPopup open={open} handlePreview={handlePreview} fieldData={fieldData} />
          <Playground id={id} data={activeData} fieldData={fieldData} loading={mutation?.isLoading} setFieldData={setFieldData} />
        </div>
      </DndContext>
    </>
  )
}
