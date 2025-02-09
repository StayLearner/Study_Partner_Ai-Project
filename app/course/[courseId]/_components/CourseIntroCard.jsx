import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'


function CourseIntroCard({course}) {
  return (
    <div className='flex gap-5 items-center p-5 border shadow-md'>
        <Image src={'/knowledge.png'} alt="other" width={70} height={70} />

        <div>
            <h2 className='font-bold text-2xl text-black'>{course?.courselayout?.courseTitle}</h2>
            <p>{course?.courselayout?.courseSummary}</p>
            <Progress className='mt-3'/>

            <h2 className='mt-3 text-lg text-teal-400'>Total Chapter : {course?.courselayout?.chapters?.length}</h2>
        </div>
    </div>
  )
} 

export default CourseIntroCard