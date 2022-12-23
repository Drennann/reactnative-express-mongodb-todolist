import { Router } from "express";
import { deleteTask, getTask, getTasks, postTask, putTask } from "../controllers/tasks.controllers.js";

const tasksRouter = Router();

tasksRouter.get("/", getTasks)

tasksRouter.post("/", postTask)

tasksRouter.put("/:id", putTask)

tasksRouter.delete("/:id", deleteTask)

tasksRouter.get("/:id", getTask)

export default tasksRouter;