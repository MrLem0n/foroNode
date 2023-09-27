import {Router} from "express";

import { ctrlCreateForum, ctrlDeleteForum, ctrlUpdateForum, ctrlGetForum } from "../controllers/forum.controllers.js";

const forumRouter = Router();

forumRouter.get(`/api/posts`, ctrlGetForum)

forumRouter.post(`/api/posts`, ctrlCreateForum)

forumRouter.put(`/api/posts/:id`, ctrlUpdateForum)

forumRouter.delete(`/api/posts/:id`, ctrlDeleteForum)

export {forumRouter}