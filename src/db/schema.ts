import {pgSchema, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const schema = pgSchema("digitalstoryteller")

// export const users = schema.table('users', {
//   id: serial('id').primaryKey(),
//   fullName: text('full_name'),
//   phone: varchar('phone', {length: 256}),
// });