import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RefreshCcw, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function CourseCardItem({ course }) {



  return (
    <div className='border border-gray-300 rounded-lg shadow-lg p-5  backdrop-blur-md'>
      <div>
        <div className='flex justify-between items-center'>
          <Image src={'/knowledge.png'} alt='other' width={50} height={50} />
          {/* <h2 className='text-[10px] p-1 px-2 rounded-full bg-teal-400 text-white'>{currentDateTime}</h2> */}

          
        </div>
        <h2 className='mt-3 font-medium text-lg text-black'>{course?.courselayout?.courseTitle}</h2>
        <p className='text-sm line-clamp-2 text-gray-600 mt-2'>{course?.courselayout?.courseSummary}</p>


        <div className='mt-3 flex justify-between'>
        <h2 className='text-lg text-gray-900 '>Total Chapter: {course?.courselayout?.chapters?.length}</h2>
          {course?.status === 'Generating' ? (
            <h2 className='text-sm p-1 px-2 flex gap-2 items-center rounded-full bg-gray-400 text-white'>
              <RefreshCw className='h-5 w-5 animate-spin' />
              Generating. . .
            </h2>
          ) : (
            <Link href={'/course/' + course?.courseId}>
              <Button className="bg-black hover:bg-teal-400 text-white shadow-md">View</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCardItem
