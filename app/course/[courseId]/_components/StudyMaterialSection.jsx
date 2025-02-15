import React from 'react'
import MaterialCardItem from './MaterialCardItem'


function StudyMaterialSection() {

   const MaterialList = [
    {
        name:'Notes/Chapters',
        description:'Read notes to prepare it',
        icon:'/notes.png',
        path:'/notes'
    },
    {
        name:'Flashcard',
        description:'Flashcards for remember concepts',
        icon:'/Flashcard.png',
        path:'/flashcards'
    },
    {
        name:'Quiz',
        description:'Great Way to Test your Knowledge',
        icon:'/quiz.png',
        path:'/quiz'
    },
    {
        name:'Question/Answer',
        description:'Help to practice your learning',
        icon:'/qa.png',
        path:'/qa'
    }
   ]


  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>Study Material</h2>
    
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            {MaterialList.map((item,index)=>(
                <MaterialCardItem key={index} item={item}/>
            ))}

            {/* <MaterialCardItem/> */}
        </div>
    </div>
  )
}

export default StudyMaterialSection