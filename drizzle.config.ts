import 'dotenv/config';
import type {Config} from 'drizzle-kit';

// @ts-ignore
export default {
  schema: './src/db',
  out: './drizzle',
  driver: 'pg',
  connectionString: process.env.DATABASE_URL,
} satisfies Config;