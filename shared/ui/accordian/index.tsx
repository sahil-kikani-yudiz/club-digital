'use client'
import React, { ReactNode, useState } from 'react'
import CustomImage from '../customImage'
import DownIcon from '@/assets/icons/down-icon.svg'

type AccordionTypes = {
  title: string | ReactNode
  body?: string | ReactNode
  isOpen?: boolean
  onOpen?: () => void
  className?: string
}

function Accordion({ title, body, isOpen, onOpen, className = '' }: AccordionTypes) {
  const [open, setOpen] = useState(false)
  const isActive = onOpen ? isOpen : open
  function handleOpen() {
    onOpen ? onOpen() : setOpen((prev) => !prev)
  }

  return (
    <div className={`bg-card rounded-2xl ${className} `} onClick={handleOpen}>
      <div className={'text-base mt-2 select-none cursor-pointer flex items-center justify-between z-10 text-secondary-500'}>
        {title}
        <div className={`w-5 transition-all ${isActive ? 'rotate-180 mx-2' : ''}`}>
          <CustomImage src={DownIcon} height={14} width={14} />
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          isActive ? 'transition-all  rounded-b-2xl py-4 opacity-1' : 'transition-all  overflow-hidden h-0 max-h-0 z-0 animate-close'
        }
      >
        {body}
      </div>
    </div>
  )
}

export default Accordion
