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
import { toast } from 'sonner';

import { withToastPromise } from '@/lib/toast';
import BackButton from '@/components/ui/back-button';


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
        
      }



   /**
    * The function `GenerateCourseOutline` asynchronously sends a POST request to generate a course
    * outline using data such as courseId, formData, and createdBy.
    * Used to save User Input and Generate Course Layout using Ai
    */
    const GenerateCourseOutline= async() =>{
      const courseId=uuidv4();
      setLoading(true);
      
      try {
        await withToastPromise(
          axios.post('/api/generate-course-outline',{
            courseId:courseId,
            ...formData,
            createdBy:user?.primaryEmailAddress?.emailAddress
          }),
          {
            loading: 'Generating course outline...',
            success: 'Course outline created! Content is generating in background.',
            error: 'Failed to generate course outline.'
          }
        );
        router.replace('/dashboard');
      } catch (error) {
        console.log('Error generating course outline:', error?.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };


  return (
    <div className='flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-36 pt-8 sm:pt-12 mt-14 sm:mt-16 pb-12'>
        <div className='w-full mb-6'>
          <BackButton fallback="/dashboard" />
        </div>
        <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-primary text-center'>Start Building new Material</h2>
        <p className='text-gray-500 text-sm sm:text-base md:text-lg mt-2 text-center'>Fill all details in order to generate study material for learning</p>
    
        <div className='mt-8 sm:mt-10 w-full'>
            {step==0? <SelectOption selectedStudyType={(value)=>handleUserInput('courseType',value)}/> 
            : <TopicInput
            setTopic={(value)=>handleUserInput('topic',value)}
            setDifficultyLevel={(value)=>handleUserInput('difficultyLevel',value)}
            />}
        </div>
        

        <div className='flex flex-wrap justify-between w-full mt-10 sm:mt-16 md:mt-24 gap-3'>
            {step!=0? <Button variant="outline" onClick={()=> setStep(step-1)}>← Previous</Button>:'-'}
            {step==0? <Button onClick={()=>setStep(step+1)}>Next →</Button>:<Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading ? <Loader className='animate-spin'/> :'Generate'}  </Button>} 
        </div>

    </div>
  )
}

export default Create