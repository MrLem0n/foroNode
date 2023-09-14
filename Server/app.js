import express from "express";
import { taskRouter } from "./src/routes/task.routes.js";
import { startDb } from "./src/config/database.js";
import path from 'node:path'
const port = 3000;

const app = express();
app.use(express.json());
app.use(`/`, taskRouter);

app.listen(port, () => {
  console.log(`Servidores express en http://localhost:${port}`);
  startDb();
});
