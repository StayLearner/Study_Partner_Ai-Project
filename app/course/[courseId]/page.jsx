"use client"

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import CourseIntroCard from './_components/CourseIntroCard';
import StudyMaterialSection from './_components/StudyMaterialSection';
import ChapterList from './_components/ChapterList';
import { withToastPromise } from '@/lib/toast';
import BackButton from '@/components/ui/back-button';




function Course() {

    const {courseId}= useParams();
    const [course,setCourse]= useState();
    const initialized = useRef(false);

    useEffect(()=>{
        if (initialized.current) return;
        initialized.current = true;
        GetCourse();
    },[])

     const GetCourse=async () => {
        try {
          const result = await withToastPromise(
            axios.get('/api/courses?courseId=' + courseId),
            {
              loading: 'Loading course data...',
              success: 'Course loaded!',
              error: 'Failed to load course.'
            }
          );
          setCourse(result.data.result);
        } catch (error) {
          console.error('Error loading course:', error);
        }
     }
  
    return (
    <div>
      <div className='mb-4'>
        <BackButton fallback="/dashboard" />
      </div>
        <div className=''>
          
        <CourseIntroCard course={course} />

        <StudyMaterialSection courseId={courseId} course={course}/>

         <ChapterList course={course}/>


       </div>
    </div>
  )
}

export default Course