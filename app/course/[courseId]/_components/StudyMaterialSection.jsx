import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import axios from 'axios'
import Link from 'next/link';


function StudyMaterialSection({courseId,course}) {

     const [studyTypeContent,setStudyTypeContent] =useState();    

   const MaterialList = [
    {
        name:'Notes/Chapters',
        description:'Read notes to prepare it',
        icon:'/notes.png',
        path:'/notes',
        type:'notes' 
    },
    {
        name:'Flashcard',
        description:'Flashcards for remember concepts',
        icon:'/Flashcard.png',
        path:'/flashcards',
        type:'flashcard'
    },
    {
        name:'Quiz',
        description:'Great Way to Test your Knowledge',
        icon:'/quiz.png',
        path:'/quiz',
        type:'quiz'
    },
    {
        name:'Question/Answer',
        description:'Help to practice your learning',
        icon:'/qa.png',
        path:'/qa',
        type:'qa'
    }
   ]
      

   const GetStudyMaterial=async()=>{
    const result = await axios.post('/api/study-type',{
        
        
        courseId:courseId,
        studyType:'ALL'
    })
       console.log('API response',result?.data)
      setStudyTypeContent(result.data)
   }


   useEffect(() => {
    GetStudyMaterial();
 },[courseId])

  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>Study Material</h2>
    
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            {MaterialList.map((item,index)=>(

                <Link key={index} href={'/course/'+courseId+item.path}>
                <MaterialCardItem key={index} item={item}
                studyTypeContent={studyTypeContent} 
                course={course}
                />
                </Link>
            ))}

        </div>
    </div>
  )
}

export default StudyMaterialSection