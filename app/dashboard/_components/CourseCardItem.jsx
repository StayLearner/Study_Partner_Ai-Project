import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CourseCardItem({ course }) {
  return (
    <div className='border border-gray-300 rounded-lg shadow-md p-4 sm:p-5 backdrop-blur-md flex flex-col justify-between h-full w-full'>
      
      <div>
        <div className='flex justify-between items-center'>
          <Image src={'/knowledge.png'} alt='course icon' width={50} height={50} className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain" />
        </div>

        <h2 className='mt-3 font-medium text-base sm:text-lg text-black leading-snug'>
          {course?.courselayout?.courseTitle}
        </h2>
        <p className='text-xs sm:text-sm line-clamp-2 text-gray-600 mt-2'>
          {course?.courselayout?.courseSummary}
        </p>
      </div>

      {/* Footer – chapter count + action button */}
      <div className='mt-auto flex flex-wrap justify-between items-center pt-3 gap-2'>
        <h2 className='text-sm sm:text-base text-gray-700'>
          Chapters: {course?.courselayout?.chapters?.length}
        </h2>

        {course?.status === 'Generating' ? (
          <h2 className='text-xs p-1 px-2 flex gap-2 items-center rounded-full bg-gray-400 text-white'>
            <RefreshCw className='h-4 w-4 animate-spin' />
            Generating…
          </h2>
        ) : (
          <Link href={'/course/' + course?.courseId}>
            <Button className="bg-black hover:bg-teal-400 text-white shadow-md text-xs sm:text-sm">
              View
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default CourseCardItem
