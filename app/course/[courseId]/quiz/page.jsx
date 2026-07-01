"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import { showErrorToast } from '@/lib/toast';
import BackButton from '@/components/ui/back-button';

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
      <div className='mb-4'>
        <BackButton fallback={`/course/${courseId}`} />
      </div>
       <h2 className='font-bold text-xl sm:text-2xl mb-4'>Quiz</h2>

       <StepProgress data={quiz}  stepCount={stepCount} setStepCount={(value)=> setStepCount(value)}/>

<div>
   {quiz&&quiz.map((item,index)=>{
     
   })}   
</div>

    </div>
  )
}

export default Quiz




