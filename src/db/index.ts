import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
const connectionString = process.env.DATABASE_URL
// @ts-ignore
export const connection = postgres(connectionString)
export const db = drizzle(connection);