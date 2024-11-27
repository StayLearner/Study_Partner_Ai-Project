import { json } from "drizzle-orm/mysql-core";
import { boolean, serial, varchar,pgTable, jsonb } from "drizzle-orm/pg-core";


export const USER_TABLE= pgTable ('users',{
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})

export const STUDY_MATERIAL_TABLE = pgTable('studyMaterial', {
    id: serial().primaryKey(),
    courseId: varchar().notNull(),
    courseType: varchar().notNull(),
    topic: varchar().notNull(),
    difficultyLevel: varchar().default('Easy'),
    courselayout: jsonb(),  // Change to jsonb() if using PostgreSQL
    createdBy: varchar().notNull(),
    status: varchar().default('Generating'),
  });
  


// import { boolean, serial, varchar, pgTable, timestamp } from "drizzle-orm/pg-core";

// export const USER_TABLE = pgTable('users', {
//     id: serial('id').primaryKey(),
//     name: varchar('name').notNull(),
//     email: varchar('email').notNull(),
//     isMember: boolean('is_member').default(false),
//     createdAt: timestamp('created_at').defaultNow().notNull(),
// });