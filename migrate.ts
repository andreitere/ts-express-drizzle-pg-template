import 'dotenv/config';
import {migrate} from 'drizzle-orm/postgres-js/migrator';
import {db, connection} from './src/db';
// This will run migrations on the database, skipping the ones already applied
// @ts-ignore
await migrate(db, {migrationsFolder: './drizzle'});
// Don't forget to close the connection, otherwise the script will hang
// @ts-ignore
await connection.end();