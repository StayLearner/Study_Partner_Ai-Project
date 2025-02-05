/**
 * The Provider component checks if a user is new and adds them to the database if they are not already
 * present.
 * @returns The `Provider` component is being returned, which wraps the `children` components passed to
 * it. Inside the `Provider` component, there is logic to check if the current user is a new user by
 * querying the database using the `db` connection. If the user is not found in the database, their
 * information is inserted into the `USER_TABLE`.
 */
"use client"

import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({ children }) {

    const {user} = useUser();

  // for loading method
   useEffect(() => {
    user&&CheckIsNewUser();
   },[user])
    



    const CheckIsNewUser = async () => {
        // //check user is already exist   
        // const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))
        // console.log(result);


        // if (result?.length==0) {

        //     //if not then add to database
        //     const userResp = await db.insert(USER_TABLE).values({
        //         name:user?.fullName,
        //         email:user?.primaryEmailAddress?.emailAddress

        //     }).returning({ id:USER_TABLE.id })

        //     console.log(userResp);
        // }

        const resp=  axios.post('/api/create-user',{user:user});
        console.log(resp.data);

    }


    return (
        <div>
            {children}
        </div>
    )
}

export default Provider

