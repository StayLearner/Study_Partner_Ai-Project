'use client'

import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';

function Create() {
      const [step,setStep]=useState(0);
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
        <h2 className='font-bold text-4xl text-primary'>Start Building new Material</h2>
        <p className='text-gray-500 text-lg'>Fill all details in order to generate study material for learn</p>
    
        <div>
            {step==0? <SelectOption/> :null}
        </div>
        

        <div className='flex justify-between w-full mt-32'>
            {step!=0? <Button variant="outline" onClick={()=> setStep(step-1)}>Previous</Button>:'-'}
            {step==0? <Button onClick={()=>setStep(step+1)}>Next</Button>:<Button>Generate</Button>} 
        </div>

    </div>
  )
}

export default Create