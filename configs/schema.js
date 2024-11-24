import { boolean, serial, varchar,pgTable } from "drizzle-orm/pg-core";


export const USER_TABLE= pgTable ('users',{
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})

// import { boolean, serial, varchar, pgTable, timestamp } from "drizzle-orm/pg-core";

// export const USER_TABLE = pgTable('users', {
//     id: serial('id').primaryKey(),
//     name: varchar('name').notNull(),
//     email: varchar('email').notNull(),
//     isMember: boolean('is_member').default(false),
//     createdAt: timestamp('created_at').defaultNow().notNull(),
// });