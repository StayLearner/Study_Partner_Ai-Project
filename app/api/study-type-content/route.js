// import { GenerateStudyTypeContentAiModel } from "@/configs/AiModel";
// import { db } from "@/configs/db";
// import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
// import { inngest } from "@/inngest/client";
// import { NextResponse } from "next/server";


// export async function POST(req) {
//     const {chapters,courseId,type}= await req.json();

//     const PROMPT=type='Flashcard'? 
//     'Generate the flashcard on topic : '+chapters+' in JSON format with front back Content, Maximum 15'
//      :'Generate Quiz on Topic : '+chapters+' with Question and Options along with correct answer in JSON format (MAX 10)'

// // Generate course Content using Ai
//      const aiResp=await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);


    
//     //Handles the response text properly
//     const aiResult= aiResp.response.text();
//     const cleanResponse = aiResult.replace(/```json\n|\n```/g, "").trim();
//     const parsedData = JSON.parse(cleanResponse);


//      //Insert Record to DB, Update status to Generating...
//      const dbresult=await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
//            courseId:courseId,
//            type:type,
//            content:parsedData
//      }).returning({id:STUDY_TYPE_CONTENT_TABLE.id})

//        console.log(dbresult);
       
     
//      //Trigger Inngest Function 

// const result=await inngest.send({
//         name:'studyType.content',
//         data:{
//             studyType:type,
//             prompt:PROMPT,
//             courseId:courseId,
//             recordId:result[0].id
//         }
//      })
          
//      return NextResponse.json(result[0].id);
// }



import { GenerateStudyTypeContentAiModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Parse request body safely
        let body;
        try {
            body = await req.json();
        } catch (error) {
            return NextResponse.json({ error: "Invalid JSON in request" }, { status: 400 });
        }

        const { chapters, courseId, type } = body;

        if (!chapters || !courseId || !type) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Generate prompt
        const PROMPT = type === 'Flashcard' 
            ? `Generate the flashcard on topic: ${chapters} in JSON format with front-back content, Maximum 15`
            : `Generate Quiz on Topic: ${chapters} with Question and Options along with correct answer in JSON format (MAX 10)`;

        // Generate AI response
        const aiResp = await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);
        const aiResult = await aiResp.response.text();
        const cleanResponse = aiResult.replace(/```json\n|\n```/g, "").trim();

        // Parse AI response safely
        let parsedData;
        try {
            parsedData = JSON.parse(cleanResponse);
        } catch (error) {
            console.error("Failed to parse AI response:", error);
            return NextResponse.json({ error: "AI response parsing error" }, { status: 500 });
        }

        // Insert into DB
        const dbresult = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
            courseId: courseId,
            type: type,
            content: parsedData
        }).returning({ id: STUDY_TYPE_CONTENT_TABLE.id });

        const recordId = dbresult[0]?.id;
        if (!recordId) {
            return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
        }

        // Trigger Inngest function
        const inngestResult = await inngest.send({
            name: 'studyType.content',
            data: {
                studyType: type,
                prompt: PROMPT,
                courseId: courseId,
                recordId: recordId
            }
        });

        return NextResponse.json({ recordId, inngestResult });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

