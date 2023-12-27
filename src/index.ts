// src/index.js
import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

import {db} from "./db";
import {users} from "./db/schema";

app.get("/", async (req: Request, res: Response) => {
  let result = await db.select().from(users)
  res.send(result);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});