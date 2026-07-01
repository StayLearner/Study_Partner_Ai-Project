"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import { showErrorToast } from '@/lib/toast';

import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';

function Quiz() {
    const {courseId}= useParams();
    const [quizData,setQuizData]=useState();
    const [stepCount,setStepCount]= useState(0);
    const [quiz,setQuiz]=useState([]);


useEffect(() => {
  GetQuiz()

}, [])
      const GetQuiz=async()=>{
        try {
          const result=await axios.post('/api/study-type',{
              courseId:courseId,
              studyType:'Quiz'
          })

          setQuizData(result.data); 
          setQuiz(result.data?.content?.quiz)
        } catch (error) {
          showErrorToast('Failed to load quiz content', error);
        }
      }
  return (
    <div>
       <h2 className='font-bold text-2xl'>Quiz</h2>

       <StepProgress data={quiz}  stepCount={stepCount} setStepCount={(value)=> setStepCount(value)}/>

<div>
   {quiz&&quiz.map((item,index)=>{
     
   })}   
</div>

    </div>
  )
}

export default Quiz




