"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';

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
        const result=await axios.post('/api/study-type',{
            courseId:courseId,
            studyType:'Quiz'
        })

         

        setQuizData(result.data); 
        setQuiz(result.data?.content?.quiz)
        console.log(result.data?.content?.question);
        
         console.log(result + "hello result");
        
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




