import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MaterialCardItem({item, studyTypeContent }) {
  return (
    <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center
     ${studyTypeContent?.[item.type]?.length==null&&'grayscale'}
    `}>
      {studyTypeContent?.[item.type]?.length==null?
      <h2 className='p-1 px-1 py-1 bg-gray-500 text-white rounded-full text-[10px]n mb-2'>Not Ready</h2>
      : <h2 className='p-1 px-1 py-1 bg-green-500 text-white rounded-full text-[10px]n mb-2'>Ready</h2>}
     
      <Image src={item.icon} alt={item.name}  width={50} height={50}/>
      <h2 className='font-medium'>{item.name}</h2>
      <p className='text-gray-500 text-sm text-center'>{item.description}</p>
      

      {studyTypeContent?.[item.type]?.length==null?
      
      <Button className="mt-3 w-full" variant="outline">Generate</Button>
      :<Button className="mt-3 w-full" variant="outline">View</Button>}
    </div>
  )
}

export default MaterialCardItem