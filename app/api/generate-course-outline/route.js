
import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";




export async function POST(req) {
    const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();

    const PROMPT='Generate a study Material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+'  with summary of course and a title of course, List of Chapters along with summary for each chapter, Topic list in each chapter in JSON format'
    
    //Generate course Layout using AI
     const aiResp=await courseOutlineAIModel.sendMessage(PROMPT);


 // Handle the response text properly
 const aiResult =  aiResp.response.text();
 
 const cleanResponse = aiResult.replace(/```json\n|\n```/g, "").trim();
 const parsedData = JSON.parse(cleanResponse);

     //save the result along with user input

     const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId:courseId,
        courseType:courseType,
        createdBy:createdBy,
        topic:topic,
        courselayout:parsedData
     }).returning({resp:STUDY_MATERIAL_TABLE})

    //  console.log(dbResult);



   // Trigger the inngest function to generate chapter notes

const result=await inngest.send({
    name:'notes.generate',
    data:{
        course:dbResult[0].resp
    }
})
    console.log(result)


    return NextResponse.json({result:dbResult[0]})
}
