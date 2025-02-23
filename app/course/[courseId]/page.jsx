"use client"

import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseIntroCard from './_components/CourseIntroCard';
import StudyMaterialSection from './_components/StudyMaterialSection';
import ChapterList from './_components/ChapterList';
import VantaBackground from './_components/VantaClousBackground';




function Course() {

    const {courseId}= useParams();
    const [course,setCourse]= useState();
    useEffect(()=>{
        GetCourse();
    },[])

     const GetCourse=async () => {
         const result= await axios.get('/api/courses?courseId='+courseId)
         console.log(result);
         setCourse(result.data.result); 
     }
  
    return (
    <div>
      
       <VantaBackground/>
        <div className=''>
          
        <CourseIntroCard course={course} />

        <StudyMaterialSection courseId={courseId} course={course}/>

         <ChapterList course={course}/>


       </div>
    </div>
  )
}

export default Course