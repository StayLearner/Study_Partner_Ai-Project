import { db } from "@/configs/db";
import { inngest } from "./client";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

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
        console.log(result);

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
)
