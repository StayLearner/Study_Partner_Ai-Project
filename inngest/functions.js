import { db } from "@/configs/db";
import { inngest } from "./client";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE, USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { generateNotesAiModel, GenerateQuizAiModel, GenerateStudyTypeContentAiModel } from "@/configs/AiModel";

/* This code snippet is exporting a constant named `helloWorld` which is assigned the result of calling
the `inngest.createFunction` function. This function is creating a function with the ID
"hello-world" that listens for the event "test/hello.world". */
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello World!" };
  },
);




/* The code snippet you provided is exporting a constant named `CreateNewUser` which is assigned the
result of calling the `inngest.createFunction` function. This function is creating a function with
the ID "create-user" that listens for the event "user.create". */

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {

    
    //Get Event Data
    const { user } = event.data;

    if (!user?.primaryEmailAddress?.emailAddress) {
        throw new Error('Email address is required');
      }


    const result = await step.run(
      "Check User and create New if not in DB",
      async () => {

        //copy under section
        //check user is already exist
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        // console.log(result);

        if (result?.length == 0) {
          //if not then add to database
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
             
            return userResp;
        }
        // return result;
      }
    );

    return 'Success';
  }

  // Step is to send email notification

  //send email notification after 3 days
);






/* The code snippet `export const GenerateNotes =
inngest.createFunction({id:'generate-course'},{event:'notes.generate'}, async({event,step})=>{ const
{course}= event.data; })` is defining a constant named `GenerateNotes` that is assigned the result
of calling the `inngest.createFunction` function. This function is creating a function with the ID
"generate-course" that listens for the event "notes.generate". */

export const GenerateNotes = inngest.createFunction(
  {id:'generate-course'},
  {event:'notes.generate'},
  async({event,step})=>{
   const {course}= event.data;

   const notesResult=await step.run('Generate Chapter Notes',async()=> {
    const Chapters=course?.courselayout?.chapters;
    let index=0;
    Chapters.forEach(async(chapter) => {
    const PROMPT='Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format but not Add any HTML- Head, HTML Body, HTMl Title tag), The chapters :' +JSON.stringify(chapter);  
     
    const result= await generateNotesAiModel.sendMessage(PROMPT);
    const aiRespn= result.response.text();

    await db.insert(CHAPTER_NOTES_TABLE).values({
      chapterId:index,
      courseId:course?.courseId,
      notes:aiRespn
    })

    index=index+1;

  });

    return 'Completed'
   })
  



//Update status change to ready Status

const updateCourseStatusResult= await step.run('Update Course status to ready',async()=>{

  const result= await db.update(STUDY_MATERIAL_TABLE).set({
    status:'Ready'
  }) .where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId))

  return 'Success';
})

  });









export const GenerateStudyTypeContent=inngest.createFunction(
  {id:'Generate Study Type Content'},
  {event:'studyType.Content'},

  async ({event,step}) => {
     const {studyType,prompt,courseId,recordId}= event.data;


     
     const AiResult= await step.run('Generating Flashcard using AI',async()=> {
       

        const result= 
        studyType=='FlashCard'?
        await GenerateStudyTypeContentAiModel.sendMessage(prompt):
        await GenerateQuizAiModel.sendMessage(prompt);
        const AIResult= JSON.parse(result.response.text());
        return AIResult;
     })

          //Save the Result
      const DbResult=await step.run('Save Result to DB',async() => {
         const result=await db.update(STUDY_TYPE_CONTENT_TABLE).set({
           content:AiResult,
           status:'Ready'
         }).where(eq(STUDY_TYPE_CONTENT_TABLE.id,recordId))

           return "Data Inserted"
      })
  }
);
