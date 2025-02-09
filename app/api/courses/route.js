import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {createdBy}=await req.json();
    const result= await db.select().from(STUDY_MATERIAL_TABLE)
    .where(eq(STUDY_MATERIAL_TABLE.createdBy,createdBy))
    .orderBy(desc(STUDY_MATERIAL_TABLE.id))


    return NextResponse.json({result:result})

  // NextResponse.json(...): Sends a JSON response to the client.
// { result: result }: Wraps the query result in a JSON object under the key result.
}




//GET api for accessing data from database
export async function GET(req) {
  
    const reqUrl=req.url;
    const {searchParams}= new URL(reqUrl);
    const courseId=searchParams?.get('courseId')

    const course= await db.select().from(STUDY_MATERIAL_TABLE)
    .where(eq(STUDY_MATERIAL_TABLE?.courseId,courseId));

    return NextResponse.json({result:course[0]})
}