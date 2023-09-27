import express from "express";
import { forumRouter } from "./src/routes/Forum.js";
import { startDb } from "./src/config/database.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use(`/`, forumRouter);

app.listen(port, () => {
  console.log(`Servidores express en http://localhost:${port}`);
  startDb();
});
