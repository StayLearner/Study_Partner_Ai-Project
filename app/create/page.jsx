'use client'

import { v4 as uuidv4} from 'uuid';
import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';


function Create() {
      const [step,setStep]=useState(0);
      const [formData,setFormData]=useState([]);
      const {user}=useUser();
      const [loading,setLoading]= useState(false);

      const router= useRouter();

     /**
      * The function `handleUserInput` updates the form data with a new field value based on the field
      * name provided and logs the updated form data.
      */
      const handleUserInput=(fieldName,fieldValue)=>{
           
        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
        
        console.log(formData);
      }



   /**
    * The function `GenerateCourseOutline` asynchronously sends a POST request to generate a course
    * outline using data such as courseId, formData, and createdBy.
    * Used to save User Input and Generate Course Layout using Ai
    */
    const GenerateCourseOutline= async() =>{
      try{
      const courseId=uuidv4();
       setLoading(true);
     const result= await axios.post('/api/generate-course-outline',{
      courseId:courseId,
      ...formData,
      createdBy:user?.primaryEmailAddress?.emailAddress
     });
     setLoading(false);
     router.replace('/dashboard');
     console.log(result.data.result.resp);


        console.log('Course outline generated:', result.data);
    }catch (error) {
      console.log('Error generating course outline:', error.response || error.message);
    }
  };
  



  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
        <h2 className='font-bold text-4xl text-primary'>Start Building new Material</h2>
        <p className='text-gray-500 text-lg'>Fill all details in order to generate study material for learn</p>
    
        <div className='mt-10'>
            {step==0? <SelectOption selectedStudyType={(value)=>handleUserInput('courseType',value)}/> 
            : <TopicInput
            setTopic={(value)=>handleUserInput('topic',value)}
            setDifficultyLevel={(value)=>handleUserInput('difficultyLevel',value)}
            />}
        </div>
        

        <div className='flex justify-between w-full mt-32'>
            {step!=0? <Button variant="outline" onClick={()=> setStep(step-1)}>Previous</Button>:'-'}
            {step==0? <Button onClick={()=>setStep(step+1)}>Next</Button>:<Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading ? <Loader className='animate-spin'/> :'Generate'}  </Button>} 
        </div>

    </div>
  )
}

export default Create