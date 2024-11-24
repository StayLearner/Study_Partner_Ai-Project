import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.NEXT_PUBLIC_DATA_CONNECTION_STRING);


//For databse connection

// db/index.ts
// import { neon } from '@neondatabase/serverless'
// import { drizzle } from 'drizzle-orm/neon-http'


// if (!process.env.DATABASE_URL) {
//     throw new Error('DATABASE_URL environment variable is not set')
//   }


// const sql = neon(process.env.NEXT_PUBLIC_DATA_CONNECTION_STRING)
// export const db = drizzle(sql)