import {Router} from "express";

import { ctrlCreateTasks, ctrlDeleteTasks, ctrlUpdateTasks, ctrlGetTasks } from "../controllers/task.controllers.js";

const taskRouter = Router();

taskRouter.get(`/api/tasks`, ctrlGetTasks)

taskRouter.post(`/api/tasks`, ctrlCreateTasks)

taskRouter.put(`/api/tasks/:id`, ctrlUpdateTasks)

taskRouter.delete(`/api/tasks/:id`, ctrlDeleteTasks)

export {taskRouter}