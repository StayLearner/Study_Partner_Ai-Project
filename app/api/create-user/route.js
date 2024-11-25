import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";


/**
 * The above function is an asynchronous JavaScript function that receives a user object from a
 * request, sends it to a service named inngest with the event name 'user.create', and returns the
 * result in a JSON response.
 * @param req - The `req` parameter in the code snippet represents the request object that is passed to
 * the `POST` function. It is used to extract the JSON data from the request body using `req.json()`
 * method. The extracted `user` data is then sent to a service called `inngest`
 * @returns a JSON response with the result of the `inngest.send` function call.
 */


export async function POST(req) {
  const {user}= await req.json();
  
  const result= await inngest.send({
    name:'user.create',
    data:{
        user:user
    }
  })

  return NextResponse.json({result:result})
}