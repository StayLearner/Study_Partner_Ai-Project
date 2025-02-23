import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({ course }) {
  return (
    <div 
      className='flex gap-5 items-center p-5 border shadow-md rounded-lg' 
      style={{
        background: "linear-gradient(to right, rgb(233, 220, 201), rgba(255, 255, 255, 0))"
      }}
    >
      <Image src={'/knowledge.png'} alt="Course Icon" width={70} height={70} />

      <div>
        <h2 className='font-bold text-2xl text-black '>{course?.courselayout?.courseTitle}</h2>
        <p className='text-gray-700'>{course?.courselayout?.courseSummary}</p>
        
        <Progress className='mt-3' />

        <h2 className='mt-3 text-lg text-gray-900'>Total Chapter: {course?.courselayout?.chapters?.length}</h2>
      </div>
    </div>
  )
} 

export default CourseIntroCard
