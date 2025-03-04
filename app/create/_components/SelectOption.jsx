import { icons } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SelectOption({selectedStudyType}) {

  const Options=[
    {
        name:'Exam',
        icon:'/exam.png'
    },
    {
        name:'Job Interview',
        icon:'/job.png'
    },
    {
        name:'Practice',
        icon:'/practice.png'
    },
    {
        name:'Coding Prep',
        icon:'/code.png'
    },
    {
        name:'Other',
        icon:'/knowledge.png'
    },
  ]

 const [selectedOption,setSelectedOption]=useState();

  return (
    <div >
        <h2 className='text-center mb-2 text-lg'>For Which You Want to Create Your Study Material?</h2>
        <div className='grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {Options.map((option,index)=>(
                <div key={index} 
                className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:border-teal-500 cursor-pointer ${option?.name==selectedOption&&'border-teal-500'}`}
                onClick={()=>{setSelectedOption(option.name);selectedStudyType(option.name)}}>
                    <Image src={option.icon} alt={option.name} width={50} height={50}/>
                    <h2 className='text-sm mt-2'>{option.name}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SelectOption