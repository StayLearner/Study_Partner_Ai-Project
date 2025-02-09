"use client"

import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Course() {

    const {courseId}= useParams();
    const [course,setCourse]= useState();
    useEffect(()=>{
        GetCourse();
    },[])

     const GetCourse=async () => {
         const result=await axios.get('/api/courses?courseId='+courseId)
         console.log(result);
         setCourse(result.data.result); 
     }
  
    return (
    <div>
        <DashboardHeader/>

        // Course Intro


        //Study Materials Options



        // Chapter List

        
    </div>
  )
}

export default Course