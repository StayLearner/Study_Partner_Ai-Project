import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({ course }) {
  return (
    <div 
      className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center p-4 sm:p-5 border shadow-md rounded-lg' 
      style={{
        background: "linear-gradient(to right, rgb(233, 220, 201), rgba(255, 255, 255, 0))"
      }}
    >
      {/* Responsive icon */}
      <div className="shrink-0">
        <Image
          src={'/knowledge1.png'}
          alt="Course Icon"
          width={70}
          height={70}
          className="w-14 h-14 sm:w-[70px] sm:h-[70px] object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className='font-bold text-xl sm:text-2xl text-black leading-tight'>
          {course?.courselayout?.courseTitle}
        </h2>
        <p className='text-gray-700 text-sm sm:text-base mt-1'>
          {course?.courselayout?.courseSummary}
        </p>
        
        <Progress className='mt-3' />

        <h2 className='mt-2 text-base sm:text-lg text-gray-900'>
          Total Chapters: {course?.courselayout?.chapters?.length}
        </h2>
      </div>
    </div>
  )
} 

export default CourseIntroCard
