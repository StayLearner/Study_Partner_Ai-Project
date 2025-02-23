
import { boolean, serial, varchar,pgTable, jsonb, integer, text, json } from "drizzle-orm/pg-core";


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


  export const CHAPTER_NOTES_TABLE=pgTable('chapterNotes',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    chapterId:integer().notNull(),
    notes:text()
  })


  export const STUDY_TYPE_CONTENT_TABLE=pgTable('studyTypeContent',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    content:jsonb(),
    type:varchar().notNull(),
    status:varchar().default('Generating')
  })

  


