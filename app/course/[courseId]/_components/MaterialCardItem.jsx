import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MaterialCardItem({item}) {
  return (
    <div className='border shadow-md rounded-lg p-5 flex flex-col items-center'>
      <h2 className='p-1 px-1 py-1 bg-green-500 text-white rounded-full text-[10px]n mb-2'>Ready</h2>
      <Image src={item.icon} alt={item.name}  width={50} height={50}/>
      
      <h2 className='font-medium'>{item.name}</h2>
      <p className='text-gray-500 text-sm text-center'>{item.description}</p>
      
      <Button className="mt-3">View</Button>
      
    </div>
  )
}

export default MaterialCardItem