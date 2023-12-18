// Playground.tsx
// "use client"
import { useState } from 'react';
import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import CustomImage from '@/shared/ui/customImage';
import ArrowIcon from '@/assets/icons/arrow-icon.svg';
import FieldMaker from '@/shared/field/fieldMaker';
import Editor from '../editor';

type PlaygroundType = {
  id: UniqueIdentifier
};

export default function Playground({ id }: PlaygroundType) {
  const { isOver, setNodeRef } = useDroppable({ id });

  console.log(isOver, 'isOver')

  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  

  return (
    <>
      <div className='flex-1 flex justify-center items-center'>
        <div className={`h-full border rounded-lg w-full bg-theme overflow-y-auto  `} ref={setNodeRef}>
          <div className={`${isOver ? 'bg-red-200' : ''}`}>
          {/* <div>
            <CustomImage src={ArrowIcon} height={40} width={40} />
            <div className="text-secondary-500 mt-2">Drag Items from left and Drop them here</div>
          </div> */}
          <FieldMaker />
          </div>
        </div>
        <Editor isOpen={true} />
      </div>
    </>
  );
}
